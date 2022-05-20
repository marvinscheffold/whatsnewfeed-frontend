import "./feed-entry.css";
import { Image } from "../../../common/image/image";
import { FeedEntryData } from "../../../../utils/types";

export function FeedEntry(props: { feedEntry: FeedEntryData }) {
    const feedEntry = props.feedEntry;
    let infoText = "";
    if (feedEntry.type === "ABOUT_INFO_CHANGE") infoText = "Has a new Status";
    if (feedEntry.type === "PROFILE_PICTURE_CHANGE")
        infoText = "Has a new Picture";
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
                    <span className="text-small">{infoText}</span>
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
