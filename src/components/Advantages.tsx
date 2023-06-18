import React from "react";
import {
  Button,
  IconButton,
  InputLabel,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { FieldArray, FormikValues, useFormikContext } from "formik";

export default function Advantages() {
  const formik = useFormikContext<FormikValues>();
  const advantages: [string] = formik.values.advantages;
  const matches = useMediaQuery("(max-width:657px)");
  const width = matches ? "100%" : "50%";

  return (
    <FieldArray
      name="advantages"
      render={(arrayHelpers) => (
        <Stack gap={"8px"}>
          <Typography variant={"body1"}>Advantages</Typography>

          {advantages && advantages.length > 0 ? (
            advantages.map((advantage, index) => (
              <InputLabel
                key={index}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <TextField
                  id={`field-advantages-${index}`}
                  name={`advantages.${index}`}
                  placeholder="Placeholder"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={advantages[index]}
                  error={!!formik.errors.advantages}
                  //@ts-ignore
                  helperText={formik.errors.advantages}
                  sx={{ width: `${width}` }}
                />
                <IconButton
                  id={`button-remove-${index}`}
                  sx={{ marginLeft: "10px" }}
                  onClick={() => arrayHelpers.remove(index)}
                >
                  <img src={require("../icons/Trash.png")} alt="icon" />
                </IconButton>
              </InputLabel>
            ))
          ) : (
            <></>
          )}
          <InputLabel>
            <Button
              id="button-next"
              variant="outlined"
              color="secondary"
              sx={{ padding: "24px" }}
              onClick={() => arrayHelpers.insert(advantages.length + 1, "")}
            >
              <img src={require("../icons/Plus.png")} alt="icon" />
            </Button>
          </InputLabel>
        </Stack>
      )}
    />
  );
}
