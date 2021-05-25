import { gql, useLazyQuery, useMutation } from "@apollo/client";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { useGlobalcontext } from "../../AuthState";

type errortype = {
  email: "";
  password: "";
};

type User = {
  username: String;
  email: String;
  createdAt: String;
  id: String;
};
type gigdetails = {
  title: String;
  desc: String;
  dcservices: String;
  dcprice: String;
  dcduration: String;
  gdservices: String;
  gdprice: String;
  gdduration: String;
  stservices: String;
  stprice: String;
  stduration: String;
  tag1: String;
  tag2: String;
  tag3: String;
  tag4: String;
  user: User;
  id: String;
};
const gigdetails = () => {
  const [errors, setErrors] = useState<errortype>();
  const [Showorderform, setShoworderform] = useState(false);
  const [category, setcategory] = useState("Diamond");
  const [orderdesc, setorderdesc] = useState("");
  const [gigDetails, setgigDetails] = useState<gigdetails>();
  const router = useRouter();

  const { state, dispatch } = useGlobalcontext();

  const GETGIG = gql`
    query getgig($id: String!) {
      getgig(id: $id) {
        title
        desc
        dcservices
        dcprice
        dcduration
        gdservices
        gdprice
        gdduration
        stservices
        stprice
        stduration
        tag1
        tag2
        tag3
        tag4
        id
        user {
          id
          username
          email
          createdAt
        }
      }
    }
  `;
  const [getGig, { loading }] = useLazyQuery(GETGIG, {
    onError(err) {
      console.log(err);
    },
    onCompleted(data) {
      let month = new Date(
        Date.parse(`${data.getgig.user.createdAt}`)
      ).toLocaleString("default", { month: "short" });
      let year = new Date(
        Date.parse(`${data.getgig.user.createdAt}`)
      ).getFullYear();
      const date = `${month} ${year}`;
      const details = {
        ...data.getgig,
        user: {
          ...data.getgig.user,
          createdAt: date,
        },
      };

      setgigDetails(details);
    },
  });

  const PLACEORDER = gql`
    mutation placeorder(
      $buyerid: String!
      $category: String!
      $orderdesc: String!
      $sellerid: String!
      $gigid: String!
    ) {
      placeorder(
        buyerid: $buyerid
        category: $category
        orderdesc: $orderdesc
        sellerid: $sellerid
        gigid: $gigid
      ) {
        sellerid
        gigid
        category
        orderdesc
        buyerid
      }
    }
  `;

  useEffect(() => {
    const id = { id: router.query.gigdetails };
    getGig({
      variables: id,
    });
  }, []);

  const [placeOrder] = useMutation(PLACEORDER, {
    update(_, res) {
      console.log(res.data.placeorder);
    },
    onError(err) {
      console.log(err);
    },
  });

  const placeorder = (e) => {
    e.preventDefault();
    const orderdetails = {
      sellerid: gigDetails.user.id,
      buyerid: state?.user?.email,
      orderdesc: orderdesc,
      category: category,
      gigid: gigDetails.id,
    };
    placeOrder({
      variables: orderdetails,
    });
  };

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-12 px-20 pb-10 mt-32 place-items-center">
        <Head>
          <title>{router.query.gigdetails}</title>
          <link rel="icon" href="../logo.png" />
        </Head>
        <div className="col-span-9 ">
          <div>
            <h1 className="text-xl font-bold text-left text-gray-600 capitalize">
              {gigDetails?.title}
            </h1>
            <p className="mb-2 text-base font-medium text-left text-gray-600">
              {gigDetails?.desc}
            </p>
          </div>
          <section className="grid grid-cols-3">
            <div className="grid-cols-1 border border-gray-200">
              <p className="w-full h-24 py-2 text-base font-bold text-center text-gray-600 border-b border-gray-200">
                Diamond Category
              </p>
              <p className="w-full h-24 py-2 text-base font-medium text-center text-gray-600 border-b border-gray-200">
                {gigDetails?.dcservices}{" "}
              </p>
              <p className="w-full h-24 py-2 text-base font-bold text-center text-gray-600 border-b border-gray-200">
                Duration : {gigDetails?.dcduration}
              </p>
              <p className="w-full h-24 py-2 text-base font-bold text-center text-gray-600 border-b border-gray-200">
                Price : {gigDetails?.dcprice}
              </p>
            </div>
            <div className="grid-cols-1 border border-gray-200">
              <p className="w-full h-24 py-2 text-base font-bold text-center text-gray-600 border-b border-gray-200">
                Gold Category{" "}
              </p>
              <p className="w-full h-24 py-2 text-base font-medium text-center text-gray-600 border-b border-gray-200">
                {gigDetails?.gdservices}
              </p>
              <p className="w-full h-24 py-2 text-base font-bold text-center text-gray-600 border-b border-gray-200">
                Duration : {gigDetails?.gdduration}
              </p>
              <p className="w-full h-24 py-2 text-base font-bold text-center text-gray-600 border-b border-gray-200">
                Price : {gigDetails?.gdprice}
              </p>
            </div>
            <div className="grid-cols-1 border border-gray-200">
              <p className="w-full h-24 py-2 text-base font-bold text-center text-gray-600 border-b border-gray-200">
                Standard Category{" "}
              </p>
              <p className="w-full h-24 py-2 text-base font-medium text-center text-gray-600 border-b border-gray-200">
                {gigDetails?.stservices}
              </p>
              <p className="w-full h-24 py-2 text-base font-bold text-center text-gray-600 border-b border-gray-200">
                Duration : {gigDetails?.stduration}
              </p>
              <p className="w-full h-24 py-2 text-base font-bold text-center text-gray-600 border-b border-gray-200">
                Price : {gigDetails?.stprice}
              </p>
            </div>
          </section>
          <div className="flex justify-around py-2">
            <p className="px-4 mx-2 my-2 text-base font-medium text-gray-600 transition duration-200 bg-gray-200 border border-gray-200 cursor-pointer py-fpx rounded-3xl hover:text-gray-800">
              {gigDetails?.tag1}
            </p>
            <p className="px-4 mx-2 my-2 text-base font-medium text-gray-600 transition duration-200 bg-gray-200 border border-gray-200 cursor-pointer py-fpx rounded-3xl hover:text-gray-800">
              {gigDetails?.tag1}
            </p>
            <p className="px-4 mx-2 my-2 text-base font-medium text-gray-600 transition duration-200 bg-gray-200 border border-gray-200 cursor-pointer py-fpx rounded-3xl hover:text-gray-800">
              {gigDetails?.tag1}
            </p>
            <p className="px-4 mx-2 my-2 text-base font-medium text-gray-600 transition duration-200 bg-gray-200 border border-gray-200 cursor-pointer py-fpx rounded-3xl hover:text-gray-800">
              {gigDetails?.tag1}
            </p>
          </div>

          {Showorderform ? (
            <div>
              <form
                onSubmit={placeorder}
                className="flex flex-col px-6 py-6 mt-10 border border-gray-100 rounded-sm bg-gray-50"
              >
                <p className="px-4 py-2 mb-10 text-2xl font-semibold text-center text-gray-500 border-b-2 border-gray-300 border-opacity-60 ">
                  Please give order details
                </p>
                <select
                  required={true}
                  placeholder={`Choose Plan`}
                  className="px-4 my-3 font-medium text-gray-600 border border-gray-300 rounded-l-sm outline-none w-80 py-fpx"
                  value={category}
                  onChange={(e) => setcategory(e.target.value)}
                >
                  <option value="Diamond">Diamond</option>
                  <option value="Gold">Gold</option>
                  <option value="Standard">Standard</option>
                </select>
                <input
                  type="text"
                  required={true}
                  placeholder={`Order Description`}
                  className="px-4 my-3 font-medium text-gray-600 border border-gray-300 rounded-l-sm outline-none w-80 py-fpx"
                  value={orderdesc}
                  onChange={(e) => setorderdesc(e.target.value)}
                />
                <button
                  type="submit"
                  className={` w-full font-semibold text-center transition duration-200 border rounded  text-gray-200 cursor-pointer py-fpx  bg-green-500 mt-8  focus:outline-none hover:bg-transparent hover:text-green-500  hover:border-green-500   
              `}
                >
                  Order Now
                </button>
              </form>
            </div>
          ) : (
            <button
              className={` w-full font-semibold text-center transition duration-200 border rounded  text-gray-200 cursor-pointer py-fpx  bg-green-500 mt-8  focus:outline-none hover:bg-transparent hover:text-green-500  hover:border-green-500   
              `}
              onClick={() => setShoworderform(true)}
            >
              Order Now
            </button>
          )}
        </div>

        {/* right */}
        <div className="grid col-start-10 col-end-13 bg-gray-100 rounded-md bg-opacity-60 place-content-center place-items-center h-60 w-60 ">
          <h1 className="text-xl font-semibold text-center text-gray-600">
            {gigDetails?.user?.username}
          </h1>

          <p className="text-base font-medium text-center text-gray-600">
            {gigDetails?.user?.email}
          </p>
          <p className="text-base font-medium text-center text-gray-600">
            Member Since {gigDetails?.user?.createdAt}
          </p>
          <div>
            <button
              className={` w-50 font-semibold text-center transition duration-200 border rounded  text-green-500 cursor-pointer py-fpx  border-green-500 mt-8  focus:outline-none        
              `}
            >
              Contact Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default gigdetails;
