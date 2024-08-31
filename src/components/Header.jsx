import logo from "../assets/svg/logo.svg";
import { FaRegUserCircle } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-white drop-shadow-md flex justify-center h-20">
      <nav className="container flex justify-between">
        <a href="/" className="flex items-center">
          <img src={logo} alt="logo" className="w-20" />
          <strong>React Booking</strong>
        </a>
        <div className="flex items-center">
          <FaRegUserCircle />
          <a className="ml-4" href="/login">
            Entrar
          </a>
        </div>
      </nav>
    </header>
  );
}
