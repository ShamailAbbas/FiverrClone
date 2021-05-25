const Sectionfive = () => {
  return (
    <section className="grid items-center justify-around grid-cols-2 pt-20 pb-20 mt-20 bg-green-50 place-items-center">
      {
        // left side
      }
      <div className="mr-20 w-160">
        <h1 className="px-4 mx-4 text-3xl font-bold text-gray-800 my-7 text-opacity-90">
          A whole world of freelance talent at your fingertips
        </h1>
        <div className="flex items-center px-4 mx-4 mt-5 mb-2">
          <img src="/images/tick.PNG" alt="" className="w-6 h-6 mr-3" />
          <h3 className="text-xl font-bold text-gray-900 text-opacity-80">
            The best for every budget
          </h3>
        </div>
        <p className="px-4 mx-4 mt-1 font-sans text-lg font-semibold text-gray-600 text-opacity-90">
          Find high-quality services at every price point. No hourly rates, just
          project-based pricing.
        </p>
        <div className="flex items-center px-4 mx-4 mt-5 mb-2">
          <img src="/images/tick.PNG" alt="" className="w-6 h-6 mr-3" />
          <h3 className="text-xl font-bold text-gray-900 text-opacity-80">
            Quality work done quickly
          </h3>
        </div>
        <p className="px-4 mx-4 mt-1 font-sans text-lg font-semibold text-gray-600 text-opacity-90">
          Find the right freelancer to begin working on your project within
          minutes.
        </p>
        <div className="flex items-center px-4 mx-4 mt-5 mb-2">
          <img src="/images/tick.PNG" alt="" className="w-6 h-6 mr-3" />
          <h3 className="text-xl font-bold text-gray-900 text-opacity-80">
            Protected payments, every time
          </h3>
        </div>
        <p className="px-4 mx-4 mt-1 font-sans text-lg font-semibold text-gray-600 text-opacity-90">
          Always know what you'll pay upfront. Your payment isn't released until
          you approve the work.
        </p>
        <div className="flex items-center px-4 mx-4 mt-5 mb-2">
          <img src="/images/tick.PNG" alt="" className="w-6 h-6 mr-3" />
          <h3 className="text-xl font-bold text-gray-900 text-opacity-80">
            24/7 support Questions?
          </h3>
        </div>
        <p className="px-4 mx-4 mt-1 font-sans text-lg font-semibold text-gray-600 text-opacity-90">
          Our round-the-clock support team is available to help anytime,
          anywhere.
        </p>
      </div>

      {
        // right side
      }

      <video
        className="object-cover mr-20 rounded-md"
        src="
          /videos/v1.mp4"
        poster="/images/thumbnail.png"
        controls
      ></video>
    </section>
  );
};

export default Sectionfive;
