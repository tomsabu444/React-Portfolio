import React, { useEffect, useState } from 'react';
import { database } from '../config/FirebaseConfig'; // Assume this is your initialized Firebase configuration
import { ref, get, set, update } from 'firebase/database';

const VisitorCount = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  // Function to check if the visitor is new and increment the visitor count
  const checkAndIncrementVisitorCount = async () => {
    const visitorKey = 'visitor-true';

    // Check if the visitor has already been recorded in localStorage
    if (!localStorage.getItem(visitorKey)) {
      // If the visitor is new, increment the counter in Firebase
      const counterRef = ref(database, 'visitorCount');
      const counterSnapshot = await get(counterRef);

      if (counterSnapshot.exists()) {
        const currentCount = counterSnapshot.val().count;
        await update(counterRef, { count: currentCount + 1 });
      } else {
        await set(counterRef, { count: 1 });
      }

      // Store a flag in localStorage to indicate that this visitor has been counted
      localStorage.setItem(visitorKey, 'true');
    }
  };

  // Function to retrieve the current visitor count from Firebase
  const getVisitorCount = async () => {
    const counterRef = ref(database, 'visitorCount');
    const counterSnapshot = await get(counterRef);
    return counterSnapshot.exists() ? counterSnapshot.val().count : 0;
  };

  // useEffect to manage visitor count on component mount
  useEffect(() => {
    checkAndIncrementVisitorCount().then(() => {
      getVisitorCount().then((count) => setVisitorCount(count));
    });
  }, []);

  console.log(visitorCount);
  

  // return  visitorCount
};


export default VisitorCount