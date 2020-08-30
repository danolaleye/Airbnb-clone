import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=500"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
        />

        <Card
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Unique stays"
          description="Spaces that are more than just a place to sleep."
        />

        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=700"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family."
        />
      </div>

      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/7e267c09-0cff-4f05-a68f-860d867f4244.jpg?aki_policy=large"
          title="Spacious Suite v/View - Pool + Parking"
          description="A place that sparks creativity, fuels the imagination, and welcomes reflection and relaxation. "
          price="$70 CAD/night"
        />

        <Card
          src="https://a0.muscache.com/im/pictures/af2dd7b2-763a-43ba-bc4c-0d20de34ace8.jpg?aki_policy=large"
          title="Monthly shared condo in heart of downtown"
          description="Private room it’s a beautiful cozy place."
          price="$45 CAD/night"
        />

        <Card
          src="https://a0.muscache.com/im/pictures/c30795f8-db9c-4e32-996a-6c97c6c425c1.jpg?aki_policy=large"
          title="Pause Studio / Bright modern boutique Studio"
          description="Spacious, bright, designer apartment with private outdoor space, gas bbq."
          price="$30 CAD/night"
        />
      </div>
    </div>
  );
}

export default Home;
