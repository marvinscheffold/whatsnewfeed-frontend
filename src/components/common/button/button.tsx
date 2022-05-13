import "./button.css";

export function Button(props) {
    return <button className={"button-primary"}>{props.children}</button>;
}
