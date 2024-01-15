import BannerBox from "/src/components/Other/Banners/BannerBox.jsx";
import Section from "/src/components/UI/Section.jsx";
import classes from "./smBanners.module.css";

const SmBanners = () => {
  return (
    <Section className={classes.smBanner} sectionPadding>
      <BannerBox
        className={classes.box1}
        title="buy 1 get 1 free"
        paragraph="The best classic dress is on sale at cara"
        btnText="Learn More"
        header="carzy deals"
        imageUrl="/src/assests/banner/b17.webp"
        blurHash="LEODQR-^Z}I$s$fooJV=s}WIkDbC"
      />
      <BannerBox
        className={classes.box2}
        title="upcomming season"
        paragraph="The best classic dress is on sale at cara"
        btnText="Collaction"
        imageUrl="/src/assests/banner/b10.webp"
        blurHash="LHB|KTSiIUV@}?NxNHax$fNHS$bF"
      />
    </Section>
  );
};

export default SmBanners;
