import "./nothing-found.css";
const illustration = new URL("./empty-box.svg", import.meta.url);

export function NothingFound() {
    return (
        <div className="nothing-found">
            <img src={illustration}></img>
            <p>
                We couldn´t find any updates.
                <br></br>
                When a contact changes their picture or status you will see it
                here.
            </p>
        </div>
    );
}
