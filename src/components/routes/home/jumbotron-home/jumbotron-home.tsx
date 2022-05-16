import "./jumbotron-home.css";
import { Button } from "../../../common/button/button";
import { Container } from "../../../common/container/container";

export function JumbotronHome(props) {
    return (
        <section className="jumbotron-home">
            <Container>
                <div className="jumbotron-home__inner">
                    {/* left */}
                    <div className="jumbotron-home__left">
                        <h1>Find out all about your Friends.</h1>
                        <p>
                            WhatsAppFeed shows you when contacts change their
                            profile picture or update their status.
                        </p>
                        <div className="jumbotron-home__left__button-container">
                            <Button className={"button-primary"}>
                                Get Started
                            </Button>
                        </div>
                    </div>
                    {/* right */}
                    <div className="jumbotron-home__right"></div>
                </div>
            </Container>
        </section>
    );
}