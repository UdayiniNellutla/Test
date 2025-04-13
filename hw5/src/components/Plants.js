import React, { useEffect, useState } from "react";
import styles from "./Plants.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import clapIcon from "../assets/Clap_Icon_Footer.png";

const Plants = () => {
  const [plants, setPlants] = useState([]);
  const apiKey = "sk-M0jg67c153cc7be258884";
  const apiUrl = `https://perenual.com/api/v2/species-list?key=${apiKey}`;

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();
        setPlants(data.data.slice(0, 6)); // Get first 6 plants
      } catch (error) {
        console.error("Error fetching plant data:", error);
      }
    };

    fetchPlants();
  }, []);

  const handleDragStart = (event, index) => {
    event.dataTransfer.setData("text/plain", index.toString());
  };

  const handleDrop = (event, targetIndex) => {
    event.preventDefault();
    const draggedIndex = parseInt(event.dataTransfer.getData("text/plain"), 10);
    
    setPlants((prevPlants) => {
      const updatedPlants = [...prevPlants];
      [updatedPlants[draggedIndex], updatedPlants[targetIndex]] = [updatedPlants[targetIndex], updatedPlants[draggedIndex]];
      return updatedPlants;
    });
  };

  return (
    <div>
        <Navbar/>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>PLANTS</h1>
        <p>
        Farming equipment is the cornerstone of modern agriculture, enhancing efficiency, precision, and productivity. From traditional hand tools to advanced machinery, agricultural equipment continues to evolve, revolutionizing the way we cultivate and harvest crops. With a focus on sustainability and technological innovation, the industry has embraced automation, GPS-guided machinery, and eco-friendly solutions to optimize farming practices. Leading agricultural brands and organizations invest in cutting-edge equipment to support farmers in maximizing yields while conserving resources. Publications and media outlets worldwide have highlighted the impact of modern farming equipment on economies, rural communities, and global food security, underscoring its vital role in agricultural advancements.
        </p>
      </section>

      {/* Plants Grid */}
      <section className={styles.plants}>
        <div className={styles.plantsContainer}>
          {[0, 1, 2].map((col) => (
            <div key={col} className={styles.column}>
              {plants
                .filter((_, index) => index % 3 === col)
                .map((plant, index) => (
                  <div
                    key={plant.id}
                    draggable
                    onDragStart={(event) => handleDragStart(event, index)}
                    onDrop={(event) => handleDrop(event, index)}
                    onDragOver={(event) => event.preventDefault()}
                  >
                    <img
                      src={plant.default_image?.original_url || "https://via.placeholder.com/150"}
                      alt={plant.common_name || "Unknown Plant"}
                      className={styles.draggable}
                    />
                    <p>{plant.common_name || "Unknown Plant"}</p>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </section>

      {/* Line Separator */}
      <hr className={styles.centeredLine} />

      {/* Appreciation Section */}
      <section className={styles.appreciation}>
        <img src={clapIcon} alt="Clap Icon" />
        <h3>You’ve made it this far!</h3>
        <h1>This must be what you’re looking for</h1>
      </section>
      <Footer/>
    </div>

  );
};

export default Plants;
