const jobViews = [
  {
    id: 1,
    job: "Cars in Garages",
    views: 150,
  },
  {
    id: 2,
    job: "Buses in Garages",
    views: 10,
  },
  {
    id: 3,
    job: "Wheelchair Parking",
    views: 15,
  },
  {
    id: 4,
    job: "Place Garages",
    views: 5,
  },
];

const TotalJobViews = (props) => {
  return (
    <div>
      <div className="">
        <ul className="totalJobViewsGrid">
          {jobViews.map((job) => {
            return (
              <li className="jobViewsBlock" key={job.id}>
                <span className="jobTitle">{job.job}</span>

                <div className="jobViewsContainer">
                  <span className="jobViews">{job.views}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TotalJobViews;
