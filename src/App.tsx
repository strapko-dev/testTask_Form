import React from "react";
import { Form, Formik } from "formik";
import { Route, Routes } from "react-router";
import Main from "./pages/Main";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Step3 from "./pages/Step3";
import { validationSchema } from "./validationSchema";
import { useSubmitFormMutation } from "./store/form.api";

export interface valuesForm {
  nickname: string;
  name: string;
  sername: string;
  phone: string;
  email: string;
  sex: string;
  advantages: string[];
  radio: string;
  checkbox: number[];
  about: string;
}

function App() {
  const [submitForm] = useSubmitFormMutation();

  return (
    <Formik
      initialValues={{
        nickname: "",
        name: "",
        sername: "",
        phone: "",
        email: "",
        sex: "",
        advantages: ["", "", ""],
        radio: "",
        checkbox: [],
        about: "",
      }}
      onSubmit={(values) => {
        console.log("SUBMIT", values);
        submitForm(values);
      }}
      validationSchema={validationSchema}
    >
      <Form>
        <div className="container">
          <div className="form">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/main" element={<Main />} />
              <Route path="/step1" element={<Step1 />} />
              <Route path="/step2" element={<Step2 />} />
              <Route path="/step3" element={<Step3 />} />
            </Routes>
          </div>
        </div>
      </Form>
    </Formik>
  );
}

export default App;
