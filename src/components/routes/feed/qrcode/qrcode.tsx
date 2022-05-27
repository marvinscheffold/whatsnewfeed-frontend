// @ts-nocheck
import "./qrcode.css";
import QRCode from "react-qr-code";
import Skeleton from "react-loading-skeleton";
import { useWindowWidth } from "@react-hook/window-size";

export interface Props {
    value: string | null;
}

export function QrCode({ value }: Props) {
    const windowWidth = useWindowWidth();
    // deduct 4 * 1rem from windowWidth
    let qrSize = windowWidth <= 768 ? windowWidth - 4 * 16 : 472;

    return (
        <section className="qrcode">
            {value === null ? (
                <Skeleton className="qrcode__skeleton" />
            ) : (
                <QRCode value={value} size={qrSize} />
            )}
            <p>
                <ol>
                    <li>1. Open WhatsApp on your phone.</li>
                    <li>2. Tap menu or settings and select linked devices.</li>
                    <li>
                        3. Point your phone at this screen to scan the QR code.
                    </li>
                </ol>
            </p>
        </section>
    );
}
