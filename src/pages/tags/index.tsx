import { GetStaticProps } from 'next';
import Link from 'next/link';
import { Tag as TagComponent } from 'src/components';
import { Tag } from 'src/models';

function TagList({ total, items }) {
    return (
        <div>
            <Link href="/"><a>Home</a></Link>
            {items.map(tag => <TagComponent tag={tag}></TagComponent>)}
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const query = Tag
        .query()
        .withGraphFetched(`[
            postmortems,
        ]`)
        .orderBy(['key', 'value']);

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

export default TagList;
