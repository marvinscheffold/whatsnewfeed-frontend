import "./feed.css";
import React from "react";
import { Header } from "../../common/header/header";
import { Footer } from "../../common/footer/footer";
import { Posts } from "./posts/posts";
import { Container } from "../../common/container/container";
import { Updates } from "./updates/updates";

export function Feed() {
    return (
        <>
            <Header showButton={false} />
            <Container>
                <div class="feed-grid">
                    <Updates />
                    <Posts />
                </div>
            </Container>
            <Footer />
        </>
    );
}
