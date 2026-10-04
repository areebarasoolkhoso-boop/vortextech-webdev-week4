function ErrorMessage({ message }) {
  return (
    <div className="center error">
      <h3>😕 Oops! Something went wrong</h3>
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;