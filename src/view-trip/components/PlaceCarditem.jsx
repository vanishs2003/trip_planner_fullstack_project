import { Button } from "@/Components/ui/button";
import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";

function PlaceCardItem({ place }) {

   const [photoUrl,setPhotoUrl]=useState();
    useEffect(()=>{
      place&&GetPlacePhoto();
    },[place])
  
    const GetPlacePhoto=async()=>{
      const data={
        textQuery:place.placeName
      }
      const result=await GetPlaceDetials().then(resp=>{
        const photoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name,);
        setPhotoUrl(photoUrl);
  
        }
      })
    }
  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query='+hotel.hotelNames} target='_blank'>
    <div className="border rounded-xl p-3 mt-2 flex gap-5
    hovwr:scale-105 transition-all hover:shadow-md cursor-pointer">
      <img
        src={photoUrl?photoUrl:"/placeholder.jpg"}
        className="w-[130px] h[130px] rounded-xl obj-cover"
        alt="Place"
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
