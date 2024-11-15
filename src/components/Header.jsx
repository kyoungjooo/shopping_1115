import { useState } from "react";
import Accordion from "./Accordion";
export default function Header() {
  const [toggle, setToggle] = useState(false);
  const toggleAccordion = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="header">
        <div className="header-inner">
          <button type="button" onClick={toggleAccordion}>
            메뉴
          </button>
          <h1>logo</h1>
          <div className="header-inner-left">
            <ul>
              KR
              <li>EN</li>
              <li>JP</li>
            </ul>
            <a href="#none">Sign In</a>
            <button type="button">search</button>
            <button type="button">wish</button>
            <button type="button">cart</button>
          </div>
        </div>
      </div>
      <Accordion toggle={toggle} toggleAccordion={toggleAccordion} />
    </>
  );
}
