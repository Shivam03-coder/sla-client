"use client";

import { ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const RemainingToDoCard = () => (
  <Card className="max-w-sm bg-white">
    <CardHeader className="flex justify-between items-center">
      <CardTitle>Remaining To Do</CardTitle>
      <button className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center hover:bg-amber-600 transition">
        <ArrowUpRight className="text-white w-4 h-4" />
      </button>
    </CardHeader>
    <CardContent>
      <div className="flex flex-col items-center justify-center py-6">
        <p className="text-4xl font-bold text-gray-800">34</p>
      </div>
    </CardContent>
    <CardFooter>
      <div className="flex justify-between w-full gap-2">
        <div className="flex flex-col items-center p-2 border border-gray-200 rounded-lg w-full">
          <p className="text-sm text-gray-600">Due Today</p>
          <p className="text-lg font-bold text-gray-800">7</p>
        </div>
        <div className="flex flex-col items-center p-2 border border-gray-200 rounded-lg w-full">
          <p className="text-sm text-gray-600">This Week</p>
          <p className="text-lg font-bold text-gray-800">18</p>
        </div>
      </div>
    </CardFooter>
  </Card>
);

export default RemainingToDoCard;
