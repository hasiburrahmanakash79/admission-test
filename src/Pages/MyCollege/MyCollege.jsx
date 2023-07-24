import { useContext, useEffect, useState } from "react";
import { Authentication } from "../../Provider/AuthProvider";
import UseTitle from "../../Hook/UseTitle";

const MyCollege = () => {
  const [apply, setApply] = useState([]);

  const { user } = useContext(Authentication);

  const url = `https://admission-test-server.vercel.app/apply?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setApply(data);
      });
  }, [url]);

  return (
    <div className="container mx-auto">
      <UseTitle title="My Colleges"></UseTitle>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-16">
        {apply.map((applied) => (
          <div key={applied._id}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={applied?.image}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {applied?.college_name}
                  <div className="badge badge-secondary">Applied</div>
                </h2>
                <p>Subject: {applied?.subject}</p>
                <p>Email: {applied?.email}</p>
              </div>
            </div>
          </div>
        ))}
        <div></div>
      </div>
    </div>
  );
};

export default MyCollege;
