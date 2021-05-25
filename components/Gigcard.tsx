import Link from "next/link";
import { useRouter } from "next/router";
const Gigcard = ({ gigdetails }) => {
  const router = useRouter();
  const showgigdetails = () => {
    router.push(`/utilitycomponents/${gigdetails}`);
  };
  return (
    <div
      onClick={showgigdetails}
      className="h-auto px-4 py-2 mx-4 my-2 font-normal text-gray-800 border border-gray-200 w-60 box-shadow-xl"
    >
      <img src="/images/p1.png" alt="gigpic" className="h-30 w-60" />
      <div className="flex items-center p-2 mt-2 justify-items-center">
        <img
          src="/images/p1.png"
          alt="gigpic"
          className="w-4 h-4 rounded-full"
        />
        <p className="ml-2">shamail</p>
      </div>
      <p className="px-2 py-1 font-medium text-gig">
        I will create a website for you
      </p>
      <div className="flex items-center mt-4">
        <img src="/images/star.PNG" alt="" className="w-4 h-4 mx-tpx" />
        <p className="text-sm font-bold text-yellow-500 mx-tpx">4.5</p>
        <p className="text-sm text-gray-600 mx-tpx">(1)</p>
      </div>

      <div className="flex items-center justify-between px-2 py-2 mt-2 border-t border-gray-200 ">
        <img src="/images/heart.PNG" alt="" className="w-5 h-4" />
        <p className="text-xs font-medium text-gray-500">
          STARTING AT{" "}
          <span className="ml-2 text-xl font-medium text-gray-500"> $200</span>
        </p>
      </div>
    </div>
  );
};

export default Gigcard;
