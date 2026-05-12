import React from 'react';
import { MapPin, Clock, Persons, ArrowRight } from "@gravity-ui/icons";
import Image from 'next/image';

const DestinationsCard = ({destination}) => {
    return (
         <div
             
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={destination.imageUrl || "/placeholder.jpg"}
                  alt={destination.destinationName || "image"}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute top-4 right-4 bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {`$${destination.price}`}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {destination.destinationName}
                  </h2>

                  <div className="flex items-center gap-2 text-gray-500 mt-2 text-sm">
                    <MapPin width={16} height={16} />
                    <span>{destination.country}</span>
                  </div>
                </div>

                <div className="flex justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock width={16} height={16} />
                    <span>{destination.duration}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Persons width={16} height={16} />
                    <span>{destination.category}</span>
                  </div>
                </div>

                <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 transition duration-300 cursor-pointer">
                  Book Now
                  <ArrowRight width={18} height={18} />
                </button>
              </div>
            </div>
    );
}

export default DestinationsCard;
