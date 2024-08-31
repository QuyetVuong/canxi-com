import React, { useState } from 'react';
import LiedeHeader from '../../../assets/images/slide-header-1.jpg';

export function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div>
      <header className="header">
        <div className="menu-icon" onClick={toggleNav}>
        <svg id="hamburger" class="Header__toggle-svg" viewbox="0 0 60 40">
				<g stroke="#000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
					<path id="top-line" d="M10,10 L50,10 Z"></path>
					<path id="middle-line" d="M10,20 L50,20 Z"></path>
					<path id="bottom-line" d="M10,30 L50,30 Z"></path>
				</g>
			</svg>
        </div>
        <div className="logo">
          <img src="https://canxicom.vn/wp-content/uploads/2023/07/logo.svg" alt="Unical Logo" />
        </div>
        <nav className={isNavVisible ? "visible" : ""}>
          <a href="/">Trang Chủ</a>
          <a href="#products-section">Unical Canxi Cơm</a>
          <a href="#ladi-section">Blog</a>
          <a href="#services-section">Về Chúng Tôi</a>
        </nav>
        <button className="contact-button"><a  href="https://zalo.me/0979793995" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer" >LIÊN HỆ NGAY</a></button>
      </header>
      <div className="img-slide">
        <img src={LiedeHeader} alt="Banner" />
      </div>
    </div>
  );
}



