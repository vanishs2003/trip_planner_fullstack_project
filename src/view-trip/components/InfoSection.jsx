import React, { useState, useEffect } from 'react';
import { Button } from '@/Components/ui/button';
import { IoSendSharp } from "react-icons/io5";

export const PHOTO_REF_URL = `https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=600&maxWidthPx=600&key=${import.meta.env.VITE_GOOGLE_PLACE_API_KEY}`;

function InfoSection({ trip }) {
    const [photoUrl, setPhotoUrl] = useState(null);

    useEffect(() => {
        if (trip) {
            GetPlacePhoto();
        }
    }, [trip]);

    const GetPlacePhoto = async () => {
        try {
            const data = { textQuery: trip?.userSelection?.location?.label };

            // Ensure `GetPlaceDetails` function is defined or imported
            const resp = await GetPlaceDetials(); 

            if (resp?.data?.places?.[0]?.photos?.length > 0) {
                const photoName = resp.data.places[0].photos[0].name; // Safely access first photo
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
        <div>
            <img 
                src={photoUrl || "/placeholder.jpg"} 
                className='h-[300px] w-full object-cover rounded-xl' 
                alt="Location"
            />

            <div className='flex justify-between items-center'>
                <div className='my-5 flex flex-col gap-2'>
                    <h2 className='font-bold text-2xl'>{trip?.userSelection?.location?.label}</h2>
                    <div className='flex gap-5'>
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>📅 {trip?.userSelection?.noOfDays} Day</h2>
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>💵 {trip?.userSelection?.budget} Budget</h2>
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>🍷 No. Of travelers: {trip?.userSelection?.traveler} </h2>
                    </div>
                </div>

                <Button>
                    <IoSendSharp />
                </Button>
            </div>
        </div>
    );
}

export default InfoSection;
