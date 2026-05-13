import Image from "next/image";


const getTravelById = async (id) => {
  const res = await fetch(
    `${process.env.SERVER_URL}/traveldata/${id}`,
    { cache: "no-store" }
  );

  return res.json();
};

const DestinationDetailsPage = async ({ params }) => {
  const { id } =await params;

  const result = await getTravelById(id);
  const data = result?.data;

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl text-gray-500">No Data Found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5 md:px-10">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">

        <div className="relative w-full h-[300px] md:h-[450px]">
          <Image
            src={data.imageUrl || "/placeholder.jpg"}
            alt={data.destinationName || "image"}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-6 md:p-10 space-y-4">

          <h1 className="text-3xl md:text-4xl font-bold">
            {data.destinationName}
          </h1>

          <p className="text-gray-600">{data.country}</p>

          <div className="flex flex-wrap gap-3 text-sm">
            <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full">
              {data.category}
            </span>

            <span className="bg-gray-100 px-3 py-1 rounded-full">
              {data.duration}
            </span>

            <span className="bg-gray-100 px-3 py-1 rounded-full">
              ${data.price}
            </span>
          </div>

          <p className="text-gray-700 leading-relaxed">
            {data.description}
          </p>

          <p className="text-sm text-gray-500">
            Departure: {new Date(data.departureDate).toDateString()}
          </p>

          <div className="flex flex-col md:flex-row gap-4 pt-6">

           
           
            <button className="w-full md:w-auto bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-2xl font-semibold">
              Book Now
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;