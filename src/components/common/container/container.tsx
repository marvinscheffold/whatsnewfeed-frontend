import "./container.css";

export function Container(props) {
    return (
        <div {...props} className="container">
            {props.children}
        </div>
    );
}
