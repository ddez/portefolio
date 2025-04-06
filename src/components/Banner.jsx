import Image from 'react-bootstrap/Image';
import mainBanner from '/img/banner_1920.jpg';
const Banner = () => {
    return (
        <>
        {/* componsant banière */}
        <div className="banner">
            <row></row>
            <row></row>
            <row></row>
        </div>
        <Image src={mainBanner} fluid />;
        </>
    );
}

export default Banner;