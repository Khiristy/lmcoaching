import "./Menu.scss";

const Menu = () => {
  return (
    <div className="menu">
      <input
        type="checkbox"
        role="button"
        aria-label="Display the menu"
        className="menu_btn"
      ></input>
    </div>
  );
};

export default Menu;
