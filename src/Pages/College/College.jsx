import { useState } from "react";
import useCollege from "../../Hook/useCollege";
import UseTitle from "../../Hook/UseTitle";
import CollegeCart from "./CollegeCart";

const College = () => {

  const [seeMore, setSeeMore] = useState(false);
  const [displayCount, setDisplayCount] = useState(8);

  const [colleges] = useCollege();

  const handleSeeMore = () => {
    setSeeMore(true);
    setDisplayCount(colleges.length);
  };
  console.log(colleges);

  return (
    <div className="p-5"> 
    <UseTitle title="All Colleges"></UseTitle>
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
        {colleges.slice(0, displayCount).map((college) => (
          <CollegeCart key={college.id} college={college}></CollegeCart>
        ))}
      </div>
      <div className="text-center my-5">
        {!seeMore && (
          <button
            onClick={handleSeeMore}
            className="btn btn-primary btn-outline"
          >
            See More classes
          </button>
        )}
      </div>
    </div>
  );
};

export default College;
