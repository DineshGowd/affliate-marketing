import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const NavBtn = ({ open, getOpen }) => {
  return (
    <div>
      {open ? (
        <ImCross
          size={20}
          onClick={() => {
            getOpen(!open);
          }}
        />
      ) : (
        <GiHamburgerMenu
          size={20}
          onClick={() => {
            getOpen(!open);
          }}
        />
      )}
    </div>
  );
};

export default NavBtn;
