import { useImage } from "react-image";

export function Image(props) {
    const { src } = useImage({
        srcList: [props.src ? props.src : "", props.fallbackSrc],
    });

    return <img className={props.className} alt={props.alt} src={src} />;
}
