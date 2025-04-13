import React, { useState } from "react";
import styles from "./Contact.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  const [fileName, setFileName] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      setFileName(files[0].name);
    }
  };

  const handleFileChange = (event) => {
    setFileName(event.target.files[0]?.name || "");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          fileName: fileName || null
        }),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      const data = await response.json();
      setSubmitStatus({ success: true, message: "Message sent successfully!" });
      // Reset form
      setFormData({ name: "", email: "", message: "" });
      setFileName("");
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ success: false, message: "Failed to send message. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className={styles.touch}>
        <div className={styles.touchHead}>
          <h3>Get in touch</h3>
          <h1>We'd love to work with you!</h1>
        </div>
        <div className={styles.touchText}>
          <h2>If you're interested in learning more about what we do, send us a note!</h2>
        </div>
      </div>

      <div className={styles.form}>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          {submitStatus && (
            <div className={`${styles.alert} ${submitStatus.success ? styles.success : styles.error}`}>
              {submitStatus.message}
            </div>
          )}
          
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleInputChange}
              required 
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleInputChange}
              required 
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="4"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className={styles.formGroup}>
            <label>Attach a file</label>
            <div 
              className={styles.dropZone}
              onClick={() => document.getElementById("file-input").click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
            >
              Drag & Drop files here or click to upload
            </div>
            <input 
              type="file" 
              id="file-input" 
              hidden 
              onChange={handleFileChange}
            />
            <p>{fileName}</p>
          </div>

          <button 
            className={styles.submitButton} 
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;