import SchoolCard from "../components/SchoolCard";
import Footer from "../components/Footer";

const similarSchools = Array(4).fill({
  image: "/hero.png",
  name: "Embry-Riddle Aeronautical",
  location: "Mumbai, India",
  country: "India",
});

const SchoolDetails = () => {
  return (
    <>
      <div className="bg-[#f7f7f7] py-10">
        <div className="max-w-7xl mx-auto px-4">

          {/* IMAGE GALLERY */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <img
              src="/hero.png"
              className="rounded-lg h-[240px] w-full object-cover"
            />
            <img
              src="/hero.png"
              className="rounded-lg h-[240px] w-full object-cover"
            />
            <img
              src="/hero.png"
              className="rounded-lg h-[240px] w-full object-cover"
            />
          </div>

          {/* MAIN CARD */}
          <div className="bg-white rounded-xl shadow-sm p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* LEFT CONTENT */}
            <div className="lg:col-span-2 space-y-6">

              {/* HEADER */}
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-xl font-semibold">
                    Central Flying Academy
                  </h1>
                  <p className="text-sm text-gray-500">
                    📍 Mumbai, India
                  </p>
                </div>

                <div className="text-green-600 font-semibold">
                  ₹ 18,000
                </div>
              </div>

              {/* TABS */}
              <div className="flex gap-6 border-b text-sm">
                <button className="pb-2 border-b-2 border-green-600 font-medium">
                  Overview
                </button>
                <button className="pb-2 text-gray-500">
                  Description
                </button>
                <button className="pb-2 text-gray-500">
                  Details
                </button>
              </div>

              {/* DESCRIPTION */}
              <div>
                <h3 className="font-medium mb-2">Description</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  You've dreamt about it since you were young. You've always
                  wanted to be a pilot. Every time an aircraft flies over,
                  you stop what you're doing to gaze upwards. After all,
                  flying is freedom.
                </p>
              </div>

              {/* DETAILS GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4 text-sm">
                  <p className="text-gray-500">Course</p>
                  <p className="font-medium">Flying</p>
                </div>

                <div className="border rounded-lg p-4 text-sm">
                  <p className="text-gray-500">Flight School Name</p>
                  <p className="font-medium">Central Flying Academy</p>
                </div>

                <div className="border rounded-lg p-4 text-sm">
                  <p className="text-gray-500">City Location</p>
                  <p className="font-medium">Johannesburg</p>
                </div>

                <div className="border rounded-lg p-4 text-sm">
                  <p className="text-gray-500">Established</p>
                  <p className="font-medium">20/11/2022</p>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="border rounded-xl p-6 space-y-4">
              <h3 className="font-semibold text-sm">
                Schedule a Quick Call
              </h3>

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-md px-3 py-2 text-sm"
              />
              <input
                type="text"
                placeholder="Mobile Number"
                className="w-full border rounded-md px-3 py-2 text-sm"
              />
              <input
                type="email"
                placeholder="Email ID"
                className="w-full border rounded-md px-3 py-2 text-sm"
              />

              <button className="w-full bg-green-600 text-white py-2 rounded-md text-sm">
                Submit
              </button>

              <p className="text-xs text-gray-500">
                Boarding starts here! Your dream school is just a form away.
              </p>
            </div>
          </div>

          {/* SIMILAR SCHOOLS */}
          <div className="mt-14">
            <h2 className="text-lg font-semibold mb-6">
              Similar Flying Schools
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {similarSchools.map((s, i) => (
                <SchoolCard key={i} {...s} />
              ))}
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default SchoolDetails;
