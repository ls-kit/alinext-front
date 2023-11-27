// ----------------*****************----------------******************------------
export const themeSec2BannerSlider = {
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const productSliderOption = {
  infinite: true,
  arrows: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1680,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 660,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};
export const productPageRelatedSliderOptions = {
  infinite: true,
  arrows: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1680,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 660,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

export const categorySliderOption = {
  arrows: true,
  infinite: true,
  slidesToShow: 7,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1745,
      settings: {
        slidesToShow: 6,
        autoplay: true,
        autoplaySpeed: 2500,
      },
    },
    {
      breakpoint: 1540,
      settings: {
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 2500,
      },
    },
    {
      breakpoint: 910,
      settings: {
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 2500,
      },
    },
    {
      breakpoint: 730,
      settings: {
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2500,
      },
    },
    {
      breakpoint: 410,
      settings: {
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 2500,
      },
    },
  ],
};

export const featureBlogSliderOption = {
  arrows: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2500,
  responsive: [
    {
      breakpoint: 1550,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 940,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const detailedBannerSliderOption = {
  arrows: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3200,
  responsive: [
    {
      breakpoint: 1448,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1065,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
  ],
};

export const bestValueSliderOption = {
  arrows: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2580,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const bankOfferSliderOption = {
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 3,
  arrows: true,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const specialOfferSliderOffer = {
  arrows: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const productDetailSlider = (length) => {
  return {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: '.product-main-1',
    dots: false,
    focusOnSelect: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: length,
          vertical: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: length,
          vertical: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          vertical: false,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: length,
          vertical: false,
        },
      },
    ],
  };
};

export const productDetailTopSlider = {
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 4,
  arrows: false,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2500,
  responsive: [
    {
      breakpoint: 1230,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

export const collectionCategorySlider = {
  arrows: true,
  infinite: false,
  slidesToShow: 7,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1660,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 1501,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1251,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 684,
      settings: {
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
  ],
};

export const topBarContentSlider = {
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  vertical: true,
  variableWidth: false,
};

export const viewModalSlider = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 2000,
};

export const viewModalSliderOption = {
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-image',
  dots: false,
  focusOnSelect: true,
};

export const clientSectionSlider = {
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 3,
  arrows: false,
  responsive: [
    {
      breakpoint: 1262,
      settings: {
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 3500,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2800,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2800,
      },
    },
  ],
};

export const creativeTeamSlider = {
  arrows: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: true,
  responsive: [
    {
      breakpoint: 1690,
      settings: {
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
    {
      breakpoint: 1190,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        fade: true,
      },
    },
  ],
};
export const reviewSectionSlider = {
  arrows: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: true,
  responsive: [
    {
      breakpoint: 1690,
      settings: {
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
    {
      breakpoint: 1190,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        fade: true,
      },
    },
  ],
};

export const latestBlogSlider = {
  className: 'slider-5 ratio_87 product-wrapper',
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 5,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1215,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 876,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const ourBlogSlider = {
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 5,
  arrows: false,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1215,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 876,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
export const headerProductSlider = {
  pauseOnHover: true,
  dots: false,
  infinite: true,
  arrows: true,
  slidesToShow: 2,
  slidesToScroll: 1,
};

export const headerBlogSlider = {
  dots: false,
  infinite: true,
  arrows: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 2000,
};
