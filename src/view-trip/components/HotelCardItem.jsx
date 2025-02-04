import React from "react"

function HotelCardItem({ hotel }) {

     const [photoUrl,setPhotoUrl]=useState();
      useEffect(()=>{
        hotel&&GetPlacePhoto();
      },[hotel])
    
      const GetPlacePhoto=async()=>{
        const data={
          textQuery:hotel?.hotelNamel
        }
        const result=await GetPlaceDetials().then(resp=>{
          console.log(resp.data.places[0].photos[3].name)
    
          const photoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name,);
          setPhotoUrl(photoUrl);
    
          }
        })
      }
    return (
        <Link to={'https://www.google.com/maps/search/?api=1&query=' + hotel?.hotelName + " , " hotel?.hotelAddress} target = '_blank' >
            <div key={index} className='hover:scale-105 transition-all cursor-pointer'>
                <img src={photoUrl} className='rounded-xl h-[150px] w-full object-cover'  />
                <div className='my-2 flex flex-col gap-2'>
                    <h2 className='font-medium'>{hotel.hotelName}</h2>
                    <h2 className='text-xs text-gray-500'>📍 {hotel.hotelAddress}</h2>
                    <h2 className='text-sm'>💵 {hotel.price}</h2>
                    <h2 className='text-sm'>⭐ {hotel.rating}</h2>
                </div>
            </div>
        </Link >
    )
}

export default HotelCardItem