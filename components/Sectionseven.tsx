const Sectionseven = () => {
  return (
    <section className="grid grid-cols-2 px-10 place-items-center py-28 bg-blue-950">
      <div className="mr-20 w-160">
        <div className="flex items-center">
          <span className="-my-2 text-3xl font-bold text-gray-100">fiverr</span>
          <span className="ml-2 text-3xl font-semimedium">business.</span>
          <p className="px-2 mx-2 text-xs font-medium bg-blue-800 cursor-pointer rounded-3xl ">
            NEW
          </p>
        </div>

        <h1 className="px-4 mx-4 my-6 text-3xl font-bold text-gray-100 text-opacity-90">
          A business solution designed for teams
        </h1>
        <p className="px-4 mx-4 mt-1 font-sans text-lg font-medium text-gray-100 text-opacity-90">
          Upgrade to a curated experience packed with tools and benefits,
          dedicated to businesses
        </p>
        <div className="flex px-4 mx-4 mt-5 mb-2">
          <img src="/images/bluetick.PNG" alt="" className="mt-2 w-7 h-7 " />
          <p className="px-4 mx-4 font-sans text-lg font-medium text-gray-100 text-opacity-90">
            Connect to freelancers with proven business experience
          </p>
        </div>
        <div className="flex px-4 mx-4 mt-5 mb-2">
          <img src="/images/bluetick.PNG" alt="" className="mt-2 w-7 h-7 " />
          <p className="px-4 mx-4 font-sans text-lg font-medium text-gray-100 text-opacity-90">
            Get matched with the perfect talent by a customer success manager
          </p>
        </div>
        <div className="flex px-4 mx-4 mt-5 mb-2">
          <img src="/images/bluetick.PNG" alt="" className="mt-2 w-7 h-7 " />
          <p className="px-4 mx-4 font-sans text-lg font-medium text-gray-100 text-opacity-90">
            Manage teamwork and boost productivity with one powerful workspace
          </p>
        </div>
        <p className="px-4 py-2 mt-10 text-lg font-medium text-center transition duration-200 bg-green-600 rounded-sm cursor-pointer w-60 hover:bg-green-700">
          Explore Fiverr Business
        </p>
      </div>

      <img src="/images/bluebg.png" alt="" />
    </section>
  );
};

export default Sectionseven;
