import "./nothing-found.css";
const illustration = new URL("./empty-box.svg", import.meta.url);

export function NothingFound() {
    return (
        <div className="nothing-found">
            <img src={illustration}></img>
            <p>
                <span className="text-bold">We couldn´t find any updates.</span>
                <br></br>
                Ask a friend to change his profile picture and then try again!
            </p>
        </div>
    );
}
