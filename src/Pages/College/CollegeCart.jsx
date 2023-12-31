import { Link } from "react-router-dom";

const CollegeCart = ({ college }) => {
  const { college_name, research_number, admission_date, rating, image } =
    college;
  return (
    <div>
      <div className="card bg-base-100 hover:bg-base-200 shadow-xl border">
        <div className="avatar p-3">
          <div className="w-full rounded-lg">
            <img src={image} />
          </div>
        </div>
        <div className="p-3 text-center">
          <h2 className="text-2xl font-semibold">{college_name}</h2>
          <p>Admission Date: {admission_date}</p>
          <p>Number of Research: {research_number}</p>
          <p>Rating: {rating}</p>
          <Link to={`/collegeDetail/${college._id}`}>
            <button className="btn btn-primary btn-sm mt-5">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CollegeCart;
