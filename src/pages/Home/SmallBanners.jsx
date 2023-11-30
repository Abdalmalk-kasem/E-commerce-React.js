import BannerBoxSmall from "/src/components/Other/Banners/BannerBoxSmall";
import classes from "./smallBanners.module.css";
import Section from "/src/components/UI/Section";

const SmallBanners = () => {
  return (
    <Section className={classes.banner3}>
      <BannerBoxSmall
        className={classes.box3}
        title="SEASONAL SALE"
        text="Winter collaction -50% Off"
      />
      <BannerBoxSmall
        className={classes.box4}
        title="NEW FOOTWEAR COLLACTION"
        text="Spring / Summer 2023"
      />
      <BannerBoxSmall
        className={classes.box5}
        title="T-SHIRTS"
        text="New Trendy Prints"
      />
    </Section>
  );
};

export default SmallBanners;
