import { Link } from "react-router-dom";

const CollegeList = ({ college }) => {
  const { college_name, admission_date, rating, image, id } = college;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask rounded-md w-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>
        <Link to={id} className="text-lg font-bold">
          {college_name}
        </Link>
      </td>
      <td>
        <span className="badge badge-ghost badge-sm">{admission_date}</span>
      </td>
      <td>{rating}</td>
      <th>
        <Link to={`/collegeDetail/${college._id}`}>
          <button className="btn btn-primary btn-sm">Apply</button>
        </Link>
      </th>
    </tr>
  );
};

export default CollegeList;
