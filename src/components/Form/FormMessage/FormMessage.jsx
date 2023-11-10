function FormMessage({ status }) {
  return (
    <p className="form-message">
      {status === "fulfilled"
        ? "Thank you! Your submission has been received!"
        : "Oops! Something went wrong while submitting the form."}
    </p>
  );
}

export { FormMessage };