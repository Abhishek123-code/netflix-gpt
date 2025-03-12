import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="text-red-400 font-bold text-3xl flex flex-col justify-center items-center">
      <h1>OOPS!!!</h1>
      <h1>SOMETHING WENT WRONG</h1>
      <h1>
        {err.status} : {err.statusText}
      </h1>
    </div>
  );
};
export default Error;
