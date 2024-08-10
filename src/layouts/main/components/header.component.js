import React from 'react';

export function Header() {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <img src="https://canxicom.vn/wp-content/uploads/2023/07/logo.svg" alt="Unical Logo" />
        </div>
        <nav>
          <a href="/">Trang Chủ</a>
          <a href="#products-section">Unical Canxi Cơm</a>
          <a href="#services-section">Về Chúng Tôi</a>
        </nav>
        <button className="contact-button"><a  href="https://www.facebook.com/profile.php?id=61563069237427&mibextid=LQQJ4d" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer" >LIÊN HỆ NGAY</a></button>
      </header>
      <div className="img-slide">
        <img src="https://canxicom.vn/wp-content/uploads/2023/07/Banner-Homepage-1536x692.png" alt="Banner" />
      </div>
    </div>
  );
}


