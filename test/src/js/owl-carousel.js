import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'owl.carousel/dist/owl.carousel.min';
function HeroSlider() {
  const owlCarouselRef = useRef(null);

  useEffect(() => {
    if (owlCarouselRef.current) {
      $(owlCarouselRef.current).owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      });
    }
  }, []);

  return (
    <section className="slider" dir="ltr">
      <div className="hero-slider owl-carousel" ref={owlCarouselRef}>
        <div className="single-slider" style={{ backgroundImage: "url('/img/sliderar2.jpg')" }}>
          <div className="container">
          <div className="row" dir="rtl">
                        <div className="col-lg-7">
                            <div className="text">
                                <h1 className="rightalign">نقدم <span>خدمات طبية</span>يمكنك <span>الاعتماد عليها</span>
                                </h1>
                                <p className="rightalign">مصدرك الموثوق لرعاية صحية عالية الجودة.</p>
                                <div className="button rightalign"><a href="/appointement/" className="btn">حجز موعد</a><a
                                        href="/service/" className="btn primary">اعرف المزيد</a></div>
                            </div>
                        </div>
                    </div>
          </div>
        </div>
        <div className="single-slider" style={{ backgroundImage: "url('/img/sliderar.jpg')" }}>
          <div className="container">
          <div className="row" dir="rtl">
                        <div className="col-lg-7">
                            <div className="text">
                                <h1 className="rightalign">نقدم <span>خدمات طبية</span>يمكنك <span>الاعتماد عليها</span>
                                </h1>
                                <p className="rightalign">مصدرك الموثوق لرعاية صحية عالية الجودة.</p>
                                <div className="button rightalign"><a href="/appointement/" className="btn">حجز موعد</a><a
                                        href="/service/" className="btn primary">معلومات عنا</a></div>
                            </div>
                        </div>
                    </div>
          </div>
        </div>
        <div className="single-slider" style={{ backgroundImage: "url('/img/sliderar3.jpg')" }}>
          <div className="container">
          <div className="row" dir="rtl">
                        <div className="col-lg-7">
                            <div className="text">
                                <h1 className="rightalign">نقدم <span>خدمات طبية</span>يمكنك <span>الاعتماد عليها</span>
                                </h1>
                                <p className="rightalign">مصدرك الموثوق لرعاية صحية عالية الجودة.</p>
                                <div className="button rightalign"><a href="/appointement/" className="btn">حجز موعد</a><a
                                        href="/service/" className="btn primary">اتصل الآن</a></div>
                            </div>
                        </div>
                    </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSlider;
