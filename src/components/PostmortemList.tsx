import {  PostmortemListItem } from './PostmortemListItem';

export function PostmortemList({ postmortems }) {
    return (
        <ul className="p-4">
            {postmortems.map(postmortem => <PostmortemListItem postmortem={postmortem}></PostmortemListItem>)}
        </ul>
    );
}
