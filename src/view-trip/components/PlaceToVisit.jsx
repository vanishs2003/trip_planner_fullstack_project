import React from "react";

function PlaceTovisit({trip}){
    return(
        <div>
            <h2 className='font-bold text-lg'>Place to Visit</h2>
            
            <div> 
                {trip.tripdata?.itinerary.map((item,index)=>(
                    <div classname='mt-5'>
                        <h2 className='font-medium text-lg'>{item.day}</h2>
                        {item.plan.map((place,index)=>(
                            <div>
                                <h2 className='font-medium text-sm text-orange-600'></h2>
                               
                            </div>    
                        ))}
                    </div>    
                ))}
            </div>
        </div>

    )
}