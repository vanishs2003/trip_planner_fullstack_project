import { PHOTO_REF_URL } from '@/view-trip/components/InfoSection';
import React from 'react';
import React, { useEffect, useState } from 'react'
import { GetPlaceDetails } from '@/service/GlobalApi';
function UserTripCarditem({trip}) {
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
    <Link to={'/view-trip/'+trip?.id}>
    <div className='hover:scale-105 transition-all '>
        <img src={photoUrl?photoUrl:'/placeholder.jpg'}
        className='object-cover rounded-xl h-[220px]'/>
        <div>
            <h2 className='font-bold text-lg'>{trip?.userSelection?.location?.label}</h2>
            <h2 className='text-sm text-gray-500'>{trip?.userSelection.noOfDays}Days trip with {trip?.userSelection?.budget} Budget</h2>
        </div>
    </div>
    </Link>
  )
}

export default UserTripCarditem