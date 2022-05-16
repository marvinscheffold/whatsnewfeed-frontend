// @ts-nocheck
import "./qrcode.css";
import QRCode from "react-qr-code";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useWindowWidth } from "@react-hook/window-size";

export interface Props {
    value: string | undefined | null;
}

export function QrCode({ value }: Props) {
    const windowWidth = useWindowWidth();
    // deduct 4 * 1rem from windowWidth
    let qrSize = windowWidth <= 768 ? windowWidth - 4 * 16 : 400;

    return (
        <section className="qrcode">
            {value === undefined || value === null ? (
                <>
                    <Skeleton className="qrcode__skeleton" />
                </>
            ) : (
                <QRCode value={value} size={qrSize} />
            )}
        </section>
    );
}
