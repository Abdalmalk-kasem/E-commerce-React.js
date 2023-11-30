import Features from "/src/components/Other/Features/Features";
import NewsLetters from "/src/components/Other/NewsLetters/NewsLetters";
import Landing from "./Landing";
import ProductsSection from "./ProductsSection";
import CallAction from "./CallAction";
import SmBanners from "./SmBanners";
import SmallBanners from "./smallBanners";
import LoadingSuspense from "../../components/UI/LoadingSuspense";

const HomePage = () => {
  return (
    <>
      <Landing />
      <Features />
      <LoadingSuspense>
        <ProductsSection
          start={0}
          end={8}
          title="Featured Products"
          paragraph="Summer Collection New Modren Design"
          className="section-header"
        />
      </LoadingSuspense>
      <CallAction />
      <LoadingSuspense>
        <ProductsSection
          start={8}
          end={16}
          title="New Arrivals"
          paragraph="Summer Collection New Modren Design"
          className="section-header"
        />
      </LoadingSuspense>
      <SmBanners />
      <SmallBanners />
      <NewsLetters />
    </>
  );
};

export default HomePage;
