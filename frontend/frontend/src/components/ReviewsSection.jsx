import ReviewCard from "./ReviewCard";

const reviews = Array(8).fill({
  name: "Kiran Mehra",
  text:
    "IGIA provides excellent training with experienced instructors. The facilities are top-notch, and the training programs are well-structured. I highly recommend IGIA for anyone aspiring to be a pilot.",
});

const ReviewsSection = () => {
  return (
    <section className="bg-[#2b7a98] py-16">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-center text-white text-xl font-semibold mb-10">
          Student Reviews & Success Stories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {reviews.map((r, i) => (
            <ReviewCard key={i} {...r} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ReviewsSection;
