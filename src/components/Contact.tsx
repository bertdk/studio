import { useForm } from "@formspree/react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { ReCaptcha } from "./ReCaptcha";
import { Form, useFormik, FormikProvider } from "formik";
import * as Yup from "yup";
import { TextInputLiveFeedback } from "./TextInputLiveFeedback";

export const Contact = () => {
  const [state, handleSubmit] = useForm("xzbykrko");
  const requiredText = "Required field";
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (v) => {
      handleSubmit(v);
      formik.resetForm();
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Must be at least 2 characters")
        .max(200, "Must be less than 200 characters")
        .required(requiredText)
        .matches(
          /^[a-zA-Z\u00C0-\u00F6\u00F8-\u017F .'-]+$/,
          "Cannot contain special characters"
        ),
      email: Yup.string().email("Invalid email address").required(requiredText),
      message: Yup.string().required(requiredText),
    }),
  });

  return (
    <>
      <h1 className="text-4xl my-5">Contact</h1>
      <p className="my-4 max-w-md">
        You can reach me any time by using the form underneath. Any request,
        question, comment, tip,... is always welcome. I will reply as fast as
        possible. Don't hesitate to reach out.
      </p>
      <FormikProvider value={formik}>
        <Form className="flex flex-col max-w-md">
          <TextInputLiveFeedback
            label="Name*"
            id="name"
            name="name"
            type="text"
          />
          <TextInputLiveFeedback
            label="E-mail*"
            autoComplete="on"
            type="text"
            name="email"
            id="email"
          />
          <TextInputLiveFeedback
            label="Message*"
            as="textarea"
            rows={5}
            name="message"
            id="message"
          />
          <div className="text-input border-none px-0"></div>
          <div className="flex flex-row justify-between">
            <button className="button-secondary" type="reset">
              Clear
            </button>
            <GoogleReCaptchaProvider reCaptchaKey="6LebkgUcAAAAAFnbN6Lh2ib6LUBwcdutXzYklCWb">
              <ReCaptcha
                text="Send"
                disabled={state.submitting || !formik.isValid}
              />
            </GoogleReCaptchaProvider>
          </div>
        </Form>
      </FormikProvider>
    </>
  );
};

Contact.propTypes = {};
