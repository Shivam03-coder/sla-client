"use client";
import { useEffect, useState } from "react";
import { boolean } from "zod";

const useMount = () => {
  const [isMounted, setIsMounted] = useState(false); // Corrected naming convention for readability

  useEffect(() => {
    setIsMounted(true); // Set the state to true when the component mounts
    return () => setIsMounted(false); // Clean up by setting it to false on unmount
  }, []);

  return isMounted;
};

export default useMount;
