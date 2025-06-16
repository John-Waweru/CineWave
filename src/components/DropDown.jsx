import { useState } from "react";

export default function Dropdown({ onSelect }) {
  const [selected, setSelected] = useState("trending");

  const options = [
    { value: "trending", label: "Trending" },
    { value: "in_theatres", label: "In Theatres" },
    { value: "popular", label: "Popular" },
    { value: "top_rated", label: "Top Rated" },
    { value: "upcoming", label: "Upcoming" },
  ];

  const handleChange = (e) => {
    const value = e.target.value;
    setSelected(value);
    if (onSelect) {
      onSelect(value); 
    }
  };

  return (
    <div className="inline-block relative w-48">
      <select
        value={selected}
        onChange={handleChange}
        className="block appearance-none w-full bg-transparent border border-purple-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        {options.map(({ value, label }) => (
          <option className="bg-gray-900 text-white" key={value} value={value}>
            {label}
          </option>
        ))}
      </select>

      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
        <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
          <path d="M5.516 7.548l4.484 4.484 4.484-4.484L15.484 9l-5 5-5-5z" />
        </svg>
      </div>
    </div>
  );
}
