import Image from "next/image";
import React from "react";
import { MapPin, Clock, Persons, ArrowRight } from "@gravity-ui/icons";
import DestinationsCard from "@/components/DestinationsCard";

const fetchTravelData = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/traveldata`);
  const data = await res.json();

  return data.data;
};

const DestinationsPage = async () => {
  const destinations = await fetchTravelData();
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-white py-14 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Explore Destinations
          </h1>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Discover breathtaking places around the world and plan your next
            unforgettable journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations?.length > 0 ? (
            destinations.map((destination) => (
              <DestinationsCard
                key={destination._id}
                destination={destination}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 w-full">No destinations found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DestinationsPage;
