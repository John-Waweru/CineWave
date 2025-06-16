import { FaHome, FaHeart, FaBookmark } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 shadow-md px-6 py-4 flex justify-between items-center w-screen">
      <div className="text-xl  font-bold text-red-600 hover:text-red-400 ease-in-out transition- hover:text-[22px] duration-300 cursor-pointer">Cine-Wave</div>
      <ul className="flex space-x-6 text-gray-700">
        <li className="text-[17px] hover:text-[20px] md:text-white hover:text-green-500 transition-all duration-200 size-[25px] cursor-pointer text-green-500 sm:text-inherit"><FaHome /></li>
        <li className="text-[17px] hover:text-[20px] md:text-white hover:text-red-500 transition-all duration-200 size-[25px] cursor-pointer text-red-500 sm:text-inherit"><FaHeart /></li>
        <li className="text-[17px] hover:text-[20px] md:text-white hover:text-blue-600 transition-all duration-200 size-[25px] cursor-pointer text-blue-600 sm:text-inherit"><FaBookmark /></li>
      </ul>
    </nav>
  );
}




