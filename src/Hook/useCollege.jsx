import { useEffect, useState } from "react";

const useCollege = () => {
  const [colleges, setColleges] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allCollege")
      .then((res) => res.json())
      .then((data) => {
        setColleges(data);
      });
  }, []);
  return [colleges];
};

export default useCollege;
