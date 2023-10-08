import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonials = () => {



    const clients = [
        {
          img: profilePic1,
          review:
            "I stumbled upon this website and was blown away by the quality of service. The user-friendly interface made it easy to navigate and find exactly what I needed. The services provided were top-notch, and the support team was responsive and helpful throughout. I highly recommend this website!",
        },
        {
          img: profilePic2,
          review:
            "I had a fantastic experience with this website and its services. From the moment I landed on the homepage, I was impressed by the professionalism and attention to detail. The services were delivered promptly, and the results exceeded my expectations. I'll definitely be returning for more!.",
        },
        {
          img: profilePic3,
          review:
            "I've been a loyal customer of this website for years, and I can't praise it enough. The services offered are not only affordable but also of exceptional quality. The website is constantly updated with useful information, and I always feel like they genuinely care about their clients. It's a five-star experience!.",
        },
        {
          img: profilePic4,
          review:
            "I've tried several similar websites, but this one stands out from the rest. The services are competitively priced, and the website's layout is clean and intuitive. What sets them apart is their commitment to customer satisfaction. They went above and beyond to address my concerns and deliver a solution that worked for me. I'm extremely satisfied.",
        },
      ];



      return (
        <div className="t-wrapper" id="testimonial">
          <div className="t-heading">
            <span>Clients always get </span>
            <span>Exceptional Work </span>
            <span>from me...</span>
          <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
          <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
    
          </div>
          <Swiper
            // install Swiper modules
            // modules={[Pagination]}
            // slidesPerView={1}
            // pagination={{ clickable: true }}
          >
            {clients.map((client, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="testimonial">
                    <img src={client.img} alt="" />
                    <span>{client.review}</span>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      );
    };
    
    export default Testimonials;