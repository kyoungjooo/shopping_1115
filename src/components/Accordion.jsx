import { useNavigate } from "react-router-dom";
import SideMenu from "./SideMenu";

export default function Accordion({ toggle }) {
  const menus = ["New In", "Home", "LittleThing", "Book"];
  const formatPath = (path) => path.toLowerCase().replace(/\s+/g, "-");
  const navigate = useNavigate();
  const handleUseNavigate = (path) => {
    navigate(`/${formatPath(path)}`);
  };

  return (
    <div className={toggle ? "accordion" : "accordion show"}>
      <ul>
        {menus.map((menu, i) => (
          <SideMenu
            text={menu}
            key={i}
            onClick={() => {
              handleUseNavigate();
            }}
          />
        ))}
      </ul>
    </div>
  );
}
