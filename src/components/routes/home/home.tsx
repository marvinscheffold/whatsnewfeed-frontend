import "./home.css";
import React from "react";
import { Container } from "../../common/container/container";
import { Header } from "../../common/header/header";
import { JumbotronHome } from "./jumbotron-home/jumbotron-home";
import { Footer } from "../../common/footer/footer";

export function Home() {
    return (
        <>
            <Container>
                <div className="home">
                    <Header />
                    <JumbotronHome />
                </div>
            </Container>
            <Footer />
        </>
    );
}
