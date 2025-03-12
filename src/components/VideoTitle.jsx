const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video px-6 md:px-36 pt-[20%] absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-xl md:text-4xl font-bold">{title}</h1>
      <p className="hidden md:inline-block font-normal md:font-bold text-lg w-1/2 py-6">
        {overview}
      </p>
      <div className="my-2 md:my-0">
        <button className="py-1 md:py-3 px-4 md:px-10 bg-red-700 text-white mt-2 md:m-2 rounded-xl text-base md:text-xl hover:bg-opacity-80">
          Play
        </button>
        <button className="hidden md:inline-block p-3 bg-gray-300 text-black m-2 rounded-xl text-xl hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
