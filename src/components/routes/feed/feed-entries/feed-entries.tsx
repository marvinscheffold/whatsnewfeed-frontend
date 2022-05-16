import "./feed-entries.css";
import { FeedEntry, FeedEntryData } from "../feed-entry/feed-entry";
import { FeedEntrySkeleton } from "../feed-entry/feed-entry-skeleton";

export function FeedEntries(props: { feedEntries: FeedEntryData[] }) {
    const feedEntries = props.feedEntries;
    return (
        <section className="posts">
            {feedEntries.length === 0 ? (
                <>
                    {" "}
                    <FeedEntrySkeleton type="text" />
                    <FeedEntrySkeleton type="image" />
                    <FeedEntrySkeleton type="text" />
                    <FeedEntrySkeleton type="text" />
                </>
            ) : (
                feedEntries.map((feedEntry, index) => {
                    return <FeedEntry feedEntry={feedEntry} />;
                })
            )}
        </section>
    );
}
