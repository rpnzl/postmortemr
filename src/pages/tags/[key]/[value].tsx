import { GetStaticPaths, GetStaticProps } from 'next';
import { PostmortemList, Tag as TagComponent } from 'src/components';
import { Tag } from 'src/models';

function TagView({ tag }) {
    return (
        <div>
            <div className="p-4 flex items-center">
                <TagComponent tag={tag} size="lg" />
            </div>
            <PostmortemList postmortems={tag.postmortems}></PostmortemList>
        </div>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const tags = await Tag.query()
        .select()
        .orderBy(['normalized_key', 'normalized_value']);

    const paths = tags.map((tag) => ({
      params: {
          key: tag.normalized_key,
          value: tag.normalized_value,
        },
    }));
  
    return { paths, fallback: false };
  }

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const tag = await Tag.query()
        .select()
        .withGraphFetched(`[
            postmortems.[
                tags.[
                    postmortems,
                ],
            ],
        ]`)
        .where('normalized_key', params.key)
        .where('normalized_value', params.value)
        .first();

    return {
        props: {
            tag: tag.toJSON(),
        },
    };
}

export default TagView;
