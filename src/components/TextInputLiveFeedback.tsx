import { Field, FieldHookConfig, useField } from "formik";
import React from "react";

export const TextInputLiveFeedback = ({
  label,
  helpText,
  ...props
}: { label: string; helpText?: string } & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);

  // Show inline feedback if EITHER
  // - the input is focused AND value is longer than 2 characters
  // - or, the has been visited (touched === true)
  const [didFocus, setDidFocus] = React.useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback =
    (!!didFocus && field?.value?.trim()?.length > 2) || meta.touched;
  return (
    <div
      className={`flex flex-col form-control ${
        showFeedback ? (meta.error ? "invalid" : "valid") : ""
      }`}
    >
      <div className="flex flex-row justify-between text-sm">
        <label htmlFor={props.id}>{label}</label>
        {showFeedback ? (
          <div
            id={`${props.id}-feedback`}
            aria-live="polite"
            className="feedback text-red-600"
          >
            {meta.error && meta.error}
          </div>
        ) : null}
      </div>
      <Field
        className={`resize-none text-input${
          showFeedback && meta.error ? "-invalid" : ""
        }`}
        {...props}
        {...field}
        onFocus={handleFocus}
      />
      {helpText && (
        <div className="text-xs" id={`${props.id}-help`} tabIndex={-1}>
          {helpText}
        </div>
      )}
    </div>
  );
};
