import React from "react";
import {
  Button,
  InputLabel,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { FormikErrors, FormikValues, useFormikContext } from "formik";
import { useNavigate } from "react-router-dom";
import parsePhoneNumberFromString from "libphonenumber-js";

export interface FormMainProps {
  errors: FormikErrors<{
    nickname: string;
    name: string;
    sername: string;
    phone: string;
    email: string;
    sex: string;
    advantages: string;
    radio: string;
    checkbox: string;
    about: string;
  }>;
  isValid: boolean;
}

// const phoneNumber = (value: string) => {
//   const number = parsePhoneNumberFromString(value);

//   if (!number) {
//     return value;
//   }
//   return number;
// };

const FormMain = () => {
  const navigate = useNavigate();
  const formik = useFormikContext<FormikValues>();
  const matches = useMediaQuery("(max-width:657px)");
  const width = matches ? "100%" : "50%";

  return (
    <>
      <Stack gap={"8px"}>
        <InputLabel required>
          <Typography variant="body1" color={"black"} mb={"8px"}>
            Номер телефона
          </Typography>
          <TextField
            type="tel"
            name="phone"
            placeholder="+7 (999) 999-99-99*"
            onChange={(e) => {
              formik.handleChange(e);
            }}
            value={formik.values.phone}
            error={!!formik.errors.phone}
            onBlur={formik.handleBlur}
            //@ts-ignore
            helperText={formik.errors.phone}
            sx={{ width: `${width}` }}
          />
        </InputLabel>
      </Stack>
      <Stack gap={"8px"}>
        <InputLabel required>
          <Typography variant="body1" color={"black"} mb={"8px"}>
            Email
          </Typography>
          <TextField
            type="email"
            name="email"
            placeholder="tim.jennings@example.com*"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            error={!!formik.errors.email}
            //@ts-ignore
            helperText={formik.errors.email}
            sx={{ width: `${width}` }}
          />
        </InputLabel>
      </Stack>
      <Button
        id="button-start"
        variant="contained"
        onClick={() => {
          navigate("/step1");
        }}
        color="secondary"
        sx={{ padding: "12px 16px", width: "100px" }}
      >
        Начать
      </Button>
    </>
  );
};

export default FormMain;
