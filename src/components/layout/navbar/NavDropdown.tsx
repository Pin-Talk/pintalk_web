import { Link } from "react-router-dom";
import { NavItem } from "../../../data/navbar/navbars";
import cls from "../../../utils/cls";

interface Props {
  active: boolean;
  navigationItems: NavItem[];
}

const NavDropdown = ({ active, navigationItems }: Props) => {
  return (
    <div
      className={cls(
        active ? "scale-y-100" : "scale-y-0",
        "absolute w-full top-14 left-0 origin-top-left transition-all shadow-md shadow-gray-200 z-20",
      )}
    >
      <ul className="bg-white">
        {navigationItems.map((item: any) => (
          <li key={item.id}>
            <Link to={`/${item.id}`}>
              <span className="block p-3 pl-8 hover:bg-gray-100 transition-all">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default NavDropdown;