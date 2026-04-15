import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { id: 1, title: "Slide 1", image: "", description: ""},
  { id: 2, title: "Slide 2", image: "", description: "" },
  { id: 3, title: "Slide 3", image: "", description: "" },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goTo = (index: number) => {
    setCurrent(index);
  };

  return (
    <div
      className="relative w-[1566px] h-[420px] rounded-[30px] bg-white overflow-hidden cursor-pointer"
      onClick={() => {
        // TODO: navigate to "Browse courses_Authorized"
      }}
    >
      {/* SLIDES CONTAINER (Frame 341) */}
      <div
        className="flex h-full transition-transform duration-300"
        style={{
          width: `${slides.length * 1566}px`,
          transform: `translateX(-${current * 1566}px)`,
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-[1566px] h-[420px] rounded-[30px] flex-shrink-0 relative overflow-hidden"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`, // <-- pass image in slides[]
              }}
            />

            {/* Optional overlay (for readability) */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Frame 323 */}
            <div className="relative z-10 w-[1470px] h-[232px] flex flex-col gap-[40px] ml-[48px] mt-[48px]">
              
              {/* Frame 316 */}
              <div className="w-[1470px] h-[128px] flex flex-col gap-[12px]">
                
                {/* Title */}
                <h1 className="text-[48px] font-bold leading-[100%] text-white">
                  {slide.title}
                </h1>

                {/* Body text */}
                <p className="w-[1218px] text-white text-base">
                  {slide.description}
                </p>
              </div>

              {/* Button */}
              <button
                className="w-[206px] h-[64px] px-[25px] py-[17px] rounded-[8px] bg-[#4F46E5] text-white font-medium"
                onClick={(e) => {
                  e.stopPropagation();
                  // navigate to Browse Courses
                }}
              >
                Browse Courses
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* LEFT SIDE (Frame 322) */}
      <div className="absolute top-[311px] left-[48px] flex items-center justify-between w-[1470px]">

        {/* DOT NAV (Frame 337 / carousel nav) */}
        <div className="flex gap-[12px] w-[1206px] h-[8px] justify-center">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                goTo(index);
              }}
              className={`w-[57px] h-[8px] rounded-full cursor-pointer ${
                current === index
                  ? "bg-[#F5F5F5]"
                  : "bg-[#C1BCBC80]"
              }`}
            />
          ))}
        </div>
         {/* ARROWS (Frame 338) */}
        <div className="flex flex-row items-right gap-[24px] w-[132px] h-[54px]">
          {/* LEFT */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="w-[54px] h-[54px] flex items-center justify-center rounded-full bg-white shadow"
          >
            <ChevronLeft className="w-[24px] h-[24px] opacity-70" />
          </button>

          {/* RIGHT */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="w-[54px] h-[54px] flex items-center justify-center rounded-full bg-white shadow"
          >
            <ChevronRight className="w-[24px] h-[24px] opacity-70" />
          </button>
        </div>
      </div>
    </div>
  );
}