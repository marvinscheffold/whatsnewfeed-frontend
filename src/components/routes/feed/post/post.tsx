import "./post.css";

export type PostData = {
    creator: string;
    text: string | null;
    imgSrc: string | null;
    avatarImgSrc: string | null;
    info: string;
};

export function Post(props: PostData) {
    return (
        <article className="post">
            <img
                className="post__avatar"
                alt={`${props.creator} avatar`}
                src={props.avatarImgSrc}
            ></img>
            <div className="post__right">
                <header>
                    <span className="post__contact-name">
                        {props.creator}
                    </span>
                    <span className="text-small">{props.info}</span>
                </header>
                {props.imgSrc ? (
                    <img
                        className="post__img"
                        src={props.imgSrc}
                        alt={`${props.creator}´s new image`}
                    ></img>
                ) : null}
                {props.text ? <span>{props.text}</span> : null}
            </div>
        </article>
    );
}
