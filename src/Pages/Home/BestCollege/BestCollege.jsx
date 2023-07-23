import UseTitle from "../../../Hook/UseTitle";
import { useState } from "react";
import useCollege from "../../../Hook/useCollege";
import { Link } from "react-router-dom";

const BestCollege = () => {
  const [colleges] = useCollege();
  const [displayCount] = useState(6);
  return (
    <div>
      <UseTitle title="Best College"></UseTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5  my-5">
        {colleges.slice(0, displayCount).map((college) => (
          <div
            key={college.id}
            className="card border md:card-side bg-base-100 shadow-xl"
          >
            <div className="avatar p-3">
              <div className="w-44 rounded-lg">
                <img src={college?.image} />
              </div>
            </div>
            <div className="card-body">
              <h2 className="card-title text-purple-700">{college?.college_name}</h2>
              {/* <p>Event: {college?.event_details}</p> */}
              <p>Research: {college?.research_works}</p>
              <p className="text-orange-700">
                Admission Date: {college?.admission_date}
              </p>
              <div className="card-actions justify-end">
                <Link to={`/collegeDetail/${college._id}`}><button className="btn btn-ghost btn-sm ">Details</button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestCollege;
