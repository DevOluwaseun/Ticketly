import happyBusiness from "../assets/images/happyBusiness.jpg";

function Home() {
  return (
    <div className="font-inter relative flex h-screen items-center justify-center gap-10 overflow-hidden bg-[url(../assets/images/bg.jpg)] font-medium">
      <div className="flex w-1/2 flex-col items-center justify-center">
        <div className="absolute top-5 mb-10 space-y-4 text-center">
          <h1 className="font-nata-sans text-primary-s text-3xl font-medium">
            compliX
          </h1>
        </div>

        <div className="m-5 w-100 space-y-10 text-center">
          <h1 className="text-md text-primary-s font-medium">
            Welcome to compliX smart support for growing businesses.
          </h1>
          <p className="text-2xl font-semibold">Sign in to compliX</p>
        </div>
        <form
          className="flex w-80 flex-col items-center justify-center space-y-5"
          action="
          "
        >
          <input
            type="text"
            className="input w-full rounded-full border-none"
            placeholder="Username"
          />
          <input
            type="text"
            className="input w-full rounded-full border-none"
            placeholder="Password"
          />
          <button className="btn bg-accent text-bg-s w-full rounded-full border-none font-medium">
            Sign in
          </button>
          <p className="text-sm font-normal text-gray-400">
            Don't have an account?
            <span className="text-primary-s font-bold">
              <a> Sign Up now </a>
            </span>
          </p>
        </form>
      </div>

      <div className="flex h-screen w-1/2 items-center justify-center">
        <img
          className="h-full w-full object-cover"
          src={happyBusiness}
          alt="customer support"
        />
      </div>
    </div>
  );
}

export default Home;
