function isWebp() {
  !(function (e) {
    let t = new Image();
    (t.onload = t.onerror =
      function () {
        e(2 == t.height);
      }),
      (t.src =
        "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
  })(function (e) {
    let t = !0 === e ? "webp" : "no-webp";
    document.documentElement.classList.add(t);
  });
}
isWebp(),
  $(function () {
    if (
      ($(".faq").length &&
        $(".faq__toggle").click(function () {
          $(this).closest(".faq__item").toggleClass("active"),
            $(this).closest(".faq__item").find(".faq__content").slideToggle();
        }),
      $(".price-plans").length &&
        $(window).width() < 1200 &&
        $(".price-plans-section__title").click(function () {
          $(this).parent().toggleClass("active"), $(this).next().slideToggle();
        }),
      $(".page-our-differences").length &&
        $(window).width() > 767 &&
        $(".bvlt-difference__left li").each(function (e) {
          let t = $(this),
            i = $(this).outerHeight(),
            n = $(".bvlt-difference__right li:nth-child(" + (e + 1) + ")"),
            s = n.outerHeight();
          t && n && (i > s ? n.outerHeight(i) : t.outerHeight(s));
        }),
      $(".validate").validate(),
      $(".careers-validate").validate(),
      $(".contact-us-validate").validate(),
      Fancybox.bind("[data-fancybox]", {
        autoFocus: !1,
        tpl: {
          closeButton:
            '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}">\n                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">\n                            <path d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z" fill="currentColor"/>\n                        </svg>\n                      </button>',
        },
      }),
      $(".main-page").length)
    ) {
      if ($(window).width() < 767) {
        new Swiper(".tabs-buttons", {
          spaceBetween: 12,
          slidesPerView: "auto",
          scrollbar: { el: ".swiper-scrollbar" },
        });
      }
      $(".tabs-buttons__item").click(function () {
        let e = $(this).data("target");
        $(this).hasClass("active") ||
          ($(".tabs-buttons__item").removeClass("active"),
          $(this).addClass("active"),
          $(".tabs-content__item").removeClass("active"),
          $(e).addClass("active"));
      });
      new Swiper(".clients__slider", {
        slidesPerView: 6,
        spaceBetween: 30,
        pagination: {
          el: ".clients__slider-wrap .swiper-pagination",
          clickable: !0,
        },
        navigation: {
          nextEl: ".clients__slider-wrap .swiper-button-next",
          prevEl: ".clients__slider-wrap .swiper-button-prev",
        },
        breakpoints: {
          320: { spaceBetween: 12, slidesPerView: "auto" },
          768: { slidesPerView: 5, spaceBetween: 12 },
          992: { slidesPerView: 6, spaceBetween: 12 },
          1200: { spaceBetween: 15 },
          1366: { spaceBetween: 30 },
        },
      });
    }
    new Swiper(".reviews__slider", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: { el: ".swiper-pagination", clickable: !0 },
      breakpoints: {
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        992: { spaceBetween: 20, slidesPerView: 3 },
        1200: { spaceBetween: 30 },
      },
    });
    let e = !0,
      t = !1;
    $(window).width() < 1200 &&
      ((e = !1),
      $(".footer__item .title").click(function () {
        $(this).parent().toggleClass("active"), $(this).next().slideToggle(300);
      }),
      $(".m-menu__body").append($(".header-menu")),
      $(".m-menu__btn").click(function () {
        $(".m-menu-wrap").addClass("active"),
          $("body").addClass("overflow-hidden");
      }),
      $(".m-menu__close, .m-menu__bg").click(function () {
        $(".m-menu-wrap").removeClass("active"),
          $("body").removeClass("overflow-hidden");
      }),
      $(".header-menu__item").click(function (e) {
        $(e.target).is("a") ||
          $(this).toggleClass("active").next().slideToggle(300);
      })),
      $(window).width() < 768 &&
        ((t = !0),
        $(".m-menu__footer").append(
          $(".header__contacts"),
          $(".header .button")
        )),
      $(window).resize(function () {
        $(".tabs-buttons .swiper-scrollbar").hasClass("swiper-scrollbar-lock")
          ? $(".tabs-buttons").addClass("no-scroll")
          : $(".tabs-buttons").removeClass("no-scroll"),
          $(window).width() < 1200 && e
            ? ((e = !1),
              $(".footer__item .title").click(function () {
                $(this).parent().toggleClass("active"),
                  $(this).next().slideToggle(300);
              }),
              $(".m-menu__body").append($(".header-menu")),
              $(".m-menu__btn").click(function () {
                $(".m-menu-wrap").addClass("active"),
                  $("body").addClass("overflow-hidden");
              }),
              $(".m-menu__close, .m-menu__bg").click(function () {
                $(".m-menu-wrap").removeClass("active"),
                  $("body").removeClass("overflow-hidden");
              }),
              $(".header-menu__item").on("click", function (e) {
                $(e.target).is("a") ||
                  $(this).toggleClass("active").next().slideToggle(300);
              }))
            : $(window).width() > 1199 &&
              !e &&
              ((e = !0),
              $(".header__logo").after($(".header-menu")),
              $(".header-menu__item").removeClass("active"),
              $(".header-menu__submenu").removeAttr("style"),
              $(".footer__item .title, .header-menu__item").off()),
          $(window).width() < 768 && !t
            ? ((t = !0),
              $(".m-menu__footer").append(
                $(".header__contacts"),
                $(".header .button")
              ))
            : $(window).width() > 767 &&
              t &&
              ((t = !1),
              $(".m-menu__btn").before(
                $(".header__contacts"),
                $(".m-menu__footer .button")
              ));
      });

    if ($('[data-input-hidden]').length > 0) {
        var dataInput = $('[data-input-hidden]'),
            dataInputValue = $('[data-input-value]');

        function checkValue(value) {
            // minimum value is 2
            if (value >= 2) {
                return true;
            } else {
                return false;
            }
        }

        $(document).on('click', '[data-input-less]', function(){
            var updatedValue = parseInt(dataInput.val()) - 1;
            if (checkValue(updatedValue) == true) {
                dataInput.val(updatedValue);
                dataInputValue.text(updatedValue);
            }
        });

        $(document).on('click', '[data-input-more]', function(){
            var updatedValue = parseInt(dataInput.val()) + 1;
            if (checkValue(updatedValue) == true) {
                dataInput.val(updatedValue);
                dataInputValue.text(updatedValue);
            }
        })
    }
  });
