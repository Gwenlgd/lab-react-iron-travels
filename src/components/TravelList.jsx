import React from "react";
import travelPlans from "../assets/travel-plans.json";

console.log(travelPlans);

const TravelList = () => {
  // const { travelPlans } = props;
  return (
    <div className="ListTravel">
      {travelPlans.map((travelPlan) => (
        <div key={travelPlan.id}>
          <h2>{travelPlan.destination}</h2>
          <p>{travelPlan.description}</p>
          <p>Price: {travelPlan.totalCost}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default TravelList;
