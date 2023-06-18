import React, { useState } from "react";
import StepperProgress from "../components/StepperProgress";
import { Button, InputLabel, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, FormikValues, useFormikContext } from "formik";
import { StyledContainer } from "./Step1";
import Modal from "../components/Modal/Modal";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function Step3() {
  const navigate = useNavigate();
  const formik = useFormikContext<FormikValues>();
  const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mutations = useSelector((state: RootState) => state.formApi.mutations);
  const id = Object.keys(mutations)[0];
  console.log(mutations[id]?.data);

  const [response, setResponse] = useState("Loading...");
  const [error, setError] = useState("");

  const closeModal = () => {
    setIsModalOpen(false);
  };

  console.log(formik.errors);

  const onSubmit = () => {
    if (Object.keys(formik.errors).length) {
      setError("Заполните обязательные поля");
    } else {
      setError("");
      formik.submitForm();
      setIsModalOpen(true);
    }
  };

  React.useEffect(() => {
    //@ts-ignore
    if (mutations[id]?.data?.message?.length > 0) {
      //@ts-ignore
      setResponse(mutations[id]?.data);
    }
  }, [mutations]);

  return (
    <StyledContainer>
      <StepperProgress step={2} />

      <Stack gap={"8px"} mt={"100px"}>
        <InputLabel>
          <Typography variant="body1" color={"black"} mb={"8px"}>
            Nickname
          </Typography>

          <textarea
            id="field-about"
            name="about"
            placeholder="Placeholder"
            onChange={(e) => {
              setCount(e.target.value.replace(/\s/g, "").length);
              formik.handleChange(e);
            }}
            onBlur={formik.handleBlur}
            value={formik.values.about}
            style={{ padding: "12px", width: "90%", minHeight: "84px" }}
          />

          <Stack width={"90%"} alignItems={"end"}>
            <Typography variant="body1">{`${count}/200 Characters`}</Typography>
          </Stack>

          <Typography variant="body1" color={"red"}>
            <ErrorMessage name="about" />
          </Typography>
        </InputLabel>
      </Stack>

      <Stack direction={"row"} justifyContent={"space-between"}>
        <Button
          id="button-back"
          variant="outlined"
          onClick={() => {
            navigate("/step2");
          }}
          color="secondary"
          sx={{ padding: "12px 16px", width: "100px", textTransform: "none" }}
        >
          Назад
        </Button>
        <Button
          id="button-send"
          variant="contained"
          type="submit"
          onClick={() => {
            onSubmit();
          }}
          color="secondary"
          sx={{ padding: "12px 16px", width: "100px", textTransform: "none" }}
        >
          Отправить
        </Button>
      </Stack>
      <Typography variant={"body1"} color={"error"}>
        {error}
      </Typography>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        response={response}
        navigate={navigate}
      />
    </StyledContainer>
  );
}
