import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
export const Contact = () => {
  const [captcha, setCaptcha] = useState(false);
  return (
    <>
      <h1 className="text-4xl my-5">Contact</h1>
      <p className="my-4 max-w-md">
        You can reach me any time by using the form underneath. Any request,
        question, comment, tip,... is always welcome. I will reply as fast as
        possible. Don't hesitate to reach out.
      </p>
      <form className="flex flex-col max-w-md">
        <label className="text-sm" form="name">
          Name
        </label>
        <input
          required
          autoComplete="on"
          className="text-input"
          autoFocus
          type="text"
          name="name"
          minLength={1}
        />
        <label className="text-sm" form="email">
          E-mail
        </label>
        <input
          required
          autoComplete="on"
          className="text-input"
          type="email"
          name="email"
        />
        <label className="text-sm" form="message">
          Message
        </label>
        <textarea
          required
          minLength={7}
          rows={5}
          className="text-input resize-none"
          name="message"
        />
        <div className="text-input border-none px-0">
          <ReCAPTCHA
            sitekey="6Lf5AAEcAAAAAA6BAjw1Dsq0M-H3I-AYXb-9qcWJ"
            onChange={(e) => setCaptcha(true)}
          />
        </div>
        <div className="flex flex-row justify-between">
          <input
            className="py-4 bg-white border-green-600 border-2 rounded w-5/12"
            type="reset"
            value="Clear"
          />
          <input
            className="py-4 bg-green-600 text-white rounded w-5/12 disabled:bg-gray"
            type="submit"
            value="Send"
            disabled={!captcha}
          />
        </div>
      </form>
    </>
  );
};

Contact.propTypes = {};
