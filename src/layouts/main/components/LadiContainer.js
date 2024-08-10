import React from 'react';
import img1 from '../../../assets/images/ladi-container1.jpg';
import img2 from '../../../assets/images/ladi-container2.jpg';
import img3 from '../../../assets/images/ladi-container3.png';
import img4 from '../../../assets/images/ladi-container4.jpg';
import img5 from '../../../assets/images/ladi-container5.jpg';

export function LadiContainer   () {
  return (
    <div className="ladi-container">
            <h2>Những dấu hiệu cơ thể thiếu canxi</h2>
            <div className="ladi-grid">
                <div className="ladi-item">
                    <img src={img1} alt="Loãng xương" />
                    <p>Mô tả hoặc nội dung liên quan</p>
                </div>
                <div className="ladi-item">
                    <img src={img2} alt="Trẻ em thiếu canxi" />
                    <p>Mô tả hoặc nội dung liên quan</p>
                </div>
                <div className="ladi-item">
                    <img src={img3} alt="Trẻ em thiếu canxi" />
                    <p>Mô tả hoặc nội dung liên quan</p>
                </div>
                <div className="ladi-item">
                    <img src={img4} alt="Trẻ em thiếu canxi" />
                    <p>Mô tả hoặc nội dung liên quan</p>
                </div>
                <div className="ladi-item">
                    <img src={img5} alt="Trẻ em thiếu canxi" />
                    <p>Mô tả hoặc nội dung liên quan</p>
                </div>
                
            </div>
        </div>
    );
}