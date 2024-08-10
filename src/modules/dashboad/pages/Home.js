import { LadiContainer } from "../../../layouts/main/components/LadiContainer";
import Products from "./Products";
import Services from "./Services";

export default function Home() {
  return (
    <>
      
      <div className="introduce">
        <div className="introduce-content">
          <div className="introduce-image">
            <img src="https://canxicom.vn/wp-content/uploads/2023/07/1fd054e10ac0ba3910835117db5ee578-1.png" alt="Family" />
          </div>
          <div className="introduce-text">
            <h2>Ông bà vui khỏe – con trẻ lớn cao</h2>
            <h1>Với Loại Canxi An Toàn Và Hiệu Quả</h1>
            <div className="canxi-info">
              <div className="canxi-icon">
                <img src="https://canxicom.vn/wp-content/uploads/2023/07/Group-8.png" alt="Canxi Icon" />
              </div>
              <div className="canxi-description">
                <h3>Canxi Vô Cơ Thông Thường</h3>
                <ul>
                  <li><span role="img" aria-label="cross">❌</span> Hàm Lượng Canxi Cao Nhưng Khó Hấp Thu, Dễ Gây Táo Bón, Nóng Trong...</li>
                  <li><span role="img" aria-label="cross">❌</span> Canxi Vô Cơ Không Những Khó Hấp Thu Mà Còn Khó Đào Thải, Là Một Trong Những Nguyên Nhân Gây Tăng Nặng Sỏi Thận, Sỏi Tiết Niệu,...</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="introduce-title">
          <div className="introduce-header">
            <img src="https://canxicom.vn/wp-content/uploads/2023/07/logo.svg" alt="Unical Logo" className="logo" />
            <h2>GIẢI PHÁP MỚI KHẮC PHỤC NHỮNG NHƯỢC ĐIỂM CỦA </h2>
            <h2>CANXI TRUYỀN THỐNG</h2>
          </div>
          <div className="benefits">
            <div className="benefit">
              <span className="checkmark">✔</span>
              <p>DỄ HẤP THU</p>
            </div>
            <div className="benefit">
              <span className="checkmark">✔</span>
              <p>KHÔNG LẮNG ĐỌNG</p>
            </div>
            <div className="benefit">
              <span className="checkmark">✔</span>
              <p>HÀM LƯỢNG CAO</p>
            </div>
          </div>
        </div>

      </div>
      <Products id="products-section"/>
      <LadiContainer></LadiContainer>
      <div className="introduceImg">
        <img width="1120" height="421" src="https://canxicom.vn/wp-content/uploads/2023/07/1a0ccf8299a001f5f7a120da64296138-jpg.webp" data-src="https://canxicom.vn/wp-content/uploads/2023/07/1a0ccf8299a001f5f7a120da64296138-jpg.webp" ></img>
      </div>
      <div className="container">
        <div className="exclusive-formula">
          <h2>Exclusive Formula</h2>
          <h3>CÔNG THỨC ĐỘC QUYỀN TỪ NHẬT BẢN</h3>
          <p>
            <strong>Unical</strong> Được Cấp Bằng Sáng Chế Tại 7 Quốc Gia Trên Thế Giới Nhờ
            Tìm Ra Cách Chiết Xuất <strong>Canxi Từ Vỏ Sò</strong> Có Khả Năng Hấp Thu Cao.
          </p>
          <p>
            Với Công Thức Sáng Chế Độc Quyền, Unical Là Loại Canxi Chịu Nhiệt
            Rất Tốt Và Là Canxi Duy Nhất Có Thể Dùng Trong Nấu Nướng.
          </p>
          <div className="flags">
            <img src="https://canxicom.vn/wp-content/uploads/2023/07/Group-2.png" alt="France" />
            <img src="https://canxicom.vn/wp-content/uploads/2023/07/Group-1.png" alt="UK" />
            <img src="https://canxicom.vn/wp-content/uploads/2023/07/Group-3.png" alt="Germany" />
            <img src="https://canxicom.vn/wp-content/uploads/2023/07/Group-4.png" alt="Japan" />
            <img src="https://canxicom.vn/wp-content/uploads/2023/07/Group-5.png" alt="China" />
            <img src="https://canxicom.vn/wp-content/uploads/2023/07/Group-6.png" alt="USA" />
          </div>
          <div className="buttons">
            <button className="learn-more">TÌM HIỂU THÊM</button>
            <div className="hotline">HOTLINE: 0979.793.995</div>
          </div>
        </div>
        <div className="map">
          <img src="https://canxicom.vn/wp-content/uploads/2023/07/a.png" alt="Japan Map" />
        </div>
      </div>
      <Services id="services-section"></Services>
    </>
  )
}