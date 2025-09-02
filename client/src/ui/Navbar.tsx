import { useState } from "react";
import { useSelector } from "react-redux";
import { CircleUser } from "lucide-react";
import { selectCurrentUser } from "../features/auth/authSlice";

const Navbar = () => {
  const user = useSelector(selectCurrentUser);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="h-[64px] border-b-3 border-black flex justify-between px-3 items-center">
      <h2 className="text-lg text-blue-600 font-semibold">
        Hello <span className="text-xl text-gray-700">{user?.name}</span>
      </h2>

      <div className="relative">
        <CircleUser
          className="w-10 h-10 text-gray-600 cursor-pointer"
          onClick={() => setMenuOpen((prev) => !prev)}
        />
        {menuOpen && (
          <div className="absolute right-0 mt-1 w-40 bg-white rounded-lg shadow-lg border-2 border-blue-600 p-1 z-10">
            <ul className="text-gray-700 font-medium">
              <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer">
                My Profile
              </li>
              <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer">
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
