import Button from "./Button";
import "./Main.css";
import mainImageDesktop from "../images/image-hero-desktop.png";
import mainImageMobile from "../images/image-hero-mobile.png";
import databiz from "../images/client-databiz.svg";
import audiophile from "../images/client-audiophile.svg";
import meet from "../images/client-meet.svg";
import maker from "../images/client-maker.svg";

const Main = () => {
	return (
		<main className="main-grid">
			<h1 className="main__heading"></h1>
			<p className="main__description">
				Get your team in sync, no matter your location. Streamline processes,
				create team rituals, and watch productivity soar.
			</p>
			<div className="learn-btn">
				<Button label="Learn more" additionalClass="btn-black" />
			</div>
			<div className="logos flex">
				<img src={databiz} alt="" />
				<img src={audiophile} alt="" />
				<img src={meet} alt="" />
				<img src={maker} alt="" />
			</div>
			<picture className="main-image">
				<source srcSet={mainImageDesktop} media="(min-width: 1051px)" />
				<img src={mainImageMobile} alt="" />
			</picture>
		</main>
	);
};

export default Main;
