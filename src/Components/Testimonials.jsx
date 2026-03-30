import React, { useRef } from "react";
import "../css/Testimonials.css";
import next from "../assets/next-icon.png";
import back from "../assets/back-icon.png";
import user1 from "../assets/user-1.png";
import user2 from "../assets/user-2.png";
import user3 from "../assets/user-3.png";
import user4 from "../assets/user-4.png";

const Testimonials = () => {
  const Slider = useRef();
  let tx = 0;

  const SlideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    Slider.current.style.transform = `translateX(${tx}%)`;
  };

  const SlideBackward = () => {
    if (tx < -0) {
      tx += 25;
    }
    Slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <>
      <div className="title">
        <p>TESTIMONIALS</p>
        <h2>What Student Says!</h2>
      </div>
      <div className="testimonials">
        <img src={next} alt="" className="next-btn" onClick={SlideForward} />
        <img src={back} alt="" className="back-btn" onClick={SlideBackward} />

        <div className="slider">
          <ul ref={Slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user1} alt="" />
                  <div>
                    <h3>Sarah</h3>
                    <span>Edusity,USA</span>
                  </div>
                  <p>
                    Choosing to pursue my degree at Edusity was one of the best
                    decisions I've ever made.This Supportive
                    community,state-of-the-art facilities,and commitment to
                    academic excellence have truly exceeded ,my expectations.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user2} alt="" />
                  <div>
                    <h3>William</h3>
                    <span>Edusity,USA</span>
                  </div>
                  <p>
                    Choosing to pursue my degree at Edusity was one of the best
                    decisions I've ever made.This Supportive
                    community,state-of-the-art facilities,and commitment to
                    academic excellence have truly exceeded ,my expectations.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user3} alt="" />
                  <div>
                    <h3>Hannah</h3>
                    <span>Edusity,USA</span>
                  </div>
                  <p>
                    Choosing to pursue my degree at Edusity was one of the best
                    decisions I've ever made.This Supportive
                    community,state-of-the-art facilities,and commitment to
                    academic excellence have truly exceeded ,my expectations.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user4} alt="" />
                  <div>
                    <h3>Austin</h3>
                    <span>Edusity,USA</span>
                  </div>
                  <p>
                    Choosing to pursue my degree at Edusity was one of the best
                    decisions I've ever made.This Supportive
                    community,state-of-the-art facilities,and commitment to
                    academic excellence have truly exceeded ,my expectations.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
