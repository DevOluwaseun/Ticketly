import { Link, Outlet } from "react-router-dom";
import happyBusiness from "../assets/images/happyBusiness.jpg";

function Home() {
  return (
    <div className="font-inter relative flex h-screen overflow-hidden bg-[url(../assets/images/bg.jpg)] font-medium lg:flex-row lg:items-center lg:justify-center lg:gap-10">
      <div className="flex w-full flex-col items-center justify-center px-4 py-8 lg:w-1/2 lg:px-0 lg:py-0">
        <div className="space-y-2 text-center lg:absolute lg:top-5 lg:mb-10 lg:space-y-5">
          <h1 className="font-nata-sans text-primary-s text-2xl font-medium md:text-3xl lg:text-4xl">
            compliX
          </h1>
        </div>

        <div className="mb-6 w-100 space-y-4 px-4 text-center lg:mb-10 lg:space-y-10">
          <h1 className="text-primary-s max-w-md text-sm font-medium md:text-base lg:text-lg">
            Welcome to compliX smart support for growing businesses.
          </h1>
        </div>
        <div className="w-full max-w-sm lg:max-w-md">
          <Outlet />
        </div>
      </div>

      <div className="hidden h-screen w-1/2 items-center justify-center lg:flex">
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
