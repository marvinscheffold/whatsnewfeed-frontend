import "./feed-entry.css";
import Skeleton from "react-loading-skeleton";

export type Props = {
    type: "image" | "text";
};

export function FeedEntrySkeleton({ type }: Props) {
    return (
        <article className="feed-entry">
            <Skeleton className="feed-entry__avatar" circle={true} />
            <div className="feed-entry__right">
                <header>
                    <span className="feed-entry__contact-name">
                        <Skeleton width={235} />
                    </span>
                    <span className="text-small">
                        <Skeleton width={115} />
                    </span>
                </header>
                {type === "image" ? (
                    <Skeleton className="feed-entry__img--skeleton" />
                ) : null}
                {type === "text" ? (
                    <span>
                        <Skeleton width={180} />
                    </span>
                ) : null}
            </div>
        </article>
    );
}
