import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PHOTO_REF_URL = `https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=600&maxWidthPx=600&key=${import.meta.env.VITE_GOOGLE_PLACE_API_KEY}`;

function HotelCardItem({ hotel }) {
  const [photoUrl, setPhotoUrl] = useState(null);

  useEffect(() => {
    if (hotel) {
      GetPlacePhoto();
    }
  }, [hotel]);

  const GetPlacePhoto = async () => {
    try {
      const data = { textQuery: hotel?.hotelName };

      // Ensure `GetPlaceDetails` is correctly imported or defined
      const resp = await GetPlaceDetails(); 

      if (resp?.data?.places?.[0]?.photos?.length > 0) {
        const photoName = resp.data.places[0].photos[0].name; // Use first available photo safely
        const newPhotoUrl = PHOTO_REF_URL.replace("{NAME}", photoName);
        setPhotoUrl(newPhotoUrl);
      } else {
        console.warn("No photos available for this hotel.");
        setPhotoUrl(null);
      }
    } catch (error) {
      console.error("Error fetching hotel photo:", error);
      setPhotoUrl(null);
    }
  };

  return (
    <Link
      to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        hotel?.hotelName + ", " + hotel?.hotelAddress
      )}`}
      target="_blank"
    >
      <div className="hover:scale-105 transition-all cursor-pointer">
        <img
          src={photoUrl || "/placeholder.jpg"}
          className="rounded-xl h-[150px] w-full object-cover"
          alt={`Image of ${hotel?.hotelName}`}
        />
        <div className="my-2 flex flex-col gap-2">
          <h2 className="font-medium">{hotel?.hotelName}</h2>
          <h2 className="text-xs text-gray-500">📍 {hotel?.hotelAddress}</h2>
          <h2 className="text-sm">💵 {hotel?.price}</h2>
          <h2 className="text-sm">⭐ {hotel?.rating}</h2>
        </div>
      </div>
    </Link>
  );
}

export default HotelCardItem;
