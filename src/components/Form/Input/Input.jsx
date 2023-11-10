import clsx from "clsx";
import { validationPhoneNumber } from "../../../validation";

function Input({
  type = "text",
  name,
  register,
  placeholder,
  errorMessage,
  icon = null,
  error = null,
  ...props
}) {
  const fieldClasses = clsx("form-field", error && "form-field_error");

  return (
    <div className={fieldClasses}>
      <div className="form-field__wrap">
        {icon && (
          <div className="form-field__icon">
            <i className={`form-icons-${icon}`}></i>
          </div>
        )}
        <input
          className="form-field__input"
          style={{
            paddingLeft: icon ? "50px" : "20px",
          }}
          type={type}
          placeholder={placeholder}
          {...register(name, {
            required: "Required field!",
            validate: (v) => validationPhoneNumber(v),
          })}
          {...props}
        />
      </div>
      {error && <div className="form-field__error-message">{errorMessage}</div>}
    </div>
  );
}
export { Input };
