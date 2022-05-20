
export type FeedEntryType = "PROFILE_PICTURE_CHANGE" | "ABOUT_INFO_CHANGE";

export interface FeedEntryData {
    id: string;
    date: Date;
    creator: string;
    text: string | null;
    imgSrc: string | null;
    avatarImgSrc: string | null;
    type: FeedEntryType;
}

export interface FeedState {
    step: number;
    updateStepDescription: string | null;
    feedEntries: FeedEntryData[];
    qrCode: string | null;
    showQRCode: boolean;
    showSkeleton: boolean;
}
