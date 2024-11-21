const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video px-36 pt-[20%] absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="font-bold text-lg w-1/2 py-6">{overview}</p>
      <div>
        <button className="p-3 px-10 bg-red-700 text-white m-2 rounded-xl text-xl hover:bg-opacity-80">
          Play
        </button>
        <button className="p-3 bg-gray-300 text-black m-2 rounded-xl text-xl hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
