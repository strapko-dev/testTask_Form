import React from "react";
import StepperProgress from "../components/StepperProgress";
import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FormikValues, useFormikContext } from "formik";

const options = ["nickname", "name", "sername"];

export const StyledContainer = styled(Stack)(() => ({
  "@media (max-width: 657px)": {
    padding: "20px 40px",
    gap: "32px",
  },
  padding: "62px 110px",
  gap: "88px",
}));

export default function Step1() {
  const navigate = useNavigate();
  const formik = useFormikContext<FormikValues>();
  const matches = useMediaQuery("(max-width:657px)");
  const width = matches ? "100%" : "50%";

  return (
    <StyledContainer>
      <Stack gap={"24px"}>
        <StepperProgress step={0} />
        <Stack gap={"8px"} mt={"100px"}>
          {options.map((option) => (
            <InputLabel key={option}>
              <Typography variant="body1" color={"black"} mb={"8px"}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </Typography>
              <TextField
                id={`field-${option}`}
                type={option}
                name={option}
                placeholder="Placeholder"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[option]}
                error={!!formik.errors[option]}
                //@ts-ignore
                helperText={formik.errors[option]}
                sx={{ width: `${width}` }}
              />
            </InputLabel>
          ))}
        </Stack>

        <Stack gap={"8px"}>
          <InputLabel id="field-sex" sx={{ color: "black" }}>
            <Typography variant="body1" color={"black"} mb={"8px"}>
              Sex
            </Typography>
            <Select
              id="field-sex"
              type="sex"
              name="sex"
              label="Не выбран"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.sex}
              error={!!formik.errors.sex}
              //@ts-ignore
              helperText={formik.errors.sex}
              // sx={{ color: "black" }}
              sx={{ width: `${width}` }}
            >
              <MenuItem value={"man"}>man</MenuItem>
              <MenuItem value={"woman"}>woman</MenuItem>
            </Select>
          </InputLabel>
        </Stack>
      </Stack>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Button
          id="button-back"
          variant="outlined"
          onClick={() => {
            navigate("/main");
          }}
          color="secondary"
          sx={{
            padding: "12px 16px",
            width: "100px",
            textTransform: "none",
          }}
        >
          Назад
        </Button>
        <Button
          id="button-next"
          variant="contained"
          onClick={() => {
            navigate("/step2");
          }}
          color="secondary"
          sx={{
            padding: "12px 16px",
            width: "100px",
            textTransform: "none",
          }}
        >
          Далее
        </Button>
      </Stack>
    </StyledContainer>
  );
}
