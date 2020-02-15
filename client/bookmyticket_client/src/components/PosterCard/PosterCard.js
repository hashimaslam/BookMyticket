import React from "react";
import img1 from "./img1.jpg";
const PosterCard = () => {
  return (
    <div>
      <div className="card main-conatiner mt-lg-5 ml-lg-5">
        <img className="card-img-top" src={img1} alt="Card image cap" />
        <div className="card-body card-details">
          <div className="card-left">
            <div className="popularity">
              <div className="likes">
                <div className="heart-icon">
                  <svg
                    height="25px"
                    viewBox="0 -20 464 464"
                    width="16px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m340 0c-44.773438.00390625-86.066406 24.164062-108 63.199219-21.933594-39.035157-63.226562-63.19531275-108-63.199219-68.480469 0-124 63.519531-124 132 0 172 232 292 232 292s232-120 232-292c0-68.480469-55.519531-132-124-132zm0 0"
                      fill="#ff6243"
                    />
                    <path
                      d="m32 132c0-63.359375 47.550781-122.359375 108.894531-130.847656-5.597656-.769532-11.242187-1.15625025-16.894531-1.152344-68.480469 0-124 63.519531-124 132 0 172 232 292 232 292s6-3.113281 16-8.992188c-52.414062-30.824218-216-138.558593-216-283.007812zm0 0"
                      fill="#ff5023"
                    />
                  </svg>
                </div>
                <div className="percentage">61%</div>
              </div>
              <div className="__votes">
                <div className="__count">26,507</div>
                <div className="__count">votes</div>
              </div>
            </div>
          </div>
          <div className="card-right">
            <div className="card-heading">
              <h4>WorldFamous Lover</h4>
            </div>
            <div className="card-tag">
              <span>UA | Tamil</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosterCard;
