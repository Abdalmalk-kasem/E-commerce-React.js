import Features from "/src/components/Other/Features/Features.jsx";
import NewsLetters from "/src/components/Other/NewsLetters/NewsLetters.jsx";
import Landing from "./Landing.jsx";
import ProductsSection from "./ProductsSection.jsx";
import CallAction from "./CallAction.jsx";
import SmBanners from "./SmBanners.jsx";
import SmallBanners from "./SmallBanners.jsx";
import LoadingSuspense from "/src/components/UI/LoadingSuspense.jsx";

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
