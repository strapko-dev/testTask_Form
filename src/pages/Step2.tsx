import React from "react";
import StepperProgress from "../components/StepperProgress";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  Radio,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Field, Form, FormikValues, useFormikContext } from "formik";
import Advantages from "../components/Advantages";
import { CheckboxWithLabel, RadioGroup } from "formik-material-ui";
import { StyledContainer } from "./Step1";

const options = ["1", "2", "3"];

const StyledFormGroup = styled(FormGroup)(() => ({
  "& .MuiCheckbox-root": {
    padding: "0 5px",
  },
}));
const StyledField = styled(Field)(() => ({
  "& .MuiRadio-root": {
    padding: "0 5px",
  },
}));

export default function Step2() {
  const navigate = useNavigate();
  const formik = useFormikContext<FormikValues>();

  return (
    <StyledContainer>
      <StepperProgress step={1} />
      <Stack gap={"24px"}>
        <Advantages />

        <Stack>
          <Typography variant="body1" mb={"8px"}>
            Checkbox group
          </Typography>
          <Form>
            <FormControl component="fieldset" sx={{ display: "flex" }}>
              <StyledFormGroup>
                {options.map((opt, i) => (
                  <Field
                    id={`field-checkbox-group-option-${i}`}
                    type="checkbox"
                    component={CheckboxWithLabel}
                    name="checkbox"
                    key={opt}
                    value={opt}
                    Label={{ label: opt }}
                  />
                ))}
              </StyledFormGroup>
            </FormControl>
          </Form>
        </Stack>

        <Stack>
          <Typography variant="body1" mb={"8px"}>
            Radio group
          </Typography>
          <StyledField component={RadioGroup} name={"radio"}>
            {options.map((opt, i) => (
              <FormControlLabel
                key={opt}
                id={`field-radio-group-option-${i}`}
                name="radio"
                value={opt}
                control={<Radio disabled={formik.isSubmitting} />}
                disabled={formik.isSubmitting}
                label={opt}
              />
            ))}
          </StyledField>
        </Stack>
      </Stack>

      <Stack direction={"row"} justifyContent={"space-between"}>
        <Button
          id="button-back"
          variant="outlined"
          onClick={() => {
            navigate("/step1");
          }}
          color="secondary"
          sx={{ padding: "12px 16px", width: "100px", textTransform: "none" }}
        >
          Назад
        </Button>
        <Button
          id="button-next"
          variant="contained"
          onClick={() => {
            navigate("/step3");
          }}
          color="secondary"
          sx={{ padding: "12px 16px", width: "100px", textTransform: "none" }}
        >
          Далее
        </Button>
      </Stack>
    </StyledContainer>
  );
}
