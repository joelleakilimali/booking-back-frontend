import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContenaire">
        <span className="logo">spdxBooking</span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
