import clsx from "clsx";

function Input({
  type = "text",
  name,
  register,
  placeholder,
  icon = null,
  error = null,
}) {
  const inputClasses = clsx(
    "form-field__input",
    error && "form-field__input_error"
  );

  return (
    <div className="form-field">
      <input
        className={inputClasses}
        style={{
          paddingLeft: icon ? "50px" : "20px",
          background: icon ? `url(${icon}) no-repeat 12px 50%` : "none",
        }}
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />
      {error && (
        <div className="form-field__error-message">
          Поле обязательно для заполнения
        </div>
      )}
    </div>
  );
}
export { Input };
