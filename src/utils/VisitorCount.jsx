import React, { useEffect, useState } from "react";
import { database } from "../config/FirebaseConfig"; // Assume this is your initialized Firebase configuration
import { ref, get, set, update } from "firebase/database";
import { VscEye } from "react-icons/vsc"; // Import the eye icon
import "./style/VisitorCount.css"; // Import the CSS file

const VisitorCount = () => {
  const [visitorCount, setVisitorCount] = useState(null); // Initialize with null
  const [isVisible, setIsVisible] = useState(false); // State to control visibility and animation

  // Function to check if the visitor is new and increment the visitor count
  const checkAndIncrementVisitorCount = async () => {
    const visitorKey = "visitor-true";

    // Check if the visitor has already been recorded in localStorage
    if (!localStorage.getItem(visitorKey)) {
      const counterRef = ref(database, "visitorCount");
      const counterSnapshot = await get(counterRef);

      if (counterSnapshot.exists()) {
        const currentCount = counterSnapshot.val().count;
        await update(counterRef, { count: currentCount + 1 });
      } else {
        await set(counterRef, { count: 1 });
      }

      // Mark the visitor as counted in localStorage
      localStorage.setItem(visitorKey, "true");
    }
  };

  // Function to retrieve the current visitor count from Firebase
  const getVisitorCount = async () => {
    const counterRef = ref(database, "visitorCount");
    const counterSnapshot = await get(counterRef);
    return counterSnapshot.exists() ? counterSnapshot.val().count : 0;
  };

  // useEffect to manage visitor count on component mount
  useEffect(() => {
    const fetchVisitorCount = async () => {
      await checkAndIncrementVisitorCount();
      const count = await getVisitorCount();
      setVisitorCount(count); // Set visitor count after fetching

      // Show the visitor count after the data is set
      setIsVisible(true);

      // Hide the visitor count after 15 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 10000); // 10 seconds delay
    };

    fetchVisitorCount();
  }, []);

  // Apply the 'visible' class when isVisible is true
  return (
    <div className={`visitor-count-container ${isVisible ? "visible" : ""}`}>
      <div className="visitor-icon">
        <VscEye /> <div className="count">{visitorCount}</div>
      </div>
    </div>
  );
};

export default VisitorCount;
