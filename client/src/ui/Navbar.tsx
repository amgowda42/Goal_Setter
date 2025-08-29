import { useSelector } from "react-redux";
import { selectCurrentUser } from "../features/auth/authSlice";
const Navbar = () => {
  const user = useSelector(selectCurrentUser);
  return <div className="bg-amber-200 h-[64px]">Navbar Hello {user?.name}</div>;
};

export default Navbar;
