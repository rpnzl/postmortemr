import { Tag } from './Tag';

export function Postmortem({ postmortem }) {
    return (
        <li>
            <a href={postmortem.link} target="_blank">{postmortem.title}</a>&nbsp;(<span className="flex">{postmortem.tags.map(tag => <Tag tag={tag}></Tag>)}</span>)
        </li>
    );
}
