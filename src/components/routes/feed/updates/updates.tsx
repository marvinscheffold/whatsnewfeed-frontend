// @ts-nocheck
import "./updates.css";
import "./steps.css";
import { Steps } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const { Step } = Steps;

export function Updates() {
    return (
        <section className="updates">
            <Steps direction="vertical" current={1}>
                <Step title="Login" description="Waiting for QR-Code scan." />
                <Step
                    title="Updating"
                    description="Rahell Instagramm Gruppe."
                    icon={<LoadingOutlined />}
                />
                <Step title="Done" description="You are up to date." />
            </Steps>
        </section>
    );
}
