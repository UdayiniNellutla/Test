import styles from "./About.module.css";
import Founder from "../assets/founder.jpg";
import Sara from "../assets/sara.jpg";
import Expert from "../assets/expert.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
        <Navbar/>
      <section className={styles.hero}></section>

      <section className={styles.teamIntroduction}>
        <p className={styles.heading}>Joining Agriculture Guide Means Becoming Part of a Growing Community</p>
        <p className={styles.text}>
        Agriculture Guide is more than just a resource-it's a home for farmers, growers, and agricultural enthusiasts. We partner with individuals and communities to provide expert guidance, modern farming techniques, and the latest advancements in sustainable agriculture. Because, let’s face it, growing success starts with the right knowledge and support. Our platform was built by farmers for farmers. We understand the challenges of the industry, and no hardworking grower should struggle alone. That’s why we’re offering a seat at the table. Call it mentorship, innovation, sustainable practices, crop management, a support system, a trusted advisor, or simply a place to grow—we are something unique to each and every farmer we work with. And that’s exactly how we like it. In agriculture, success depends on planting the right seeds at the right time, with the right knowledge. We’re here to help you do just that-every step of the way.
        </p>
      </section>

      <h3 className={styles.meet}>Meet</h3>
      <h1 className={styles.teamTitle}>The Team</h1>

      <section className={styles.teamContainer}>
        <div className={styles.teamMember}>
          <img src={Founder} alt="John Doe" />
          <h2>John Doe</h2>
          <h4>Founder & Lead Agronomist</h4>
          <p>John has over 15 years of experience in sustainable farming and crop management, ensuring our guidance is backed by science.</p>
        </div>
        <div className={styles.teamMember}>
          <img src={Sara} alt="Sarah Smith" />
          <h2>Sarah Smith</h2>
          <h4>Soil Scientist</h4>
          <p>Sarah specializes in soil health and fertility, helping farmers maximize their yields while maintaining sustainability.</p>
        </div>
        <div className={styles.teamMember}>
          <img src={Expert} alt="James Brown" />
          <h2>James Brown</h2>
          <h4>Organic Farming Expert</h4>
          <p>With a passion for organic farming, James educates farmers on pesticide-free cultivation and eco-friendly agricultural practices.</p>
        </div>
      </section>

      <hr className={styles.centeredLine} />

      <div className={styles.testimonialHeading}>
        <h3>What folks are</h3>
        <h1>Saying About Us</h1>
      </div>

      <div className={styles.testimonialContainer}>
        <div className={styles.testimonialContent}>
          <h2>"Just wanted to personally thank Agriculture Guide for the incredible support. I implemented the sustainable farming techniques you shared, and my crop yield has improved significantly! 🌾🌱 Definitely wouldn’t have achieved this without your expert advice!"</h2>
          <h3>- Aarav Patel, Organic Farmer</h3>
        </div>
        <div className={styles.testimonialContent}>
          <h2>"We recently attended an agricultural conference, and thanks to the knowledge we gained from Agriculture Guide, we were well-prepared to present our modern irrigation techniques. The insights we received helped us secure a government grant for sustainable farming. Thank you for empowering farmers like us!"
</h2>
          <h3>- Meera & Rohan Sharma, AgriTech Entrepreneurs</h3>
        </div>
        <div className={styles.testimonialContent}>
          <h2>"Agriculture Guide didn’t just provide me with resources—they transformed the way I farm. From soil management tips to advanced crop rotation strategies, their guidance has helped me maximize efficiency while maintaining sustainability. This platform is a game-changer for farmers everywhere!"
</h2>
          <h3>- Daniel Johnson, Sustainable Agriculture Specialist</h3>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
