import * as yup from "yup";

export const schema = yup.object().shape({
    name: yup.string().required("Required field").min(2, "your name too short"),
    email: yup.string()
              .email("Please provide valid email address")
              .required("Required field")
});