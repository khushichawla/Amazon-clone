import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__img" src="https://imgur.com/LvGybHI.jpg" />

        <div className="home__row">
          <Product
            id="1"
            title="The Kite Runner Paperback by Khaled Hosseini"
            price={19.99}
            image="https://imgur.com/bDjODQz.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="IMNISHNAY Silicone Cloud Touch Lamp for Baby Night Light for Kids Gifts for Teen Girls Boys Women Lamp Cute Aesthetic Baby Room Decor Gifts for Girlfreinds Item with 7 multicolur (Cloud)"
            price={12.99}
            image="https://imgur.com/qqGWLp2.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="3"
            title="Cat Keycap Esc keycaps DIY Personality Custom Cartoon Anime Keycap Replacement Bottom Backlit Keycaps Gift for Mechanical Keyboard KeyCap OEM R4 Height (Transparent) (White), 3.5x3.5x2cm"
            price={27.99}
            image="https://imgur.com/CX47duO.jpg"
            rating={4}
          />
          <Product
            id="4"
            title="Engage L amante Intensity Eau De Parfum for Women, Woody Fragrance Scent, Premium Perfume for Women, Long Lasting and Skin Friendly, 100ml"
            price={34.99}
            image="https://imgur.com/bD5mZD6.jpg"
            rating={2}
          />
          <Product
            id="5"
            title="VHYHCY Cute Stuffed Boba Plush Bubble Tea Plushie Pillow Milk Tea Cup Pillow Food Plush, Soft Kawaii Hugging Milk Tea Plush Toy for Kids(Closed Eyes, 9.4 inch)"
            price={8.99}
            image="https://imgur.com/8SBkfoG.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="6"
            title="LG 108 cm (43 inches) Wondertainment Series 4K Ultra HD Smart LED TV 43UR7500PSC (Dark Iron Gray)"
            price={495.99}
            image="https://imgur.com/Pw7Y7bU.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
