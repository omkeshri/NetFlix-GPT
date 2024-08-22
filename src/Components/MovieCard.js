import { IMG_CDN_URL } from "../Utils/constants";

const MovieCard = ({ posterpath }) => {
  return (
    <div className="w-40 pr-4 ">
      <img src={IMG_CDN_URL+posterpath} alt="Movie Card" className="rounded-md"></img>
    </div>
  );
};

export default MovieCard;
