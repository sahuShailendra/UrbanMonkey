import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation,  Autoplay  } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";

const Slider = () => {
  const testimonials = [
    {
      name: "John Doe",
      review: "Amazing products! The quality is top-notch, and delivery was quick.",
      role: "Verified Buyer",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
    },
    {
      name: "Jane Smith",
      review: "Loved the variety of products. Great shopping experience!",
      role: "Verified Buyer",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 4,
    },
    {
      name: "Sam Wilson",
      review: "Fast delivery and great customer service. Highly recommend.",
      role: "Verified Buyer",
      img: "https://randomuser.me/api/portraits/men/46.jpg",
      rating: 5,
    },
    {
      name: "Maria Johnson",
      review: "The website is easy to use and I found everything I needed.",
      role: "Verified Buyer",
      img: "https://randomuser.me/api/portraits/women/62.jpg",
      rating: 4,
    },
    {
      name: "Chris Lee",
      review: "Very reliable store. My order was packaged perfectly.",
      role: "Verified Buyer",
      img: "https://randomuser.me/api/portraits/men/55.jpg",
      rating: 5,
    },
    {
      name: "Sophia Brown",
      review: "The product quality exceeded my expectations. Will buy again!",
      role: "Verified Buyer",
      img: "https://randomuser.me/api/portraits/women/70.jpg",
      rating: 5,
    },
  ];
  return (
   <div className="w-full max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 font-Fgrotesk">What Our Customers Say</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 4000 }}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="p-6 bg-black rounded-xl shadow-md flex flex-col items-center text-center">
              <img
                src={t.img}
                alt={t.name}
                style={{width: '150px', height:"150px"}}
                className="w-10 h-10 rounded-full mb-4 object-cover border-2 border-gray-200"
              />
              <p className="text-white italic mb-3">"{t.review}"</p>
              <div className="flex justify-center mb-2">
                {Array(t.rating).fill(0).map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <span className="text-sm text-gray-500">{t.role}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
