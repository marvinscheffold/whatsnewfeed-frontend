// @ts-nocheck
import "./progress.css";
import "./steps.css";
import { Steps } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
const { Step } = Steps;

export interface ProgressProps {
    currentStep: number;
    currentDescription: string | undefined;
}

export function Progress({ currentStep, currentDescription }: ProgressProps) {
    const stepsData = [
        { title: "Start", description: "Generating your QR-Code" },
        { title: "Login", description: "Waiting for QR-Code scan" },
        {
            title: "Update",
            description: currentDescription || "Comparing profile data",
        },
        { title: "Finish", description: "You are up to date" },
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
