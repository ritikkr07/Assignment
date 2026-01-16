
export default function SearchBar() {
  return (
    <div className="flex w-full max-w-2xl bg-white rounded-full shadow-md overflow-hidden">
      <input
        type="text"
        placeholder="Search College"
        className="flex-1 px-5 py-3 outline-none text-sm"
      />
      <button className="bg-green-600 text-white px-6 text-sm font-medium">
        Search
      </button>
    </div>
  );
}
