import UseTitle from "../../../Hook/UseTitle";

const ResearchPaper = () => {
  return (
    <div className="container mx-auto">
      <UseTitle title="Research Papers"></UseTitle>
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" checked="checked" />
          <div className="collapse-title text-xl font-medium">
            A Mathematically Creative Four-Year-Old—What Do We Learn from Him?
          </div>
          <div className="collapse-content">
            <p>
              A 4-year-old child, who is very interested and precocious in
              mathematics, was interviewed doing mathematical tasks in order to
              find out how advanced can a 4-year-old child be? His mathematical
              knowledge and ability are very high
              <a
                href="https://www.scirp.org/jouRNAl/paperinformation.aspx?paperid=34653"
                className="hover:underline text-blue-500"
              >
                {" "}
                Read more...
              </a>
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Research on the Practice of College Students’ Second Hand Trading
            Platform
          </div>
          <div className="collapse-content">
            <p>
              Based on the fact that there are many idle items on campus and
              increasing the circulation rate of items, this article aims to
              establish a campus Internet platform that can conduct second hand
              goods trading, shopping on the basis of learning and life, and
              discussion on consumption concepts to fill the gap
              <a
                href="https://www.scirp.org/journal/paperinformation.aspx?paperid=126472"
                className="hover:underline text-blue-500"
              >
                {" "}
                Read more...
              </a>
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            A Data-Driven Intersection Geometry Mapping Technique to Enhance the
            Scalability of Trajectory-Based Traffic Signal Performance Measures
          </div>
          <div className="collapse-content">
            <p>
              Connected vehicle (CV) trajectory data provides practitioners with
              opportunities to assess traffic signal performance with no
              investment in detection or communication infrastructure. With over
              500 billion trajectory records generated each month in the United
              States, operations
              <a
                href="https://www.scirp.org/journal/paperinformation.aspx?paperid=126463"
                className="hover:underline text-blue-500"
              >
                {" "}
                Read more...
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPaper;
