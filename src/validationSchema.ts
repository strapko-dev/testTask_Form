import * as yup from "yup";

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  phone: yup
    .number()
    .integer('Phone number contain only digits')
    .positive()
    .required("Phone number is required"),
  nickname: yup
    .string()
    .max(30, 'Too many input letters')
    .matches(/^[a-zA-Z0-9]+$/, '* This field cannot contain white space and special character'),
  name: yup
    .string()
    .max(50, 'Too many input letters')
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  sername: yup
    .string()
    .max(50, 'Too many input letters')
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  sex: yup
    .string()
    .oneOf(['man', 'woman']),
  advantages: yup
    .array()
    .of(yup.string()),
  about: yup
    .string()
    .max(200, 'Too many input letters')
});
