import { useState } from "react";
import Navbar from "./Navbar";
const Sectionone = () => {
  const [service, setservice] = useState("");
  return (
    <section
      className="grid w-screen h-screen grid-cols-1 bg-center bg-no-repeat bg-cover place-content-center"
      style={{ backgroundImage: "url('/images/bghero.png')" }}
    >
      {/* <div className="text-transparent">{"."}</div> */}
      <div className="ml-8 w-180">
        <p className="mb-4 text-5xl font-bold ">
          Find the perfect
          <span className="ml-6 font-serif italic font-semibold">
            freelance
          </span>
          <br /> services for your business
        </p>
        <div className="flex items-center rounded ">
          <input
            type="text"
            placeholder={`Try "building a mobile app"`}
            className="flex-1 px-4 py-3 my-4 font-semibold text-gray-800 rounded-l-sm focus:outline-none "
            value={service}
            onChange={(e) => setservice(e.target.value)}
          />
          <p className="px-4 py-3 font-semibold transition duration-200 bg-green-600 rounded-r-sm cursor-pointer hover:bg-green-400">
            Search
          </p>
        </div>

        <div className="flex my-3">
          <p className="mx-2 my-2 font-bold">Popular:</p>
          <p className="px-3 mx-2 my-2 text-sm font-bold transition duration-200 border cursor-pointer py-tpx rounded-3xl hover:bg-gray-50 hover:text-gray-800">
            Mobile and Web Design
          </p>
          <p className="px-3 mx-2 my-2 text-sm font-bold transition duration-200 border cursor-pointer py-tpx rounded-3xl hover:bg-gray-50 hover:text-gray-800">
            Wordpress
          </p>
          <p className="px-3 mx-2 my-2 text-sm font-bold transition duration-200 border cursor-pointer py-tpx rounded-3xl hover:bg-gray-50 hover:text-gray-800">
            LogoDesign
          </p>
          <p className="px-3 mx-2 my-2 text-sm font-bold transition duration-200 border cursor-pointer py-tpx rounded-3xl hover:bg-gray-50 hover:text-gray-800">
            Dropshipping
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sectionone;
