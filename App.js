import React from "react";
import ReactDOM from "react-dom/client";
import restaurentlist from "./data";
const cloudinaryUrl = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/';
const Header = () => {
  return (
    <div className="header">
      <img
        className="logo"
        src="https://content.jdmagicbox.com/comp/jabalpur/x1/9999px761.x761.170314031501.t9x1/catalogue/efoodadda-cherital-jabalpur-cake-delivery-services-801nr3b.jpg"
      />
      <NavBar />
    </div>
  );
};

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

const RestauentCard = ({
  name,
  area,
  cloudinaryImageId,
  cuisines,
  avgRating,
}) => {
  console.log(name, area, cloudinaryImageId, cuisines, avgRating);
  return (
    <div className="card">
      <img
        className="card-image"
        src={cloudinaryUrl+cloudinaryImageId}
      />
      <h4 className="card-name">{name}</h4>
      <h4 className="cuisines">{cuisines.join(", ")}</h4>
      <h4 className="rating">{avgRating}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-section">
      <div className="search-area"></div>
      <div className="restaurentlist">
        {restaurentlist.map((restaurent) => {
          return <RestauentCard {...restaurent.data} key={restaurent.data.id}/>;
        })}
      </div>
    </div>
  );
};

const Footer = () => {
  return <div>Footer</div>;
};

// 2nd Way of Functional component
const RcomponetAnotherWay = () => (
  <div>
    <h2>This is from RcomponetAnotherWay</h2>
  </div>
);

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
