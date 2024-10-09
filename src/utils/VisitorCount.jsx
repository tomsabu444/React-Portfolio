import React, { useEffect, useState } from "react";
import { firestore } from "../config/FirebaseConfig"; // Firestore import
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore"; // Firestore methods
import "./style/VisitorCount.css";

const VisitorCount = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [animatingCount, setAnimatingCount] = useState(visitorCount);

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

        // Set a timeout for 1 second before updating animatingCount
        setTimeout(() => {
          setAnimatingCount(currentCount + 1); // Set the animating count to new value after 1 second
        }, 1000);
      } else {
        await setDoc(counterRef, { count: 1 });
        setAnimatingCount(1); // New count is 1 immediately
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
      const count = await getVisitorCount();
      setVisitorCount(count); // Set visitor count after fetching
      setAnimatingCount(count); // Set animating count to fetched count
      setIsVisible(true); // Show the visitor count after the data is set

      // Check and increment visitor count
      await checkAndIncrementVisitorCount();

      // Hide the visitor count after 10 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 8000); // 8 seconds delay
    };

    fetchVisitorCount();
  }, []);

  return (
    <div className={`visitor-count-container ${isVisible ? "visible" : ""}`}>
      <div className="visitor-icon">
        Visitor Count:
        <div className={`count ${animatingCount > visitorCount ? "count-increase" : ""}`}>
          {animatingCount}
        </div>
      </div>
    </div>
  );
};

export default VisitorCount;
