import Gigcard from "./Gigcard";

const Sectionthree = () => {
  return (
    <section>
      <h1 className="px-4 mx-4 my-2 text-3xl font-bold text-gray-900 text-opacity-90">
        Recently Viewed and More
      </h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex-shrink-0">
          <Gigcard gigdetails="1" />
        </div>
        <div className="flex-shrink-0">
          <Gigcard gigdetails="2" />
        </div>
        <div className="flex-shrink-0">
          <Gigcard gigdetails="3" />
        </div>
        <div className="flex-shrink-0">
          <Gigcard gigdetails="1" />
        </div>
        <div className="flex-shrink-0">
          <Gigcard gigdetails="4" />
        </div>
        <div className="flex-shrink-0">
          <Gigcard gigdetails="5" />
        </div>
        <div className="flex-shrink-0">
          <Gigcard gigdetails="6" />
        </div>
      </div>
    </section>
  );
};

export default Sectionthree;
