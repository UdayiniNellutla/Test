import React from "react";
import styles from "./CropsForming.module.css"; // Import modular CSS
import Navbar from "./Navbar";
import Footer from "./Footer";

import foodCrops from "../assets/food-crops.jpg";
import cashCrops from "../assets/cash_crops.webp";
import horticulturalCrops from "../assets/Horticultural_crops.jpg";
import forageCrops from "../assets/Forage_crops.jpg";
import industrialCrops from "../assets/Industrial_crops.webp";
import subsistenceFarming from "../assets/Subsistence-Farming.webp";
import commercialFarming from "../assets/Commercial-Farming.png";
import shiftingCultivation from "../assets/Shifting-Cultivation.webp";
import intensiveFarming from "../assets/Intensive-Farming.webp";
import extensiveFarming from "../assets/Extensive-Farming.jpg";
import organicFarming from "../assets/Organic-Farming.jpg";
import precisionFarming from "../assets/Precision-Farming.jpg";
import aquaponicsHydroponics from "../assets/Aquaponics-Hydroponics.png";

const CropsForming = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>CROPS & FARMING</h1>
        <p>
          Crops and farming are the backbone of agriculture, requiring dedication, innovation, and resilience. From traditional practices to modern advancements, the industry continues to evolve, shaping the way we grow and sustain life. With a focus on sustainability, efficiency, and quality, farming plays a crucial role in feeding the world while preserving natural resources.
        </p>
      </section>

      {/* Crops Section */}
      <section className={styles.crops}>
        <div className={styles.cropsContainer}>
          <div className={styles.column}>
            <img src={foodCrops} alt="Food Crops" />
            <p>FOOD-CROPS</p>
            <img src={cashCrops} alt="Cash Crops" />
            <p>CASH-CROPS</p>
          </div>
          <div className={`${styles.column} ${styles.large}`}>
            <img src={horticulturalCrops} alt="Horticultural Crops" />
            <p>HORTICULTURAL-CROPS</p>
          </div>
          <div className={styles.column}>
            <img src={forageCrops} alt="Forage Crops" />
            <p>FORAGE-CROPS</p>
            <img src={industrialCrops} alt="Industrial Crops" />
            <p>INDUSTRIAL-CROPS</p>
          </div>
        </div>
      </section>

      <hr className={styles.centeredLine} />

      {/* Farming Section */}
      <div className={styles.title}>
        <h1>FARMING</h1>
      </div>
      <section className={styles.farming}>
        <div className={styles.farmingContainer}>
          <div className={styles.farm}>
            <img src={subsistenceFarming} alt="Subsistence Farming" />
            <p>Subsistence Farming</p>
            <img src={commercialFarming} alt="Commercial Farming" />
            <p>Commercial Farming</p>
          </div>
          <div className={styles.farm}>
            <img src={shiftingCultivation} alt="Shifting Cultivation" />
            <p>Shifting Cultivation</p>
            <img src={intensiveFarming} alt="Intensive Farming" />
            <p>Intensive Farming</p>
            <img src={extensiveFarming} alt="Extensive Farming" />
            <p>Extensive Farming</p>
          </div>
          <div className={styles.farm}>
            <img src={organicFarming} alt="Organic Farming" />
            <p>Organic Farming</p>
            <img src={precisionFarming} alt="Precision Farming" />
            <p>Precision Farming</p>
            <img src={aquaponicsHydroponics} alt="Aquaponics & Hydroponics" />
            <p>Aquaponics & Hydroponics</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CropsForming;
