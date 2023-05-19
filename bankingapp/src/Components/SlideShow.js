import React from 'react';

const SlideShow = () => {
  return (
    <section className="bg-primary-darker-blue">
      <div className="sec-life-goals sec-verticle-padded cib-component" data-comp-name="background-tabbing">
        <div className="sec-heading txt-white">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <h1 className="heading">CIB</h1>
                <p>Delivering value to our clients, our community and our shareholders</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lf-background-overlay">
          <div className="background-wrapper">
            {/* Slideshow Background */}
            <div id="bg-item-B38A431FF77C4ED39F06FFF30D2A9F26" className="bg-items bg--active">
              <picture className="picture">
                {/* Mobile */}
                <source media="(max-width: 767px) and (orientation: portrait)" srcSet="/-/media/project/cib/oct-26-new-images/hero-banners-1440-x-635/personal-banking-hero-banner-en.jpg?cx=0.55&cy=0.42&cw=320&ch=470&hash=68A10A79C96603B5723639526C554BEA" />
                {/* Desktop */}
                <img alt="Personal Banking Hero Banner EN" src="/-/media/project/cib/oct-26-new-images/hero-banners-1440-x-635/personal-banking-hero-banner-en.jpg?cx=0.55&cy=0.42&cw=1440&ch=560&hash=70767E671644447A92A871FA7DF128DB" />
              </picture>
            </div>
            {/* Add more slideshow background items here */}
          </div>
        </div>
        <div className="lf-content">
          <div className="container">
            <div className="lf-cards-wrapper">
              {/* Button Card 1 */}
              <div className="item">
                <div className="item-detail">
                  <div className="item-heading">
                    <h3>Button Card 1</h3>
                  </div>
                  <div className="item-content">
                    Content for Button Card 1
                  </div>
                  <div className="item-button">
                    <a href="/button1" className="btn btn-filled-blue cib-component" data-animation="ripple" data-animation-color="animationBlue" data-comp-name="button" tabindex="-1">
                      Explore
                    </a>
                  </div>
                </div>
              </div>

              {/* Button Card 2 */}
              <div className="item">
                <div className="item-detail">
                  <div className="item-heading">
                    <h3>Button Card 2</h3>
                  </div>
                  <div className="item-content">
                    Content for Button Card 2
                  </div>
                  <div className="item-button">
                    <a href="/button2" className="btn btn-filled-blue cib-component" data-animation="ripple" data-animation-color="animationBlue" data-comp-name="button" tabindex="-1">
                      Explore
                    </a>
                  </div>
                </div>
              </div>

              {/* Add more button cards here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlideShow;
