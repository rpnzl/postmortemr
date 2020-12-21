import { Tag } from './Tag';

export function PostmortemListItem({ postmortem }) {
    return (
        <li className="mb-4 pl-4 py-2 border-l-4 border-gray-100 hover:border-gray-200">
            <article>
                <header>
                    <h2 className="mb-2 flex flex-col sm:flex-row sm:items-baseline">
                        <a className="font-medium underline mr-4 mb-1 sm:mb-0 md:text-lg" href={postmortem.link} target="_blank">{postmortem.title}</a>
                        <small className="text-gray-400 text-xs">
                            <span title={`Published on ${postmortem.published_on}`}>[p] {postmortem.published_on}</span>
                            <span className="mx-1">&middot;</span>
                            <span title={`Submitted on ${postmortem.submitted_on}`}>[s] {postmortem.submitted_on}</span>
                        </small>
                    </h2>
                    <div className="flex flex-wrap">
                        {postmortem.tags.map(tag => <Tag tag={tag}></Tag>)}
                    </div>
                </header>
            </article>
        </li>
    );
}
