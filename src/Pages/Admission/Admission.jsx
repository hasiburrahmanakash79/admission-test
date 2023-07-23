import UseTitle from "../../Hook/UseTitle";
import useCollege from "../../Hook/useCollege";
import CollegeList from "./CollegeList";

const Admission = () => {
  const [colleges] = useCollege();
  return (
    <div className="container mx-auto">
      <UseTitle title="Admission any College"></UseTitle>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>College Name</th>
              <th>Admission Date</th>
              <th>Rating</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {colleges.map((college) => (
              <CollegeList key={college.id} college={college}></CollegeList>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admission;
