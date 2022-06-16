import { memo } from "react";
import ListImage from "./ListImage";

function App() {
  return (
    <div className="p-20 bg-hero-pattern">
      <ListImage></ListImage>
    </div>
  );
}
export default memo(App);
