import React, { useEffect, useState } from "react";
import { firestore } from "../config/FirebaseConfig"; // Firestore import
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore"; // Firestore methods
import "./style/VisitorCount.css";

const VisitorCount = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [animatingCount, setAnimatingCount] = useState(visitorCount);

  // Check if visitor is new and increment the visitor count if necessary
  const checkAndIncrementVisitorCount = async () => {
    const visitorKey = "unique-visitor";

    // Return early if the visitor has already been counted
    if (localStorage.getItem(visitorKey)) return;

    const counterRef = doc(firestore, "visitors", "visitorCount");
    const counterSnapshot = await getDoc(counterRef);

    if (counterSnapshot.exists()) {
      const currentCount = counterSnapshot.data().count;
      await updateDoc(counterRef, { count: currentCount + 1 });

      setTimeout(() => {
        setAnimatingCount(currentCount + 1); // Animate count after a short delay
      }, 1000);
    } else {
      await setDoc(counterRef, { count: 1 });
      setAnimatingCount(1);
    }

    // Mark the visitor in localStorage to prevent future increments
    localStorage.setItem(visitorKey, "true");
  };

  // Retrieve the current visitor count from Firestore
  const getVisitorCount = async () => {
    const counterRef = doc(firestore, "visitors", "visitorCount");
    const counterSnapshot = await getDoc(counterRef);
    return counterSnapshot.exists() ? counterSnapshot.data().count : 0;
  };

  useEffect(() => {
    const fetchVisitorCount = async () => {
      const count = await getVisitorCount();
      setVisitorCount(count);
      setAnimatingCount(count);
      setIsVisible(true);

      await checkAndIncrementVisitorCount();

      // Hide the visitor count after 8 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 8000);
    };

    fetchVisitorCount();
  }, []);

  return (
    <div className={`visitor-count-container ${isVisible ? "visible" : ""}`}>
      <div className="visitor-icon">
        Visitor Count
        <div className={`count ${animatingCount > visitorCount ? "count-increase" : ""}`}>
          {animatingCount}
        </div>
      </div>
    </div>
  );
};

export default VisitorCount;
