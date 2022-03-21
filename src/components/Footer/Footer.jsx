import React from "react";
import facebook from "../../media/icons/facebook.png"
import instagram from "../../media/icons/instagram.png"
import twitter from "../../media/icons/twitter.png"
import styles from "./Footer.module.css"


const container = {
  backgroundColor: "darkblue",
  color: "white",
};

const title = {
  textAlign: "center",
  fontSize: "30px",
};

const Footer = () => {
  return (
    <div>
      <footer
        
        className="w3-container w3-padding-32 w3-margin-top my-container"
      >
        <p style={title}>Copyright 2022 Bishkek.</p>
        <ul className={styles.socialContainer}>
          <li><img src={facebook} alt="" /></li>
          <li><img src={instagram} alt="" /></li>
          <li><img src={twitter} alt="" /></li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
