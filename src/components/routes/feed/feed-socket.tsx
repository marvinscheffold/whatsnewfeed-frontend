import { FeedEntryData } from "../../../utils/types";
import { FeedReducerDispatch } from "./feed-reducer";
import { ACTION_TYPES } from "./feed-reducer";

export function connectSocketAndReducer(socket, dispatch: FeedReducerDispatch) {
    socket.on("qrCode", (qrCode) => {
        console.log("qrCode");
        dispatch({ type: ACTION_TYPES.RECEIVED_QR_CODE, payload: qrCode });
    });

    socket.on("feedEntries", (feedEntries: FeedEntryData[]) => {
        console.log("feedEntries", feedEntries);
        dispatch({
            type: ACTION_TYPES.RECEIVED_FEED_ENTRIES,
            payload: feedEntries,
        });
    });

    socket.on("currentUpdatingContact", (currentUpdatingContact) => {
        console.log("currentUpdatingUser", currentUpdatingContact);
        dispatch({
            type: ACTION_TYPES.RECEIVED_CURRENT_UPDATING_CONTACT,
            payload: `Comparing: ${currentUpdatingContact}`,
        });
    });

    socket.on("userIsLoggedIn", () => {
        console.log("userIsLoggedIn");
        dispatch({
            type: ACTION_TYPES.USER_IS_LOGGED_IN,
        });
    });

    socket.on("finishedFeedUpdate", () => {
        console.log("finishedFeedUpdate");
        dispatch({
            type: ACTION_TYPES.FINISHED_FEED_UPDATE,
        });
    });
}
