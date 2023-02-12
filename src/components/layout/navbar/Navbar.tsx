import { useNavigate } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import useWindowSize from "../../../hooks/useWindowSize";
import { navbarsMain } from "../../../data/navbar/navbars";
import NavDropdown from "./NavDropdown";
import MainLogo from "../MainLogo";

interface Props {
  title?: string;
}

const Navbar = ({ title }: Props) => {
  const { smallSize, isActive, toggleActive } = useWindowSize();
  const navigate = useNavigate();

  const onPage = (navId?: string) => {
    navigate(`/${navId}`);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between p-4 bg-white">
        <MainLogo />
        <h1>{title}</h1>

        {smallSize ? (
          <div onClick={toggleActive} className="cursor-pointer">
            {isActive ? <AiOutlineClose size={25} /> : <GiHamburgerMenu size={25} />}
          </div>
        ) : (
          <ul className="z-10 flex items-center space-x-6 text-kukmin-dark-brown font-semi-bold text-lg">
            {navbarsMain.map((item) => (
              <li key={item.id}>
                <span
                  onClick={() => onPage(item.id)}
                  className="block p-1 hover:bg-gray-100 rounded-lg transition-all cursor-pointer"
                >
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
      {<NavDropdown active={isActive} navigationItems={navbarsMain} />}
    </div>
  );
};

export default Navbar;
