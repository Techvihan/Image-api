import { FC, memo } from "react";
import Image from "./models/ListImage";
type Props = { image: Image };
const ListImageRow: FC<Props> = ({ image }) => {
  return (
    <div className=" sm:px-12 py-10  px-6 rounded-md  shadow-md shadow-black border-black bg-gradient-to-r from-gray-300 to-gray-700 hover:transition hover:delay-150  hover:-translate-y-1">
      <div className="flex flex-col">
        <div className=" flex flex-col justify-between sm:flex-row">
          <div className="text-2xl text-black">
            Author Name:{" "}
            <span className="text-xl font-serif font-bold">{image.author}</span>
          </div>

          <a
            href={image.download_url}
            target="_blank"
            className=" p-2 sm:px-4 py-2 bg-yellow-500 rounded-md hover:bg-green-500  text-white sm:text-sm text-center"
          >
            Download Image
          </a>
        </div>
        <div>
          <span>Hight of image: {image.height} px</span>
        </div>
        <div>
          <span>Width of image: {image.width} px</span>
        </div>
      </div>
    </div>
  );
};
ListImageRow.defaultProps = {};
export default memo(ListImageRow);
