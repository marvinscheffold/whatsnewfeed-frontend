import "./feed.css";
import React from "react";
import { Header } from "../../common/header/header";
import { Footer } from "../../common/footer/footer";
import { FeedEntries } from "./feed-entries/feed-entries";
import { FeedEntryData } from "../../../utils/types";
import { Container } from "../../common/container/container";
import { Progress } from "./progress/progress";
import { QrCode } from "./qrcode/qrcode";

export function Feed() {
    const feedEntries: FeedEntryData[] = [];
    return (
        <>
            <Header showButton={false} fixed={true} tall={false} />
            <Container>
                <div className="feed-grid">
                    <div className="feed-grid__left">
                        <FeedEntries feedEntries={feedEntries} />
                        {/* <QrCode value={null} /> */}
                    </div>
                    <div className="feed-grid__right">
                        <Progress
                            currentStep={2}
                            currentDescription={"Analyzing Sarah Berlin"}
                        />
                    </div>
                </div>
            </Container>
            <Footer className={"visible-tablet"} />
        </>
    );
}
