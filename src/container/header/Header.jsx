import React from "react";
import headerStyles from "./Header.module.css";
import { GoLocation, GoSearch } from "react-icons/go";
import { primeServiceIcons } from "../../data";

export const Header = () => {
  return (
    <div className={headerStyles.container}>
      <div className={headerStyles.title}>
        <h1>Services at the Doorstep</h1>
        <h5>We Focus on Customer Satisfaction</h5>
      </div>

      <div className={headerStyles.inputBoxes}>
        <div className={headerStyles.gradient}></div>
        <div
          class={`${headerStyles.input_box} ${headerStyles.location_input_box} `}
        >
          <GoLocation fill="#757575" size={27} />
          <input type="text" placeholder="Enter the City" />
        </div>
        <div
          className={`${headerStyles.input_box} ${headerStyles.service_input_box}`}
        >
          <GoSearch fill="#757575" size={27} />
          <input type="password" placeholder="Enter the Service" />
          <button className={headerStyles.header_search_button}>Serch</button>
        </div>
      </div>

      <div className={headerStyles.popular_services}>
        <h2>Our Prime Services</h2>
        <div className={headerStyles.popular_services_container}>
          {primeServiceIcons.map((item) => (
            <div className={headerStyles.popular_services_container_item}>
              <img src={item.img} key={item.id} alt={item.desc} />
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
