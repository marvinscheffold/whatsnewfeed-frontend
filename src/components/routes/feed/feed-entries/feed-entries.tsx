import "./feed-entries.css";
import { FeedEntry } from "../feed-entry/feed-entry";
import { FeedEntrySkeleton } from "../feed-entry/feed-entry-skeleton";
import { FeedEntryData } from "../../../../utils/types";
import { NothingFound } from "../nothing-found/nothing-found";

export function FeedEntries(props: {
    feedEntries: FeedEntryData[];
    showSkeleton: boolean;
}) {
    const feedEntries = props.feedEntries;
    return (
        <section className="feed-entries">
            {feedEntries.map((feedEntry) => {
                return <FeedEntry feedEntry={feedEntry} />;
            })}
            {props.showSkeleton ? (
                <>
                    {" "}
                    <FeedEntrySkeleton type="image" />
                    <FeedEntrySkeleton type="image" />
                </>
            ) : null}
            {!props.showSkeleton && feedEntries.length === 0 ? (
                <NothingFound />
            ) : null}
        </section>
    );
}
