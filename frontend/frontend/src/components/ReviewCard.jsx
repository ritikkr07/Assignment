const ReviewCard = ({ name, text }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm text-sm text-gray-700">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        <span className="font-medium text-gray-800">
          {name}
        </span>
      </div>

      <p className="text-gray-600 leading-relaxed">
        “{text}”
      </p>
    </div>
  );
};

export default ReviewCard;
