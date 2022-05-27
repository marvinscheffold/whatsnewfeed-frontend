import "./feed.css";
import { useReducer, useEffect } from "react";
import { Header } from "../../common/header/header";
import { Footer } from "../../common/footer/footer";
import { FeedEntries } from "./feed-entries/feed-entries";
import { FeedState } from "../../../utils/types";
import { Container } from "../../common/container/container";
import { Progress } from "./progress/progress";
import { QrCode } from "./qrcode/qrcode";
import { feedReducer, initialState } from "./feed-reducer";
import { io } from "socket.io-client";
import { connectSocketAndReducer } from "./feed-socket";
import { SERVER_URL } from "../../../utils/constants";

export function Feed() {
    const [state, dispatch] = useReducer<FeedState>(feedReducer, initialState);
    useEffect(() => {
        //const socket = io(SERVER_URL);
        //connectSocketAndReducer(socket, dispatch);

        return () => {
            //socket.disconnect();
        };
    }, []);

    const {
        step,
        updateStepDescription,
        feedEntries,
        qrCode,
        showQRCode,
        showSkeleton,
    } = state;

    return (
        <div className="feed">
            <Header showButton={false} fixed={true} tall={false} />
            <Container>
                <div className="feed-grid">
                    <div className="feed-grid__left">
                        {showQRCode ? (
                            <QrCode value={qrCode} />
                        ) : (
                            <FeedEntries
                                feedEntries={feedEntries}
                                showSkeleton={showSkeleton}
                            />
                        )}
                    </div>
                    <div className="feed-grid__right">
                        <Progress
                            currentStep={step}
                            updateStepDescription={updateStepDescription}
                        />
                    </div>
                </div>
            </Container>
            <Footer className={"visible-tablet"} />
        </div>
    );
}
