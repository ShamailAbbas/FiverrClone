import Gd from "../public/images/graphicsdesign.svg";
import Om from "../public/images/onlinemarketing.svg";
import Bu from "../public/images/business.svg";
import Da from "../public/images/data.svg";
import Ls from "../public/images/lifestyle.svg";
import Ma from "../public/images/musicaudio.svg";
import Pg from "../public/images/programming.svg";
import Va from "../public/images/videoanimation.svg";
import Wt from "../public/images/writingtranslation.svg";

const Sectionsix = () => {
  return (
    <section>
      <h1 className="px-4 mx-4 mt-40 mb-20 text-4xl font-bold text-gray-800 text-opacity-90">
        Explore the marketplace
      </h1>
      <div className="grid grid-cols-5 px-10">
        <div className="flex flex-col items-center grid-cols-4 mb-16">
          <Gd className="mb-2 border-b-2 border-gray-400 cursor-pointer w-14 h-14 hover:border-green-600" />
          <p className="px-4 mx-4 mt-1 font-sans text-base font-semibold text-gray-900 ">
            Graphics Design
          </p>
        </div>
        <div className="flex flex-col items-center grid-cols-4 mb-16">
          <Om className="mb-2 border-b-2 border-gray-400 cursor-pointer w-14 h-14 hover:border-green-600" />
          <p className="px-4 mx-4 mt-1 font-sans text-base font-semibold text-gray-900 ">
            Digital Marketing
          </p>
        </div>
        <div className="flex flex-col items-center grid-cols-4 mb-16">
          <Wt className="mb-2 border-b-2 border-gray-400 cursor-pointer w-14 h-14 hover:border-green-600" />
          <p className="px-4 mx-4 mt-1 font-sans text-base font-semibold text-gray-900 ">
            Writing Translation
          </p>
        </div>
        <div className="flex flex-col items-center grid-cols-4 mb-16">
          <Va className="mb-2 border-b-2 border-gray-400 cursor-pointer w-14 h-14 hover:border-green-600" />
          <p className="px-4 mx-4 mt-1 font-sans text-base font-semibold text-gray-900 ">
            Video Animation
          </p>
        </div>
        <div className="flex flex-col items-center grid-cols-4 mb-16">
          <Ma className="mb-2 border-b-2 border-gray-400 cursor-pointer w-14 h-14 hover:border-green-600" />
          <p className="px-4 mx-4 mt-1 font-sans text-base font-semibold text-gray-900 ">
            Music and Audio
          </p>
        </div>
        <div className="flex flex-col items-center grid-cols-4 mb-16">
          <Pg className="mb-2 border-b-2 border-gray-400 cursor-pointer w-14 h-14 hover:border-green-600" />
          <p className="px-4 mx-4 mt-1 font-sans text-base font-semibold text-gray-900 ">
            Programming and tech
          </p>
        </div>
        <div className="flex flex-col items-center grid-cols-4 mb-16">
          <Ls className="mb-2 border-b-2 border-gray-400 cursor-pointer w-14 h-14 hover:border-green-600" />
          <p className="px-4 mx-4 mt-1 font-sans text-base font-semibold text-gray-900 ">
            Lifestyle
          </p>
        </div>
        <div className="flex flex-col items-center grid-cols-4 mb-16">
          <Bu className="mb-2 border-b-2 border-gray-400 cursor-pointer w-14 h-14 hover:border-green-600" />
          <p className="px-4 mx-4 mt-1 font-sans text-base font-semibold text-gray-900 ">
            Business
          </p>
        </div>
        <div className="flex flex-col items-center grid-cols-4 mb-16">
          <Da className="mb-2 border-b-2 border-gray-400 cursor-pointer w-14 h-14 hover:border-green-600" />
          <p className="px-4 mx-4 mt-1 font-sans text-base font-semibold text-gray-900 ">
            Data
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sectionsix;
