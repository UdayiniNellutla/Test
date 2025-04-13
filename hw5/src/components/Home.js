import React from "react";
import Navbar from "./Navbar";
import styles from "./Home.module.css"; // Import modular CSS
import heroImage from "../assets/hero.jpg";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
        <div className={styles.heroText}>
          <h1>Welcome to Agriculture Guide</h1>
          <p>
            Learn about different farming techniques, crop cultivation, and modern agricultural advancements.
          </p>
        </div>
      </section>

      {/* Landing Banner Section */}
      <section className={styles.landingBanner}>
        <h2>
          <span className={styles.blackText}>Growing Knowledge Locally. Cultivating Impact Globally.</span>
        </h2>
        <h3>
          <span className={styles.goldenText}>Your Trusted Guide to Modern Farming and Sustainable Agriculture.</span>
        </h3>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
