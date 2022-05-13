import { Button } from "../button/button";
import "./header.css";

export function Header(props) {
    return (
        <header>
            <span className="header__brand">WhatsAppFeed</span>
            {props.showButton ? (
                <Button className={"button-primary hidden-tablet"}>
                    Get Started
                </Button>
            ) : null}
        </header>
    );
}
