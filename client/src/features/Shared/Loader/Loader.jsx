import "./Loader.scss";
import loaderImg from "/media/loader_img.png";
import sliderTop from "/media/slide_loader_top.png";
import sliderBot from "/media/slide_loader_bot.png";
import mainLogo from "/media/main_logo.png";

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader_leftside loaded">
        <img src={mainLogo} alt="" className="loader_leftside-icon" />
        <h1 className="loader_leftside-title">LM Coaching</h1>
      </div>
      <img src={loaderImg} alt="" className="loader_img loaded" />
      <img src={sliderTop} alt="" className="loader_slidertop loaded" />
      <img src={sliderBot} alt="" className="loader_sliderbot loaded" />
    </div>
  );
};

export default Loader;
