
import Logo from '../../images/foodadda.png';
const NavBar = () => {
  return (
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <img
        className="logo"
        src={Logo}
      />
      <NavBar />
    </div>
  );
};
export default Header;
