import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm, ValidationError } from "@formspree/react";

export const Contact = () => {
  const [captcha, setCaptcha] = useState(false);
  const [state, handleSubmit] = useForm("xzbykrko");
  return (
    <>
      <h1 className="text-4xl my-5">Contact</h1>
      <p className="my-4 max-w-md">
        You can reach me any time by using the form underneath. Any request,
        question, comment, tip,... is always welcome. I will reply as fast as
        possible. Don't hesitate to reach out.
      </p>
      <form className="flex flex-col max-w-md" onSubmit={handleSubmit}>
        <label className="text-sm" htmlFor="name">
          Name
        </label>
        <input
          // required
          autoComplete="on"
          className="text-input"
          autoFocus
          type="text"
          name="name"
          id="name"
          minLength={1}
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <label className="text-sm" htmlFor="email">
          E-mail
        </label>
        <input
          // required
          autoComplete="on"
          className="text-input"
          type="text"
          name="email"
          id="email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label className="text-sm" htmlFor="message">
          Message
        </label>
        <textarea
          // required
          minLength={7}
          rows={5}
          className="text-input resize-none"
          name="message"
          id="message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <div className="text-input border-none px-0">
          <ReCAPTCHA
            sitekey="6LebkgUcAAAAAFnbN6Lh2ib6LUBwcdutXzYklCWb"
            onChange={(e) => setCaptcha(!!e)}
            theme="dark"
            size="normal"
            badge="bottomright"
          />
        </div>
        <div className="flex flex-row justify-between">
          <input
            disabled={!captcha}
            className="button-secondary"
            type="reset"
            value="Clear"
          />
          <input
            className="button-primary"
            type="submit"
            value="Send"
            disabled={!captcha || state.submitting}
          />
        </div>
      </form>
    </>
  );
};

Contact.propTypes = {};
