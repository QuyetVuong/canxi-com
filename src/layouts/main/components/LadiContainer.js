import React from 'react';
import img1 from '../../../assets/images/ladi-container1.jpg';
import img2 from '../../../assets/images/ladi-container2.jpg';
import img3 from '../../../assets/images/ladi-container3.png';
import img4 from '../../../assets/images/ladi-container4.jpg';
import img5 from '../../../assets/images/ladi-container5.jpg';

export function LadiContainer   () {
  return (
    <div id="ladi-section" className="ladi-container">
            <h1>Những dấu hiệu cơ thể thiếu canxi</h1>
            <div className="ladi-grid">
                <div className="ladi-item">
                    <p>Theo thống kê, số người mắc các bệnh về xương khớp ở Việt Nam đang ngày càng gia tăng và có xu hướng trẻ hoá.
                    Tổ chức Y tế Thế giới (WHO) coi thập niên 2011 - 2020 là “Thập niên xương và khớp”. Theo đó, WHO cũng xếp Việt Nam vào nhóm các nước có tỷ lệ dân số mắc bệnh xương khớp cao nhất thế giới.</p>
                    <img src={img1} alt="Loãng xương" />
                    <span>Việt Nam là nước có tỷ lệ dân số mắc bệnh xương khớp cao nhất thế giới</span>
                </div>
                <div className="ladi-item">
                    <p>Đặc biệt Việt Nam đứng thứ 4 trong top 10 nước có chiều cao trung bình thấp nhất thế giới, chỉ hơn được Indonesia, Bolivia và Philippines. Thậm chí chiều cao của người việt không có sự tăng trưởng nào rõ rệt trong 10 năm từ năm 2007 đến năm 2017 người Việt Nam chỉ tăng thêm được 1cm chiều cao.</p>
                    <img src={img2} alt="Trẻ em thiếu canxi" />
                    <span>Việt Nam đứng thứ 4 trong top 10 nươc có chiều cao trung bình thấp nhất thế giới </span>
                </div>
                <div className="ladi-item">
                    <h2>TRẺ EM THIẾU CANXI </h2>
                    <p>Trẻ em thiếu canxi thường có biểu hiện đổ mồ hôi trộm, đêm ngủ giật mình hay quấy khóc, dễ nổi cáu, rối loạn chức năng vận động, không tập trung tinh thần,còi xương, chậm lớn...</p>
                    <img src={img3} alt="Trẻ em thiếu canxi" />
                    <span>Thiếu canxi ảnh hưởng nghiêm trọng đến sự phát triển của trẻ </span>
                </div>
                <div className="ladi-item">
                    <h2>PHỤ NỮ MANG THAI THIẾU CANXI </h2>
                    <p>Những biểu hiện khi bà bầu thiếu canxi : đau lưng , đau nhức cơ bắp , chuột rút , tê chân tay, Móng tay giòn, dễ gãy, rụng tóc ,răng vàng, đau răng, mệt mỏi, mất ngủ ... ảnh hưởng nghiêm trọng đến sự phát triển của thai nhi </p>
                    <img src={img4} alt="Trẻ em thiếu canxi" />
                    <span>Thiếu canxi khiến bà bầu vô cùng mệt mỏi  </span>
                </div>
                <div className="ladi-item">
                    <h2>SƠ ĐỒ CHUYỂN HÓA CANXI TRONG CƠ THỂ </h2>
                    <img src={img5} alt="Trẻ em thiếu canxi" />
                </div>
                
            </div>
        </div>
    );
}