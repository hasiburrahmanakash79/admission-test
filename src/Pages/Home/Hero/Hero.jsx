import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
      <div
        className="hero bg-cover h-full"
        style={{
          backgroundImage: "url(https://i.ibb.co/jbhGP5F/admission.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl py-14">
            <h1 className="mb-5 text-5xl font-bold">Hello Dear Student</h1>
            <p className="mb-5">
              The college application process can be competitive, but with
              thorough preparation, a strong academic record, and a well-crafted
              application, you can increase your chances of admission. Best of
              luck on your journey to higher education.
            </p>
            <div className="flex justify-center items-center gap-2 my-3">
              <div className="form-control my-5">
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Search College"
                    className="input input-bordered text-black"
                  />
                  <button className="btn btn-square">
                    <FaSearch></FaSearch>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
