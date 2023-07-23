import { Link, useLoaderData } from "react-router-dom";

const CollegeDetails = () => {
  const singleCollage = useLoaderData();
  const {
    college_name,
    admission_date,
    rating,
    image,
    description,
    admission_process,
    event_details,
    research_works,
    research_number,
    sports_categories,
  } = singleCollage;

  console.log(singleCollage);
  return (
    <div className=" p-10 m-5 border-2 rounded-xl">
      <div className="md:flex items-center gap-10">
        <div className="avatar md:w-1/3 ">
          <div className="w-full rounded">
            <img src={image} />
          </div>
        </div>
        <div className=" md:w-2/3">
          <div className="text-lg">
            <p className="text-5xl font-bold mb-3">{college_name}</p>
            <p>
              <span className="underline font-bold">About our college:</span>{" "}
              <br /> {description}
            </p>
            <p>
              <span className="underline font-bold">Event:</span> <br />{" "}
              {event_details}
            </p>
            <p>
              <span className="underline font-bold">Research:</span> <br />{" "}
              {research_works}
            </p>
            <p className="mt-3 text-red-600">
              <span className="underline font-bold">Admission Process:</span>{" "}
              <br /> {admission_process}
            </p>

            <div className="md:flex gap-10 my-5">
              <div>
                <p>Number of Research: {research_number}</p>
                <p>
                  Sports: {sports_categories[0]}, {sports_categories[1]},{" "}
                  {sports_categories[2]}
                </p>
              </div>
              <div>
                <p>Rating: {rating}</p>
                <p className="text-red-600">Admission date: {admission_date}</p>
              </div>
            </div>

            <Link
              to="apply"
              className="btn btn-warning btn-outline btn-sm my-2"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetails;
