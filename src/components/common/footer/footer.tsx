import { Container } from "../container/container";
import "./footer.css";

export function Footer(props) {
    return (
        <footer {...props}>
            <Container>
                <span>© 2022 WhatsNewFeed. All rights reserved</span>
            </Container>
        </footer>
    );
}
