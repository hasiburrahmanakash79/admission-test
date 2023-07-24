import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className="container mx-auto flex flex-col items-center justify-center md:mt-32 p-5">
            <img src="https://i.ibb.co/j3975sV/image.png" alt="" />
            <Link to="/" className="btn btn-primary">Back to home</Link>
        </div>
    );
};

export default PageNotFound;