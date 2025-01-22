"use client";

import { Play, Pause, X } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TimerTrackerCard = () => {
  const [isRunning, setIsRunning] = useState(false); // Track if timer is running
  const [time, setTime] = useState(0); // Track elapsed time in seconds
  const [startTime, setStartTime] = useState<number | null>(null); // Track the start time

  // Update the timer every second
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(interval); // Clean up the interval when stopping
  }, [isRunning]);

  const handleStartStop = () => {
    if (isRunning) {
      // Pause the timer
      setStartTime(Date.now());
      setIsRunning(false);
    } else {
      // Start the timer
      setIsRunning(true);
      setStartTime(Date.now() - time * 1000); // Adjust the start time
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setStartTime(null);
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  return (
    <Card className="max-w-sm bg-white">
      <CardHeader>
        <CardTitle>Timer Tracker</CardTitle>
        <CardDescription>Track your daily time usage</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center">
          <button
            onClick={handleStartStop}
            className={`flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 transition hover:bg-yellow-500 ${
              isRunning ? "bg-red-500" : "bg-yellow-400"
            }`}
          >
            {isRunning ? (
              <Pause className="h-8 w-8 text-white" />
            ) : (
              <Play className="h-8 w-8 text-white" />
            )}
          </button>
          <p className="mt-4 text-2xl font-bold text-gray-800">
            {formatTime(time)}
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex w-full justify-between text-sm text-gray-600">
          <span>Today's spent</span>
          <span className="font-semibold">{formatTime(time)} / 03:00:00</span>
        </div>
        {/* <button
          onClick={handleReset}  
          className="mt-2 w-full rounded-lg bg-gray-300 py-2 text-sm text-gray-800"
        >
          <X className="mr-2 inline h-4 w-4" /> Reset Timer
        </button> */}
      </CardFooter>
    </Card>
  );
};

export default TimerTrackerCard;
