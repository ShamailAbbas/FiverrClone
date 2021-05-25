import { useState } from "react";
import Link from "next/link";
import { useGlobalcontext } from "../AuthState";
import { useRouter } from "next/router";
const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const [service, setservice] = useState("");
  const { state, dispatch } = useGlobalcontext();
  const router = useRouter();
  const changeNavbarColor = () => {
    if (window.scrollY >= 1) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  if (typeof window !== "undefined") {
    // browser code
    window.addEventListener("scroll", changeNavbarColor);
  }
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    router.push("/");
  };

  return (
    <nav className={`absolute top-0 z-50 w-screen `}>
      <div
        className={`flex justify-between w-screen px-8 py-6  top-0 fixed  h-28 transition duration-500 ${
          !colorChange
            ? "text-white"
            : "text-gray-600 bg-gray-100 border-b border-gray-300"
        } ${
          router.pathname === "/dashboard" || router.pathname !== "/"
            ? "text-gray-600  border-b border-gray-300"
            : ""
        }`}
      >
        <Link href="/">
          <div className="-my-1 text-3xl font-bold cursor-pointer">
            <span>fiverr</span>
            <span className="font-black text-green-600">.</span>
          </div>
        </Link>

        <div
          className={
            colorChange ||
            router.pathname == "/dashboard" ||
            router.pathname !== "/"
              ? "flex items-center rounded -mt-8"
              : "hidden"
          }
        >
          <input
            type="text"
            placeholder={`Find Services`}
            className="flex-1 px-4 -ml-16 font-medium text-gray-600 border border-gray-300 rounded-l-sm outline-none w-80 py-fpx"
            value={service}
            onChange={(e) => setservice(e.target.value)}
          />
          <p
            className={`px-4 font-semibold transition duration-200 bg-green-600 border border-green-600 rounded-r-sm cursor-pointer py-fpx text-gray-50 hover:bg-green-400 `}
          >
            Search
          </p>
        </div>

        <div className="flex ">
          <p className="mx-2 text-lg font-medium cursor-pointer">
            Fiverr Business{" "}
          </p>
          <p className="mx-2 text-lg font-medium cursor-pointer">Explore</p>
          <p className="mx-2 text-lg font-medium cursor-pointer">English</p>
          <p className="mx-2 text-lg font-medium cursor-pointer">
            {" "}
            Become a Seller{" "}
          </p>

          <p className="mx-2 text-lg font-medium cursor-pointer">RsPKR</p>
          {state?.user ? (
            <div>
              <span className="px-2 py-1 mx-2 text-lg font-medium capitalize bg-gray-300 rounded-full cursor-pointer ">
                {state?.user?.username?.split("")[0]}
              </span>
            </div>
          ) : (
            ""
          )}

          {!state?.user ? (
            <Link href="/login">
              <p className="mx-2 text-lg font-medium cursor-pointer">Sign In</p>
            </Link>
          ) : (
            <p
              onClick={logout}
              className="mx-2 text-lg font-medium cursor-pointer"
            >
              Logout
            </p>
          )}

          <div>
            {!state?.user ? (
              <Link href="/signup">
                <p
                  className={`px-5 mx-4 font-semibold text-center transition duration-200 border rounded cursor-pointer py-tpx hover:bg-green-600 hover:border-transparent ${
                    colorChange
                      ? "border-green-600 text-green-600 hover:bg-green-600 hover:text-gray-200"
                      : ""
                  }`}
                >
                  Join
                </p>
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      {/* bottom nav */}
      <div
        className={`${
          colorChange ||
          router.pathname === "/dashboard" ||
          router.pathname !== "/"
            ? "  flex  text-gray-700 top-12 fixed w-screen   justify-evenly mt-7 py-fpx border-t  border-gray-300 text-opacity-70"
            : "hidden"
        }`}
      >
        <p className="mx-2 text-base font-medium cursor-pointer">
          Graphics & Design
        </p>
        <p className="mx-2 text-base font-medium cursor-pointer">
          Digital Marketing
        </p>
        <p className="mx-2 text-base font-medium cursor-pointer">
          Writing & Translation
        </p>
        <p className="mx-2 text-base font-medium cursor-pointer">
          Video & Animation
        </p>
        <p className="mx-2 text-base font-medium cursor-pointer">
          Music & Audio
        </p>
        <p className="mx-2 text-base font-medium cursor-pointer">
          Programming & Tech
        </p>
        <p className="mx-2 text-base font-medium cursor-pointer">
          Data
          <span className="px-2 py-0 mx-2 text-xs font-medium text-pink-500 border border-pink-500 cursor-pointer rounded-3xl ">
            NEW
          </span>
        </p>
        <p className="mx-2 text-base font-medium cursor-pointer">Business</p>
        <p className="mx-2 text-base font-medium cursor-pointer">Lifestyle</p>
      </div>
    </nav>
  );
};

export default Navbar;
