import Link from "next/link";
import Navbar from "../components/Navbar";
import { useGlobalcontext } from "../AuthState";

const DashboardHero = () => {
  const { state } = useGlobalcontext();
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-5 px-8 py-4 mt-32">
        <div className="grid grid-cols-1 bg-gray-100 rounded-md bg-opacity-60 place-content-center place-items-center h-60">
          <h1 className="text-xl font-semibold text-center text-gray-600">
            Hi {state?.user?.username}
          </h1>

          <p className="text-base font-medium text-center text-gray-600">
            Get offers from sellers for <br />
            your project
          </p>
          <div>
            <Link href="">
              <button
                className={` w-50 font-semibold text-center transition duration-200 border rounded  text-green-500 cursor-pointer py-fpx  border-green-500 mt-8  focus:outline-none        
              `}
              >
                Post a Request
              </button>
            </Link>
          </div>
        </div>
        <div className="grid-cols-8"></div>
      </div>
    </>
  );
};

export default DashboardHero;
