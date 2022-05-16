import { Button } from "../button/button";
import "./header.css";
import { Container } from "../container/container";

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
                    <span className="header__brand">WhatsAppFeed</span>
                    {props.showButton ? (
                        <Button className={"button-primary hidden-tablet"}>
                            Get Started
                        </Button>
                    ) : null}
                </div>
            </Container>
        </header>
    );
}
