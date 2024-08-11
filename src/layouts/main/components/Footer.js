import React from 'react';


export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-logo">
                    <img src="https://canxicom.vn/wp-content/uploads/2023/07/logo.svg" alt="Unical Logo" />
                    <p>100% nguyên liệu sản xuất bởi</p>
                    <p><strong>UNIVERSAL CALCIUM FOOD CO.,LD</strong></p>
                    <p>Chịu trách nhiệm sản phẩm:</p>
                    <p><strong>CÔNG TY TNHH DƯỢC PHẨM TÂN ĐỨC MINH</strong></p>

                </div>
                <div className="footer-contact">
                    <h3>Liên hệ</h3>
                    <p><i className="fas fa-envelope"></i> canxicomunical.nhatban@gmail.com</p>
                    <p><i className="fas fa-phone"></i> 0979.793.995</p>
                    <p><strong>ĐỊA CHỈ:</strong></p>
                    <p>Số 1 Quang Trung,TP.Vinh, Tỉnh Nghệ An</p>
                </div>
                <div className="footer-links">
                    <h3>Truy cập</h3>
                    <p><a href="/">Trang Chủ</a></p>
                    <p><a href="#products-section">Unical Canxi Cơm</a></p>
                    <p><a href="#ladi-section">Blog Sức Khỏe</a></p>
                    <p><a href="#services-section">Về Chúng Tôi</a></p>
                </div>
                <div className="footer-connect">
                    <h3>Kết Nối</h3>
                    <p><a href="https://www.tiktok.com/@canxicomnhatban.unical">Tiktok</a></p>
                    <p><a href="https://www.facebook.com/profile.php?id=61563069237427&mibextid=LQQJ4d">Facebook</a></p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Copyright© Unical | All Rights Reserved</p>
                <div className="payment-methods">
                    <img src="https://canxicom.vn/wp-content/uploads/2023/07/66524677a9d4c7ec9f503a79010dcc1f.png" alt="Visa" />
                </div>
            </div>
        </footer>
    );
}


