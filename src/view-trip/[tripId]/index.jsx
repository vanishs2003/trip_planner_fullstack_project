import { db } from "@/service/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import InfoSection from "../components/InfoSection";
import Hotels from "../components/Hotels";
import Footer from "../components/Footer";

function ViewTrip() {
  const { tripId } = useParams();
  const [trip, setTrip] = useState({}); // Changed from [] to {}

  useEffect(() => {
    if (tripId) {
      GetTripData();
    }
  }, [tripId]); // tripId as dependency

  /**
   * Function to fetch trip data from Firebase
   */
  const GetTripData = async () => {
    try {
      const docRef = doc(db, "AITrips", tripId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document Data:", docSnap.data());
        setTrip(docSnap.data());
      } else {
        console.log("No such document!");
        toast.error("No trip found!"); // Updated toast message
      }
    } catch (error) {
      console.error("Error fetching trip data:", error);
      toast.error("Failed to fetch trip data!");
    }
  };

  return (
    <div className="p-10 md:px-20 lg:px-44 xl:px-56">
      {/* Information Section */}
      <InfoSection trip={trip} />

      {/* Recommended Hotels */}
      <Hotels trip={trip} />

      {/* Daily Plan - Add component here if needed */}

      {/* Footer */}
      <Footer trip={trip} />
    </div>
  );
}

export default ViewTrip;
