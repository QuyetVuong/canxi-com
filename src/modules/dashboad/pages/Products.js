import { useState } from "react";
import { ProductSlideshow } from "../../../layouts/main/components/ProductSlideshow"
export default function Products() {
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(320000);

    const handleQuantityChange = (event) => {
        const selectedQuantity = parseInt(event.target.value, 10);
        setQuantity(selectedQuantity);
        switch (selectedQuantity) {
            case 1:
                setPrice(320000);
                break;
            case 5:
                setPrice(1600000);
                break;
            case 10:
                setPrice(3200000);
                break;
            default:
                setPrice(320000);
                break;
        }
    };
    
    return (
        <>
            <div  id="products-section" className="product-page">
                <div className="product-content">
                    <ProductSlideshow />
                    <div className="product-details">
                        <ul className="product-features">
                            <li>Không tác dụng phụ</li>
                            <li>Không gây nóng trong, táo bón</li>
                            <li>Không gây lắng cặn trong thành ruột</li>
                            <li>Hấp thu lên tới 90% hàm lượng canxi vào trong cơ thể có trong sản phẩm</li>
                            <li><strong>Canxi Hữu Cơ</strong> – Nguồn gốc tự nhiên 100%</li>
                            <li>Canxi Cơm Nhật Bản thuộc đề án 818 Bộ Y Tế</li>
                            <li>Được cấp bằng sáng chế tại 7 quốc gia phát triển hàng đầu</li>
                            <li><em>Sản phẩm không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh</em></li>
                        </ul>
                        <div className="product-header">
                            <h1>Canxi Cơm Nhật Bản – Unical For Rice (Hộp 20 Gói)</h1>
                            <p className="price">{price.toLocaleString('vi-VN')}đ </p>
                            {/* Dropdown để chọn số lượng hộp */}
                            <label htmlFor="quantity">Chọn số lượng:</label>
                            <select id="quantity" value={quantity} onChange={handleQuantityChange}>
                                <option value={1}>1 Hộp</option>
                                <option value={5}>5 Hộp + 1</option>
                                <option value={10}>10 Hộp + 2</option>
                            </select>
                            <button className="order-button"> <a href="https://www.facebook.com/profile.php?id=61563069237427&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">ĐẶT HÀNG NGAY</a></button>
                            <p className="hotline"><a href="tel:0979793995">HOTLINE: 0979.793.995</a></p>
                        </div>
                        <h3>Mua hàng chính hãng tại</h3>
                        <div className="shopping-links">
                            <a href="https://www.tiktok.com/@canxicomnhatban.unical" target="_blank" rel="noopener noreferrer">Tiktok</a>
                            <a href="https://zalo.me/0979793995" target="_blank" rel="noopener noreferrer"><img height={25} src="https://img.icons8.com/?size=100&id=0m71tmRjlxEe&format=png&color=000000" alt="Zalo" />Zalo</a>
                            <a href="https://www.facebook.com/profile.php?id=61563069237427&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">Facebook</a>
                            <a href="tel:0979793995">
                                <img height={20} src="https://img.icons8.com/?size=100&id=9659&format=png&color=228BE6" alt="Hotline" /> Hotline
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}