import { Button } from "../button/button";
import "./header.css";
import { Container } from "../container/container";
import { Link } from "react-router-dom";
const icon = new URL("./../../../img/icon.png", import.meta.url);

export type Props = {
    fixed: boolean;
    tall: boolean;
    showButton: boolean;
};

export function Header(props: Props) {
    return (
        <header className={props.fixed ? "header--fixed" : ""}>
            <Container>
                <div
                    className={`header__inner ${
                        props.tall
                            ? "header__inner--tall"
                            : "header__inner--slim"
                    }`}
                >
                    <Link to="/" className="header__brand">
                        <img className="header__icon" src={icon}></img>
                        <span>WhatsNewFeed</span>
                    </Link>

                    {props.showButton ? (
                        <Link to="/feed">
                            <Button className={"button-primary"}>
                                Get Started
                            </Button>
                        </Link>
                    ) : null}
                </div>
            </Container>
        </header>
    );
}
