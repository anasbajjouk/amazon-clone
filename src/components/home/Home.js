import React from "react";
import "./Home.css";
import Product from "../product/Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg?fbclid=IwAR174RmGrylsQavotX9rlg8bCw0gi987zt7p97FUgul28Vs5eqDt9SFcqq8"
          alt="wallpaper"
          className="home__image"
        />

        <div className="home__row">
          <Product
            id="1"
            title="The lean startup"
            price={29.99}
            image="https://cdn.knihcentrum.cz/42409447_lean-startup.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="The lean startup"
            price={29.99}
            image="https://cdn.knihcentrum.cz/42409447_lean-startup.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="3"
            title="The lean startup"
            price={29.99}
            image="https://cdn.knihcentrum.cz/42409447_lean-startup.jpg"
            rating={5}
          />
          <Product
            id="4"
            title="The lean startup"
            price={29.99}
            image="https://cdn.knihcentrum.cz/42409447_lean-startup.jpg"
            rating={5}
          />
          <Product
            id="5"
            title="The lean startup"
            price={29.99}
            image="https://cdn.knihcentrum.cz/42409447_lean-startup.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="6"
            title="The lean startup"
            price={29.99}
            image="https://cdn.knihcentrum.cz/42409447_lean-startup.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
