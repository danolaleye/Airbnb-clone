import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays • 1st September to 10 September • 2 guests</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of Place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://a0.muscache.com/im/pictures/9c279082-8f25-43b5-a604-c6a1f239142e.jpg?aki_policy=large"
        location="Toronto Home with a View"
        title="Entire condominium hosted by John Doe"
        description="Welcome to downtown Toronto! My new 1 bedroom, 1 bathroom condo is located within a walking distance from the Financial District, the historic St. Lawrence Market."
        star={4.75}
        price="$CAD 45/night"
        total="$CAD 450 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/b9aa0f7c-0f98-457a-bf0a-0b1e86a4e7e0.jpg?aki_policy=large"
        location="Toronto, Ontario, Canada"
        title="Covid-19 Safe Getaway with 2 large terraces"
        description="1 Bedroom + 2 Pull out sofa beds + 1 Bathroom + 2 Terraces + Gym. This award winning Core Architects executive soft loft has been professionally interior decorated to perfection in one of Toronto's most popular areas at King/Bathurst."
        star={4.68}
        price="$CAD 30/night"
        total="$CAD 300 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/185e6c5a-c439-4dae-83a2-2c6fd735a412.jpg?aki_policy=large"
        location="Downtown Ottawa"
        title="*Loft* Plant Paradise: A Vintage Old Town Dream"
        description="Welcome to this incredibly private vintage artist studio loft in a century-old building. Filled with sunshine and plants, it's inviting and cozy year-round. A gem in the city, one of the last of its kind. 60+ plants and succulents adorn the space with life."
        star={4.9}
        price="$CAD 50/night"
        total="$CAD 500 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/2b7f5b2b-fc04-4cb6-84df-40b1a2da253c.jpg?aki_policy=large"
        location="Toronto, Ontario, Canada"
        title="Ent. District / Waterfront - 1 BDRM + 1 BA+Sofabed"
        description="I hope you'll feel at home at my condo located where the entertainment district, waterfront, and financial district merge. My place is steps away from the city's most popular attractions and features a large balcony."
        star={4.81}
        price="$CAD 60/night"
        total="$CAD 600 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/c1328175-4fdb-43ff-822a-60e0641c889c.jpg?aki_policy=large"
        location="Downtown Toronto"
        title="Corner unit penthouse heart of downtown Toronto"
        description="Brand new, never lived in before, professionally decorated corner penthouse in the heart of downtown Toronto and financial district!"
        star={4.84}
        price="$CAD 37/night"
        total="$CAD 370 total"
      />
    </div>
  );
}

export default SearchPage;
