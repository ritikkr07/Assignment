import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import SchoolCard from "../components/SchoolCard";
import ReviewsSection from "../components/ReviewsSection";
import Footer from "../components/Footer";

const Home = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/schools")
      .then((res) => res.json())
      .then((data) => setSchools(data))
      .catch((err) => console.error("Error fetching schools:", err));
  }, []);

  return (
    <>
      <Hero />

      {/* CONTENT */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-14 space-y-20">

          {/* Top searched */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">
                Top searched flying schools
              </h2>

              <div className="flex items-center gap-4">
                <select className="border border-gray-200 rounded-md px-3 py-1.5 text-sm text-gray-600">
                  <option>Choose Country by ...</option>
                </select>

                <button className="text-sm text-green-600 font-medium">
                  View More &gt;&gt;
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {schools.map((s) => (
                <SchoolCard
                  key={s._id}
                  image={s.image || "/hero.png"}
                  name={s.name}
                  location={`${s.city || ""}, ${s.country || ""}`}
                  country={s.country || "India"}
                />
              ))}
            </div>
          </section>

          {/* Most popular */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">
                Most Popular Flying Schools
              </h2>

              <button className="text-sm text-green-600 font-medium">
                View More &gt;&gt;
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {schools.map((s) => (
                <SchoolCard
                  key={s._id + "-popular"}
                  image={s.image || "/hero.png"}
                  name={s.name}
                  location={`${s.city || ""}, ${s.country || ""}`}
                  country={s.country || "India"}
                />
              ))}
            </div>
          </section>

        </div>
      </div>

      <ReviewsSection />
      <Footer />
    </>
  );
};

export default Home;
