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
import { ACTION_TYPES } from "./feed-reducer";

const feedEntry1 = {
    id: "5caabf2b-8c7c-4aa5-9f6b-448bfbc63c1b",
    date: new Date(),
    type: "PROFILE_PICTURE_CHANGE",
    creator: "Anja Joshy",
    text: null,
    imgSrc: "https://pps.whatsapp.net/v/t61.24694-24/245072132_397911318869822_3324040273456517850_n.jpg?ccb=11-4&oh=01_AVyeE2_CoMfsM_s_6iU9eNOjQUKkMUHF03AmH23ahSIqyA&oe=6298103B",
    avatarImgSrc:
        "https://pps.whatsapp.net/v/t61.24694-24/245072132_397911318869822_3324040273456517850_n.jpg?ccb=11-4&oh=01_AVyeE2_CoMfsM_s_6iU9eNOjQUKkMUHF03AmH23ahSIqyA&oe=6298103B",
};

const feedEntry2 = {
    id: "b6f9b2d9-7a2f-4157-9288-abc50198c341",
    date: new Date(),
    type: "ABOUT_INFO_CHANGE",
    creator: "Annika Marroko",
    text: "Life is beautiful <3",
    imgSrc: null,
    avatarImgSrc:
        "https://pps.whatsapp.net/v/t61.24694-24/223113055_1691378314532913_2674337733899284958_n.jpg?ccb=11-4&oh=762d08f68233feb5afe665a328c8a189&oe=6298C6F1",
};

export function Feed() {
    const [state, dispatch] = useReducer<FeedState>(feedReducer, initialState);
    useEffect(() => {
        //const socket = io("http://localhost:8080");
        //connectSocketAndReducer(socket, dispatch);
        setTimeout(() => {
            dispatch({
                type: ACTION_TYPES.RECEIVED_QR_CODE,
                payload: "hex",
            });
        }, 3000);
        setTimeout(() => {
            dispatch({
                type: ACTION_TYPES.RECEIVED_FEED_ENTRIES,
                payload: [feedEntry1],
            });
        }, 6000);
        setTimeout(() => {
            dispatch({
                type: ACTION_TYPES.RECEIVED_FEED_ENTRIES,
                payload: [feedEntry2],
            });
        }, 10000);

        return () => {
            //socket.disconnect();
        };
    }, []);

    console.log("Feed", state);

    const {
        step,
        updateStepDescription,
        feedEntries,
        qrCode,
        showQRCode,
        showSkeleton,
    } = state;

    return (
        <>
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
        </>
    );
}
