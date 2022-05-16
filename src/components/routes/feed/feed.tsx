import "./feed.css";
import React from "react";
import { Header } from "../../common/header/header";
import { Footer } from "../../common/footer/footer";
import { Posts } from "./posts/posts";
import { Container } from "../../common/container/container";
import { Updates } from "./updates/updates";
import { QrCode } from "./qrcode/qrcode";

export function Feed() {
    return (
        <>
            <Header showButton={false} fixed={true} tall={false} />
            <Container>
                <div className="feed-grid">
                    <div className="feed-grid__left">
                        <QrCode value={null} />
                    </div>
                    <div className="feed-grid__right">
                        <Updates />
                    </div>
                </div>
            </Container>
            <Footer className={"visible-tablet"} />
        </>
    );
}
