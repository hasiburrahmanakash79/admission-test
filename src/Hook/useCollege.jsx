import { useEffect, useState } from "react";

const useCollege = () => {
  const [colleges, setColleges] = useState([]);
  useEffect(() => {
    fetch("https://admission-test-server.vercel.app/allCollege")
      .then((res) => res.json())
      .then((data) => {
        setColleges(data);
      });
  }, []);
  return [colleges];
};

export default useCollege;
