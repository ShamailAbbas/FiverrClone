const ServiceCard = () => {
  return (
    <div
      className="flex-1 mx-4 transition duration-300 bg-opacity-100 bg-no-repeat bg-cover rounded-md cursor-pointer w-52 h-80 hover:opacity-90 "
      style={{ backgroundImage: "url('/images/camera.png')" }}
    >
      <p className="px-4 pt-3 font-semibold text-gray-300 ">Build a Brand</p>
      <p className="px-4 -mt-2 text-2xl font-bold text-gray-300">Logo Design</p>
    </div>
  );
};

export default ServiceCard;
