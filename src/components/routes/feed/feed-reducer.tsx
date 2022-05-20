import { FeedState } from "../../../utils/types";

export enum ACTION_TYPES {
    RESET_FEED,
    RECEIVED_QR_CODE,
    RECEIVED_FEED_ENTRIES,
    RECEIVED_CURRENT_UPDATING_CONTACT,
    USER_IS_LOGGED_IN,
    FINISHED_FEED_UPDATE,
}

export interface FeedReducerAction {
    type: ACTION_TYPES;
    payload?: any;
}

export const initialState: FeedState = {
    step: 0,
    updateStepDescription: null,
    feedEntries: [],
    qrCode: null,
    showQRCode: true,
    showSkeleton: true,
};

export type FeedReducer = (
    state: FeedState,
    action: FeedReducerAction
) => FeedState;

export type FeedReducerDispatch = (action: FeedReducerAction) => void;

export function feedReducer(
    state: FeedState,
    action: FeedReducerAction
): FeedState {
    switch (action.type) {
        case ACTION_TYPES.RESET_FEED:
            return initialState;
        case ACTION_TYPES.RECEIVED_QR_CODE:
            return {
                ...state,
                step: 1,
                qrCode: action.payload,
                showQRCode: true,
            };
        case ACTION_TYPES.USER_IS_LOGGED_IN:
            return {
                ...state,
                step: 2,
                showQRCode: false,
            };
        case ACTION_TYPES.RECEIVED_FEED_ENTRIES:
            // Attach feed entries to the front
            return {
                ...state,
                step: 2,
                showQRCode: false,
                feedEntries: [...state.feedEntries, ...action.payload],
            };
        case ACTION_TYPES.RECEIVED_CURRENT_UPDATING_CONTACT:
            return {
                ...state,
                updateStepDescription: action.payload,
            };
        case ACTION_TYPES.FINISHED_FEED_UPDATE:
            return {
                ...state,
                step: 4,
                updateStepDescription: null,
                showSkeleton: false,
            };
        default:
            return state;
    }
}
