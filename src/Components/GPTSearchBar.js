import { useSelector } from "react-redux";
import lang from "../Utils/languageConstants";

const GPTSearchBar = () => {
    const langKey = useSelector(store => store.config.lang);
  return (
    <div className="pt-[20%] flex  justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input type="text" className="p-2 m-4 col-span-8" placeholder={lang[langKey].searchPlaceHolder}></input>
        <button className="m-4 bg-red-500 col-span-4">{lang[langKey].search}</button>
      </form>

    </div>
  );
};

export default GPTSearchBar;
