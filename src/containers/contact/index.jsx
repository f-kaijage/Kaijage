import React from "react";
import { BsTelephoneFill } from "react-icons/bs"; // Unique icon for contact
import PageHeaderContent from "../../components/pageHeaderContent";
import { motion } from 'framer-motion'; // For animations
import './styles.scss';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      {/* Page Header */}
      <div className="contact__header">
        <PageHeaderContent
          headerText="Contact Me"
          icon={<BsTelephoneFill size={40} />}
        />
      </div>

      {/* Contact Content */}
      <div className="contact__content">
        {/* Animated Section Title */}
        <motion.h3
          className="contact__content__header-text"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Let's Talk
        </motion.h3>

        {/* Animated Contact Form */}
        <motion.div
          className="contact__content__form"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
        >
          <div className="contact__content__controls-wrapper">
            {/* Name Field */}
            <div className="inputGroup">
              <input name="name" className="inputField" type="text" required />
              <label className="inputLabel">Name</label>
            </div>

            {/* Email Field */}
            <div className="inputGroup">
              <input name="email" className="inputField" type="email" required />
              <label className="inputLabel">Email</label>
            </div>

            {/* Description Field */}
            <div className="inputGroup">
              <textarea name="description" className="inputField" required />
              <label className="inputLabel">Message</label>
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            className="submitButton"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
          >
            Submit
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

