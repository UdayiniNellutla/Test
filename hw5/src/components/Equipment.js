import React from "react";
import styles from "./Equipment.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

import primaryTillage from "../assets/Primary-Tillage-Equipment.jpg";
import plantingSeeding from "../assets/Planting-and-Seeding-Equipment.jpg";
import irrigation from "../assets/Irrigation-Equipment.webp";
import fertilizing from "../assets/Fertilizing-and-Crop-Protection-Equipment.jpg";
import harvesting from "../assets/Harvesting-Equipment.jpeg";
import clapIcon from "../assets/Clap_Icon_Footer.png";

const Equipment = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>EQUIPMENT</h1>
        <p>
        Farming equipment is the cornerstone of modern agriculture, enhancing efficiency, precision, and productivity. From traditional hand tools to advanced machinery, agricultural equipment continues to evolve, revolutionizing the way we cultivate and harvest crops. With a focus on sustainability and technological innovation, the industry has embraced automation, GPS-guided machinery, and eco-friendly solutions to optimize farming practices. Leading agricultural brands and organizations invest in cutting-edge equipment to support farmers in maximizing yields while conserving resources. Publications and media outlets worldwide have highlighted the impact of modern farming equipment on economies, rural communities, and global food security, underscoring its vital role in agricultural advancements.
        </p>
      </section>

      {/* Equipment Section */}
      <section className={styles.crops}>
        <div className={styles.cropsContainer}>
          <div className={styles.column}>
            <img src={primaryTillage} alt="Primary-Tillage-Equipment" />
            <p>Primary-Tillage-Equipment</p>
            <img src={plantingSeeding} alt="Planting-and-Seeding-Equipment" />
            <p>Planting-and-Seeding-Equipment</p>
          </div>
          <div className={`${styles.column} ${styles.large}`}>
            <img src={irrigation} alt="Irrigation-Equipment" />
            <p>Irrigation-Equipment</p>
          </div>
          <div className={styles.column}>
            <img src={fertilizing} alt="Fertilizing-and-Crop-Protection-Equipment" />
            <p>Fertilizing-and-Crop-Protection-Equipment</p>
            <img src={harvesting} alt="Harvesting-Equipment" />
            <p>Harvesting-Equipment</p>
          </div>
        </div>
      </section>

      <hr className={styles.centeredLine} />

      {/* Appreciation Section */}
      <section className={styles.appreciation}>
        <img src={clapIcon} alt="Clap Icon" />
        <h3>You’ve made it this far!</h3>
        <h1>This must be what you’re looking for</h1>
      </section>

      <Footer />
    </div>
  );
};

export default Equipment;
