import "../styles/Accueil.css";
import Banner from "./Banner";

const Accueil = ({ siteData }) => {
  const sTilte = siteData.siteTitle;
  const sSubTitle = `${siteData.author.fullName} - ${siteData.author.authorInfos.authorFunction}`;
  const sCaption = siteData.siteCaption;

  return (
    <>
      <Banner title={sTilte} subTitle={sSubTitle} caption={sCaption} />
    </>
  );
};

export default Accueil;
