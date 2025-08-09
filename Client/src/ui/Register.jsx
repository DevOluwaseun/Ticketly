import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="bg-opacity-90 w-full rounded-2xl border-2 border-gray-200 bg-white p-4 md:p-6 lg:rounded-4xl lg:px-3 lg:py-5">
      <div className="mb-6 space-y-4 text-center lg:mb-10 lg:space-y-10">
        <h1 className="text-lg leading-tight font-semibold md:text-xl lg:text-2xl">
          Sign up to create customer support for your business
        </h1>
      </div>
      <form
        className="flex w-full flex-col items-center justify-center space-y-4 md:space-y-5"
        action="
          "
      >
        <input
          type="text"
          className="input w-full rounded-full border-gray-200 text-sm md:text-base"
          placeholder="Email address"
        />
        <input
          type="text"
          className="input w-full rounded-full border-gray-200 text-sm md:text-base"
          placeholder="Password"
        />
        <input
          type="text"
          className="input w-full rounded-full border-gray-200 text-sm md:text-base"
          placeholder="Full Business Name"
        />
        <input
          type="text"
          className="input w-full rounded-full border-gray-200 text-sm md:text-base"
          placeholder="Username"
        />
        <button className="btn bg-accent w-full rounded-full border-none py-2 text-sm font-medium text-white md:py-3 md:text-base">
          Submit
        </button>
        <p className="text-sm font-normal text-gray-400">
          Already have an account?
          <span className="text-primary-s font-bold">
            <Link to="/"> Sign In now </Link>
          </span>
        </p>
      </form>
    </div>
  );
}

export default Register;
