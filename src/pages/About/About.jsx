import Image from "/src/components/UI/Image.jsx";
import NewsLetters from "/src/components/Other/NewsLetters/NewsLetters.jsx";

import aboutHeaderImage from "/src/assests/about/banner.webp";
import aboutImage from "/src/assests/about/a6.webp";
import aboutVideo from "/src/assests/about/1.mp4";
import Section from "/src/components/UI/Section.jsx";
import classes from "./about.module.css";
import Features from "/src/components/Other/Features/Features.jsx";
import PageHeader from "/src/components/UI/PageHeader.jsx";

const About = () => {
  return (
    <>
      <PageHeader
        title="#KnowUs"
        paragraph="Lorem ipsum dolor sit amet, consectetur"
        image={aboutHeaderImage}
        id="page-header"
        className="d-flex-cc"
        alt="background Banner"
      />
      <Section className={classes.aboutHead} sectionPadding>
        <Image
          imageSrc={aboutImage}
          imageHash="LKO;0*i_XVtS?bxaROWBu6Ner;ng"
          width="640px"
          height="480px"
          alt="Image for our shop"
        />
        <div>
          <h2>Who We Are?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className={classes.animat}>
            <p className={classes.animation}>
              Create stunning images with as much or as little control.as.you
              like thanks to a choice of Basic and Creative modes.
            </p>
          </div>
        </div>
      </Section>
      <Section className={`${classes.aboutVideo} d-flex-cc`} sectionPadding>
        <h1>
          Download Our <a href="#">App</a>
        </h1>
        <div className={classes.video}>
          <video autoPlay muted loop>
            <source src={aboutVideo} type="video/mp4" />
            <track
              src="captions_en.vtt"
              kind="captions"
              srcLang="en"
              label="english_captions"
            />
          </video>
        </div>
      </Section>
      <Features />
      <NewsLetters />
    </>
  );
};

export default About;
