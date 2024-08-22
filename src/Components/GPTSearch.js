import { BACKGROUND } from "../Utils/constants"
import GPTSearchBar from "./GPTSearchBar"

const GPTSearch = () => {
  return (
    <div>
        <div className="absolute w-full -z-10">
        <img
          src={BACKGROUND}
          alt="Background"
          className="h-[775px] w-full"
        ></img>
        <div className="absolute inset-0 bg-gradient-to-b from-black opacity-65"></div>
      </div>
        <GPTSearchBar/>
    </div>
  )
}

export default GPTSearch