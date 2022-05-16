import "./post.css";
import { Image } from "../../../common/image/image";

export type PostData = {
    key: string;
    creator: string;
    text: string | null;
    imgSrc: string | null;
    avatarImgSrc: string | null;
    info: string;
};

export function Post(props: PostData) {
    return (
        <article className="post">
            <Image
                className="post__avatar"
                alt={`${props.creator} avatar`}
                src={props.avatarImgSrc}
                fallbackSrc={"https://dummyimage.com/56x56/ececf3/fff&text=+"}
            />
            <div className="post__right">
                <header>
                    <span className="post__contact-name">{props.creator}</span>
                    <span className="text-small">{props.info}</span>
                </header>
                {props.imgSrc ? (
                    <Image
                        className="post__img"
                        alt={`${props.creator}´s new image`}
                        src={props.imgSrc}
                        fallbackSrc={
                            "https://dummyimage.com/400x400/ececf3/000000&text=Image+not+found"
                        }
                    />
                ) : null}
                {props.text ? <span>{props.text}</span> : null}
            </div>
        </article>
    );
}
