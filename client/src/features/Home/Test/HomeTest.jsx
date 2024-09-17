import "./HomeTest.scss"
import mainLogo from "/media/main_logo.png"
import imgTest from "/media/homeHero/hero_img.webp"

const HomeTest = () => {
    return (
      <div className="homeTest">
        <div className="homeTest_header">
            <img src={mainLogo} alt="" className="homeTest_header-logo" />
            <nav className="homeTest_header-nav">
                <button></button>
                <button></button>
                <button></button>
                <button></button>
            </nav>
        </div>
        <div className="homeTest_Hero">
            <img src={imgTest} alt="" />
        </div>
      </div>
    );
  };
  
  export default HomeTest;
  