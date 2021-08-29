import { useCallback, useEffect, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import PropTypes from "prop-types";

export const ReCaptcha = ({ text, disabled }: ReCaptchaProps) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [captcha, setCaptcha] = useState(false);
  const handleReCaptchaVerify = useCallback(async () => {
    if (executeRecaptcha) {
      const token = await executeRecaptcha("yourAction");
      return setCaptcha(!!token);
    }
    return setCaptcha(false);
  }, [executeRecaptcha]);

  useEffect(() => {
    handleReCaptchaVerify();
  }, [handleReCaptchaVerify]);

  return (
    <button
      className="button-primary"
      onClick={handleReCaptchaVerify}
      disabled={!captcha || disabled}
      type="submit"
    >
      {text}
    </button>
  );
};

type ReCaptchaProps = {
  text: string;
  disabled?: boolean;
};

ReCaptcha.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};
