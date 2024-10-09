import React, { useEffect, useState } from "react";
import { firestore } from "../config/FirebaseConfig"; // Firestore import
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore"; // Firestore methods
import "./style/VisitorCount.css";

const VisitorCount = () => {
  const [visitorCount, setVisitorCount] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  // Function to check if the visitor is new and increment the visitor count
  const checkAndIncrementVisitorCount = async () => {
    const visitorKey = "unique-visitor";

    // Check if the visitor has already been recorded in localStorage
    if (!localStorage.getItem(visitorKey)) {
      const counterRef = doc(firestore, "visitors", "visitorCount");
      const counterSnapshot = await getDoc(counterRef);

      if (counterSnapshot.exists()) {
        const currentCount = counterSnapshot.data().count;
        await updateDoc(counterRef, { count: currentCount + 1 });
      } else {
        await setDoc(counterRef, { count: 1 });
      }

      // Mark the visitor as counted in localStorage
      localStorage.setItem(visitorKey, "true");
    }
  };

  // Function to retrieve the current visitor count from Firestore
  const getVisitorCount = async () => {
    const counterRef = doc(firestore, "visitors", "visitorCount");
    const counterSnapshot = await getDoc(counterRef);
    return counterSnapshot.exists() ? counterSnapshot.data().count : 0;
  };

  useEffect(() => {
    const fetchVisitorCount = async () => {
      await checkAndIncrementVisitorCount();
      const count = await getVisitorCount();
      setVisitorCount(count); // Set visitor count after fetching

      // Show the visitor count after the data is set
      setIsVisible(true);

      // Hide the visitor count after 10 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 10000); // 10 seconds delay
    };

    fetchVisitorCount();
  }, []);

  return (
    <div className={`visitor-count-container ${isVisible ? "visible" : ""}`}>
      <div className="visitor-icon">Site Visitor:
        <div className="count"> {visitorCount}</div>
      </div>
    </div>
  );
};

export default VisitorCount;
