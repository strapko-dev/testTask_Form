import React from "react";
import {
  Stack,
  Step,
  StepIconProps,
  StepLabel,
  Stepper,
  stepConnectorClasses,
  styled,
} from "@mui/material";

interface StepperProgressProps {
  step: number;
}

const StyledStepper = styled(Stepper)(({ theme }) => ({
  "& .MuiStepConnector-line": {
    borderWidth: "7px",
  },
  "& .MuiStep-root": {
    marginBottom: "-2px",
    padding: "0px",
  },
  "& .MuiStepLabel-iconContainer": {
    padding: "0px",
  },
  [`& .${stepConnectorClasses.active}`]: {
    "& .MuiStepConnector-line": {
      borderColor: "#5558FA",
    },
  },
  [`& .${stepConnectorClasses.completed}`]: {
    "& .MuiStepConnector-line": {
      borderColor: "#5558FA",
    },
  },
  [`& .${stepConnectorClasses.disabled}`]: {
    "& .MuiStepConnector-line": {
      borderColor: "rgba(0, 0, 0, 0.08)",
    },
  },
}));

function StepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  if (active) {
    return (
      <div className={className}>
        <img
          src={require("../icons/Dot.png")}
          alt="icon"
          width={"16px"}
          height={"16px"}
        />
      </div>
    );
  } else if (completed) {
    return (
      <div className={className}>
        <img
          src={require("../icons/Dot3.png")}
          alt="icon"
          width={"16px"}
          height={"16px"}
        />
      </div>
    );
  } else {
    return (
      <div className={className}>
        <img
          src={require("../icons/Dot2.png")}
          alt="icon"
          width={"16px"}
          height={"16px"}
        />
      </div>
    );
  }
}

export default function StepperProgress({ step }: StepperProgressProps) {
  return (
    <Stack>
      <StyledStepper activeStep={step}>
        <Step>
          <StepLabel StepIconComponent={(props) => <StepIcon {...props} />} />
        </Step>
        <Step>
          <StepLabel StepIconComponent={(props) => <StepIcon {...props} />} />
        </Step>
        <Step>
          <StepLabel StepIconComponent={(props) => <StepIcon {...props} />} />
        </Step>
      </StyledStepper>
    </Stack>
  );
}
