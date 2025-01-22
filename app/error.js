"use client";
const ErrorPage = ({ error, reset }) => {
  return (
    <div>
      <h1 className="text-center text-4xl text-red-500">
        <h1>{error.message}</h1>
      </h1>
    </div>
  );
};

export default ErrorPage;
