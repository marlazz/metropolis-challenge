import SHIRT from "./assets/1.jpeg";
import COAT from "./assets/2.jpeg";
import HOODIE from "./assets/3.jpeg";
import { CgProfile } from "react-icons/cg";
import { BsBag } from "react-icons/bs";
import { BiMenu, BiX, BiHeart, BiSearch } from "react-icons/bi";
import "./App.css";
import { useState } from "react";

function App() {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setisMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app">
      <div className="main-container">
        <div className="top-bar">
          <nav className="nav">
            <span className="nav-item">shop</span>
            <span className="nav-item">collection</span>
            <span className="nav-item">about</span>
            <span className="nav-item">contact</span>
          </nav>
          <div className="menu-burger">
            {isMenuOpen ? (
              <BiX onClick={handleMenuToggle} />
            ) : (
              <BiMenu onClick={handleMenuToggle} />
            )}
            {isMenuOpen && (
              <ul className="menu-links">
                <li className="menu-link">shop</li>
                <li className="menu-link">collection</li>
                <li className="menu-link">about</li>
                <li className="menu-link">contact</li>
              </ul>
            )}
          </div>
          <div className="icons-container">
            <BiSearch className="icons"/>
            <CgProfile className="icons"/>
            <BiHeart className="icons"/>
            <BsBag className="icons"/>
          </div>
        </div>
        <div className="logo">
          <span className="logo__initials">c.p</span>
          <span className="logo__text">compagny</span>
        </div>
        <h1 className="title">New Collection</h1>
        <h2 className="subtitle">Metropolis series</h2>
        <div className="gallery">
          <div
            className="product-image"
            style={{ backgroundImage: `url(${SHIRT})` }}
          />
          <div
            className="product-image"
            style={{ backgroundImage: `url(${COAT})` }}
          />
          <div
            className="product-image"
            style={{ backgroundImage: `url(${HOODIE})` }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
