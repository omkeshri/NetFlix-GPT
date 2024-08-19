const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-full aspect-video pt-[25%] px-24 text-white bg-gradient-to-r from-black bg-opacity-10">
      <h1 className="text-4xl font-bold mb-3">{title}</h1>
      <p className="w-[40%] tracking-wide">{overview}</p>
      <div className="mt-3">
        <button className="bg-white text-black p-2 px-8 text-lg font-bold rounded-lg mr-2 hover:bg-opacity-80">
          ▷ Play
        </button>
        <button className="bg-gray-500 text-white p-2 px-8 text-lg font-medium rounded-lg hover:bg-opacity-80">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
