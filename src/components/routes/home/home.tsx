import "./home.css";
import React from "react";
import { Header } from "../../common/header/header";
import { JumbotronHome } from "./jumbotron-home/jumbotron-home";
import { Footer } from "../../common/footer/footer";

export function Home() {
    return (
        <div className="home">
            <Header showButton={false} fixed={false} tall={true} />

            <JumbotronHome />

            <Footer />
        </div>
    );
}
