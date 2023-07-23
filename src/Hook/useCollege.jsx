import { useEffect, useState } from "react";

const useCollege = () => {
  const [colleges, setColleges] = useState([]);
  useEffect(() => {
    fetch("college.json")
      .then((res) => res.json())
      .then((data) => {
        setColleges(data);
      });
  }, []);
  return [colleges];
};

export default useCollege;
