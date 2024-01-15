import PageHeader from "/src/components/UI/PageHeader.jsx";

import classes from "./contact.module.css";
import contactHeaderImage from "/src/assests/about/banner.webp";
import Section from "/src/components/UI/Section.jsx";
import p1Image from "/src/assests/people/1.webp";
import p2Image from "/src/assests/people/2.webp";
import NewsLetters from "/src/components/Other/NewsLetters/NewsLetters.jsx";
import Member from "./Member.jsx";
import Input from "/src/components/UI/Input.jsx";
import Button from "/src/components/UI/Button.jsx";

const Contact = () => {
  return (
    <>
      <PageHeader
        title="#let's_talk"
        paragraph="LEAVE A MESSAGE, We love to hear from you!"
        image={contactHeaderImage}
        id="page-header"
        className={`${classes.about} d-flex-cc`}
      />
      <Section className={`${classes.getInTouch}  d-flex-cc`} sectionPadding>
        <div className={classes.getInContainer}>
          <span className={classes.heading5}>GET IN TOUCH</span>
          <h2>Visit one of our agency locations or contact us today</h2>
          <span className="heading-4">Head Office</span>
          <div className={classes.location}>
            <iconify-icon icon="circum:map" width="25px"></iconify-icon>
            <p>56 Glassford Street Glasgow GIIUL New York</p>
          </div>
          <div className={classes.mail}>
            <iconify-icon
              icon="fluent:mail-24-regular"
              width="25px"
            ></iconify-icon>
            <p>contact@example.com</p>
          </div>
          <div className={classes.phone}>
            <iconify-icon icon="mdi:phone" width="25px"></iconify-icon>
            <p>+962 7-1234-5678</p>
          </div>
          <div className={classes.workTime}>
            <iconify-icon icon="bi:clock" width="25px"></iconify-icon>
            <p>Monday to Saturday: 9:00am to 16:00pm</p>
          </div>
        </div>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d433868.6382358147!2d36.27729499980469!3d31.83591881954703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5fb85d7981af%3A0x631c30c0f8dc65e8!2z2LnZhdmR2KfZhg!5e0!3m2!1sar!2sjo!4v1695226806790!5m2!1sar!2sjo"
          style={{
            border: "0",
            width: "50%",
            height: "450px",
            minWidth: "250px",
            minHeight: "250px",
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Section>
      <Section className={`${classes.contactUs} d-flex-cc`} sectionPadding>
        <div className={classes.formContainer}>
          <span className={classes.heading5}>LEAVE A MESSAGE</span>
          <h2>We love to hear from you</h2>
          <form>
            <Input type="text" name="name" id="name" placeholder="Your Name" />
            <Input type="email" name="email" id="email" placeholder="E-mail" />
            <Input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
            />
            <textarea
              style={{ resize: "none" }}
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <Button type="submit" className="normal">
              Submit
            </Button>
          </form>
        </div>
        <div className={classes.teamMember}>
          <Member
            imageSrc={p1Image}
            imageHash="LNNcyk?HCTE2W=X9t7em00Rj9ZW;"
            alt="image for the Senior Marketing Manager"
            name="John Doe"
            title="Senior Marketing Manager"
            phone="+ 000 123 000 77 88"
            email="contact@example.com"
          />
          <Member
            imageSrc={p2Image}
            imageHash="LDK^y$~q3G0K%2ayRkof5RM_01xu"
            alt="image for the Senior Marketing Manager"
            name="William Smith"
            title="Senior Marketing Manager"
            phone="+ 000 123 000 77 88"
            email="contact@example.com"
          />
          <Member
            imageSrc={p1Image}
            imageHash="LNNcyk?HCTE2W=X9t7em00Rj9ZW;"
            alt="image for the Senior Marketing Manager"
            name="John Doe"
            title="Senior Marketing Manager"
            phone="+ 000 123 000 77 88"
            email="contact@example.com"
          />
        </div>
      </Section>
      <NewsLetters />
    </>
  );
};
export default Contact;
