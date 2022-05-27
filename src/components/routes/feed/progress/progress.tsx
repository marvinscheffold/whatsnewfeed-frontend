// @ts-nocheck
import "./progress.css";
import "./steps.css";
import { Steps } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
const { Step } = Steps;

export interface ProgressProps {
    currentStep: number;
    updateStepDescription: string | null;
}

export function Progress({
    currentStep,
    updateStepDescription,
}: ProgressProps) {
    const stepsData = [
        {
            title: "Start",
            description: "Generating your QR code",
        },
        {
            title: "Login",
            description: "Scan the QR code to continue",
        },
        {
            title: "Update",
            description: updateStepDescription || "Looking for updates",
        },
        {
            title: "Finish",
            description: "You are up to date",
        },
    ];

    return (
        <section className="progress">
            <Steps direction="vertical" current={currentStep}>
                {stepsData.map((stepData, index) => {
                    return (
                        <Step
                            key={index}
                            title={stepData.title}
                            description={stepData.description}
                            icon={
                                index === currentStep ? (
                                    <LoadingOutlined />
                                ) : null
                            }
                        />
                    );
                })}
            </Steps>
        </section>
    );
}
