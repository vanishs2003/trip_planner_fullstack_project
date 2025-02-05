import React from "react";

function PlaceToVisit({ trip }) {
  return (
    <div>
      <h2 className="font-bold text-lg">Places to Visit</h2>

      <div>
        {trip?.tripdata?.itinerary?.map((item, index) => (
          <div key={index} className="mt-5">
            <h2 className="font-medium text-lg">{item.day}</h2>
            {item.plan?.map((place, idx) => (
              <div key={idx} className="ml-4">
                <h2 className="font-medium text-sm text-orange-600">{place}</h2> {/* Displaying place name */}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlaceToVisit;
