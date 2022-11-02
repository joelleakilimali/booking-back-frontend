import { Card, Checkbox } from "semantic-ui-react";
import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailComponent from "../../components/mailComponent/MailComponent";
import Navbar from "../../components/navBar/Navbar";
import PropertyList from "../../components/propertylist/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type </h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love </h1>
        <FeaturedProperties />
        <MailComponent />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
