const UseTitle = ({ title, subTitle }) => {
    return (
      <div className="text-center md:w-1/4 mx-auto border-b-4 my-10">
        <h2 className="text-3xl font-semibold uppercase">{title}</h2>
        <p className="text-yellow-500 py-2">{subTitle}</p>
      </div>
    );
  };
  
  export default UseTitle;