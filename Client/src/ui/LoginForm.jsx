import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <div className="w-full">
      <h1 className="pb-5 text-center text-xl font-semibold md:text-2xl">
        Sign in to compliX
      </h1>
      <form
        className="flex w-full flex-col items-center justify-center space-y-4 md:space-y-5"
        action="
          "
      >
        <input
          type="text"
          className="input w-full rounded-full border-gray-200 text-sm md:text-base"
          placeholder="Username"
        />
        <input
          type="text"
          className="input w-full rounded-full border-gray-200 text-sm md:text-base"
          placeholder="Password"
        />
        <button className="btn bg-accent text-bg-s w-full rounded-full border-none py-2 text-sm font-medium md:py-3 md:text-base">
          Sign in
        </button>
        <p className="text-center text-sm font-normal text-gray-400 md:text-sm">
          Don't have an account?
          <span className="text-primary-s font-bold">
            <Link to="/register"> Sign Up now </Link>
          </span>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
