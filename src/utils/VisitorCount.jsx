import React, { useEffect, useState } from "react";
import { firestore } from "../config/FirebaseConfig";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { Eye } from "lucide-react";

const VisitorCount = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const checkAndIncrementVisitorCount = async () => {
    const visitorKey = "unique-visitor";
    if (localStorage.getItem(visitorKey)) return;

    try {
      const counterRef = doc(firestore, "visitors", "visitorCount");
      const counterSnapshot = await getDoc(counterRef);

      if (counterSnapshot.exists()) {
        const currentCount = counterSnapshot.data().count;
        await updateDoc(counterRef, { count: currentCount + 1 });
      } else {
        await setDoc(counterRef, { count: 1 });
      }
      localStorage.setItem(visitorKey, "true");
    } catch (error) {
      console.error("Error updating visitor count:", error);
    }
  };

  const getVisitorCount = async () => {
    try {
      const counterRef = doc(firestore, "visitors", "visitorCount");
      const counterSnapshot = await getDoc(counterRef);
      return counterSnapshot.exists() ? counterSnapshot.data().count : 0;
    } catch (error) {
      console.error("Error fetching visitor count:", error);
      return 0;
    }
  };

  useEffect(() => {
    const fetchVisitorCount = async () => {
      const count = await getVisitorCount();
      setVisitorCount(count);
      setIsVisible(true);
      await checkAndIncrementVisitorCount();
    };

    fetchVisitorCount();
  }, []);

  if (!isVisible) return null;

  return (
    <div className="flex items-center space-x-2 text-green-400 text-xs bg-green-900/20 px-2 py-1 rounded border border-green-500/30">
      <Eye size={12} />
      <span>{visitorCount}</span>
    </div>
  );
};

export default VisitorCount;
