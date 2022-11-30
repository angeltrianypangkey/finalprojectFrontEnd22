import React from 'react'

function Service() {
  return (
    <div id="services">
    <div className="container">
        <div className="services-slider swiper" data-aos="fade-up" data-aos-delay={100}>
        <div className="swiper-wrapper">
            <div className="swiper-slide">
            <div className="services-block">
                <i className="bi bi-briefcase" />
                <span>UI/UX DESIGN</span>
                <p className="separator">To an English person, it will seem like simplified English,told me what </p>
            </div>
            </div>{/* End testimonial item */}
            <div className="swiper-slide">
            <div className="services-block">
                <i className="bi bi-card-checklist" />
                <span>BRAND IDENTITY</span>
                <p className="separator">To an English person, it will seem like simplified English,told me what </p>
            </div>
            </div>{/* End testimonial item */}
            <div className="swiper-slide">
            <div className="services-block">
                <i className="bi bi-bar-chart" />
                <span>WEB DESIGN</span>
                <p className="separator">To an English person, it will seem like simplified English,told me what </p>
            </div>
            </div>{/* End testimonial item */}
            <div className="swiper-slide">
            <div className="services-block">
                <i className="bi bi-binoculars" />
                <span>MOBILE APPS</span>
                <p className="separator">To an English person, it will seem like simplified English,told me what </p>
            </div>
            </div>{/* End testimonial item */}
            <div className="swiper-slide">
            <div className="services-block">
                <i className="bi bi-brightness-high" />
                <span>Analytics</span>
                <p className="separator">To an English person, it will seem like simplified English,told me what </p>
            </div>
            </div>{/* End testimonial item */}
            <div className="swiper-slide">
            <div className="services-block">
                <i className="bi bi-calendar4-week" />
                <span>PHOTOGRAPHY</span>
                <p className="separator">To an English person, it will seem like simplified English,told me what </p>
            </div>
            </div>{/* End testimonial item */}
        </div>
        <div className="swiper-pagination" />
        </div>
    </div>
</div>

  )
}

export default Service
