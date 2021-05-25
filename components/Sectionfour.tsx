import ServiceCard from "./ServiceCard";

const Sectionfour = () => {
  return (
    <section className="mx-4 mt-20">
      <h1 className="px-4 mx-4 text-4xl font-bold text-gray-800 mb-7 text-opacity-90">
        Popular professional services
      </h1>
      <div className="flex mt-4 overflow-x-scroll no-scrollbar ">
        <div className="flex-shrink-0 ">
          <ServiceCard />
        </div>
        <div className="flex-shrink-0 ">
          <ServiceCard />
        </div>
        <div className="flex-shrink-0 ">
          <ServiceCard />
        </div>
        <div className="flex-shrink-0 ">
          <ServiceCard />
        </div>
        <div className="flex-shrink-0 ">
          <ServiceCard />
        </div>
        <div className="flex-shrink-0 ">
          <ServiceCard />
        </div>
      </div>
    </section>
  );
};

export default Sectionfour;
