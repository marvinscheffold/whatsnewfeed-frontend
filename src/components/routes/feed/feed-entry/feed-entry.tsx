import "./feed-entry.css";
import { Image } from "../../../common/image/image";
import { FeedEntryData } from "../../../../utils/types";



export function FeedEntry(props: { feedEntry: FeedEntryData }) {
    const feedEntry = props.feedEntry;
    return (
        <article className="feed-entry">
            <Image
                className="feed-entry__avatar"
                alt={`${feedEntry.creator} avatar`}
                src={feedEntry.avatarImgSrc}
                fallbackSrc={"https://dummyimage.com/56x56/f1f1f1/fff&text=+"}
            />
            <div className="feed-entry__right">
                <header>
                    <span className="feed-entry__contact-name">
                        {feedEntry.creator}
                    </span>
                    <span className="text-small">{feedEntry.info}</span>
                </header>
                {feedEntry.imgSrc ? (
                    <Image
                        className="feed-entry__img"
                        alt={`${feedEntry.creator}´s new image`}
                        src={feedEntry.imgSrc}
                        fallbackSrc={
                            "https://dummyimage.com/400x400/f1f1f1/000000&text=Image+not+found"
                        }
                    />
                ) : null}
                {feedEntry.text ? <span>{feedEntry.text}</span> : null}
            </div>
        </article>
    );
}
