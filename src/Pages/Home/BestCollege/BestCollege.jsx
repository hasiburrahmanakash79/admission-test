const BestCollege = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5  my-5">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://i.ibb.co/m8r21Rd/download.png"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-ghost btn-sm ">Details</button>
          </div>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://i.ibb.co/m8r21Rd/download.png"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://i.ibb.co/m8r21Rd/download.png"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestCollege;
