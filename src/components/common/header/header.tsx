import { Button } from "../button/button";
import "./header.css";
import { Container } from "../container/container";

export function Header(props) {
    return (
        <header>
            <Container>
                <div className="header__inner">
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
