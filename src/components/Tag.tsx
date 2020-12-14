import Link from 'next/link';
import classnames from 'classnames';

export function Tag({ size, tag }: { size?: 'lg', tag: any }) {
    const classes = classnames({
        tag: true,
        // colors
        'is-organization': tag.normalized_key === 'organization',
        'is-technology': tag.normalized_key === 'technology',
        // sizes
        'is-large': size && size === 'lg',
    });

    return (
        <Link href={`/tags/${tag.normalized_key}/${tag.normalized_value}`}>
            <a className={classes}>
                <span className="tag__key">{tag.key}</span>
                <span className="tag__value">{tag.value}</span>
                <span className="tag__count">{tag.postmortems.length}</span>
            </a>
        </Link>
    );
}
