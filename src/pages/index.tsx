import { GetStaticProps } from 'next';
import { Postmortem } from 'src/models';
import { PostmortemList } from 'src/components';

function Index({ total, items }) {
    return <PostmortemList postmortems={items}></PostmortemList>;
}

export const getStaticProps: GetStaticProps = async () => {
    const query = Postmortem
        .query()
        .withGraphFetched(`[
            tags.[
                postmortems,
            ],
        ]`)
        .orderBy('published_on', 'desc');

    const [
        total,
        items,
    ] = await Promise.all([
        query.resultSize(),
        query,
    ]);

    return {
        props: {
            total,
            items: items.map(v => v.toJSON()),
        },
    };
}

export default Index;
