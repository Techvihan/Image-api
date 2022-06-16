import axios from "axios";
import { FC, memo, useEffect, useState } from "react";
import ListImagePage from "./ListImagePage";
import Image from "./models/ListImage";
type Props = {};
const ListImage: FC<Props> = (props) => {
  const [data, setData] = useState<Image[]>([]);
  useEffect(() => {
    const image = axios.get("https://picsum.photos/v2/list?page=2&limit=100");
    image.then((response) => {
      setData(response.data);
      console.log("data", response.data);
    });
  }, []);
  return (
    <>
      <div className="space-y-10">
        <div className="text-3xl text-center bg-slate-800 text-white font-extrabold italic rounded-full py-2">
          Welcome to TechVihan World <br></br>
          <span className="text-xl">Download free hd wallpaper </span>
        </div>
        {data.map((a) => (
          <ListImagePage image={a} key={a.id} />
        ))}
        <div className="flex justify-center">
          <a
            href="https://codeyogi.io/"
            target="_blank"
            className="border-2 sm:w-96 w-full flex justify-center hover:transition hover:animate-pulse ease-in-out delay-150  hover:-translate-y-1 
    hover:scale-110  duration-150  bg-gradient-to-r from-red-500 via-gray-500 to-blue-500
    text-2xl rounded-lg py-2"
          >
            ❤️ at CodeYogi
          </a>
        </div>
      </div>
    </>
  );
};
ListImage.defaultProps = {};
export default memo(ListImage);
