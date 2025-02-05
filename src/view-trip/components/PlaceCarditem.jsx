import { Button } from "@/Components/ui/button";
import React, { useState, useEffect } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PHOTO_REF_URL = `https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=600&maxWidthPx=600&key=${import.meta.env.VITE_GOOGLE_PLACE_API_KEY}`;

function PlaceCardItem({ place }) {
  const [photoUrl, setPhotoUrl] = useState(null);

  useEffect(() => {
    if (place) {
      GetPlacePhoto();
    }
  }, [place]);

  const GetPlacePhoto = async () => {
    try {
      const data = { textQuery: place.placeName };

      // Ensure `GetPlaceDetails` function is correctly imported or defined
      const resp = await GetPlaceDetails(); 

      if (resp?.data?.places?.[0]?.photos?.length > 0) {
        const photoName = resp.data.places[0].photos[0].name; // Use first photo safely
        const newPhotoUrl = PHOTO_REF_URL.replace('{NAME}', photoName);
        setPhotoUrl(newPhotoUrl);
      } else {
        console.warn("No photos available for this place.");
        setPhotoUrl(null);
      }
    } catch (error) {
      console.error("Error fetching place photo:", error);
      setPhotoUrl(null);
    }
  };

  return (
    <Link to={`https://www.google.com/maps/search/?api=1&query=${place.placeName}`} target="_blank">
      <div className="border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer">
        <img
          src={photoUrl || "/placeholder.jpg"}
          className="w-[130px] h-[130px] rounded-xl object-cover"
          alt={`Image of ${place.placeName}`}
        />
        <div>
          <h2 className="font-bold text-lg">{place.placeName}</h2>
          <p className="text-sm text-gray-400">{place.placeDetails}</p>
          <h2 className="mt-2">🕰️ {place.timeToTravel}</h2>
          
          {/* Uncomment this button if needed */}
          {/* <Button size="sm"><FaMapLocationDot /></Button> */}
        </div>
      </div>
    </Link>
  );
}

export default PlaceCardItem;
