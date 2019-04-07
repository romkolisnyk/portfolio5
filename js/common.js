// -------PRELOADER
$(window).on("load", function () {
	var d = $(".loader");
	d.find(".loader-inner").fadeOut(),
		d.delay(300).fadeOut("slow")
});
$(document).ready(function(){

	$(".contacts__item .contacts__img").delay(600).queue(function () { $(this).addClass("animate"); });

	$(".dropdown-button").click(function () {
		$(".dropdown").fadeToggle(200);
		$(".dropdown-button span").toggleClass("active");
		$(this).toggleClass("active");
	});

	// window.addEventListener('click', function (e) {
	// 	if (document.querySelector('.header .menu .menu--left').contains(e.target)) {
	// 	} else {
	// 		$(".dropdown").fadeToggle(200);
	// 		$(".dropdown-button span").toggleClass("active");
	// 		$(".dropdown-button").toggleClass("active")
	// 	}
	// });


	var hashcode = window.location.hash;

	if (hashcode != "") {
		setTimeout(function () {
			$('html, body').animate({ scrollTop: $(hashcode).offset().top - 200 }, 1000);
		}, 200);
  }

	if ($("svg").hasClass("main-bg__left")) {
		var bgItems = $(".main-bg__item");

				bgItems.each(function (i) {
					var $item = $(this);
					setTimeout(function () {
						$item.addClass("animate");
					}, i * 200);
					setTimeout(function () {
						setTimeout(function () {
							$item.addClass("flow");
						}, i * 100);
					}, 2600);
				});
	};

	if ($("svg").hasClass("main-bg__right")) {
		var bgItems = $(".main-bg__item--right");

				bgItems.each(function (i) {
					var $item = $(this);
					setTimeout(function () {
						$item.addClass("animate");
					}, i * 200);
					setTimeout(function () {
						setTimeout(function () {
							$item.addClass("flow");
						}, i * 100);
					}, 1900);
				});
	}


	// ------MOBILE MENU
	$(".toggle_menu").click(function () {
		$(".sandwich").toggleClass("active");
		$(".mobile-menu").slideToggle("fast");
	});
	$(".mobile-menu .dropdown__button").click(function () {
		$(".mobile-menu .dropdown__list").toggleClass("active");
		$(".mobile-menu .arrow").toggleClass("active");
	})
	// --------END MOBILE MENU


	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$(".header").css({
        "background-color": "rgba(255, 255, 255, .85)"});
		}
		if ($(this).scrollTop() < 50) {
			$(".header").css({ "background-color": "transparent"});
		}
	});


	var first = $(".types__item:nth-child(1),.types__item:nth-child(1)>.testimonials");
	var second = $(".types__item:nth-child(2),.types__item:nth-child(2)>.testimonials");
	var third = $(".types__item:nth-child(3),.types__item:nth-child(3)>.testimonials");
	var forth = $(".types__item:nth-child(4),.types__item:nth-child(4)>.testimonials");
	var items = $(".types__item,.testimonials");

	$("#control1").click(function () {
		first.addClass("active");
		items.not(first).removeClass("active");
	});
	$("#control2").click(function () {
		second.addClass("active");
		items.not(second).removeClass("active");
	});
	$("#control3").click(function () {
		third.addClass("active");
		items.not(third).removeClass("active");
	});
	$("#control4").click(function () {
		forth.addClass("active");
		items.not(forth).removeClass("active");
	});


	function checkPosition() {
		if (window.matchMedia('(max-width: 767px)').matches) {
			$(".types__items").slick({
				arrows: true,
				slidesToShow: 1,
				dots: true,
				fade: true
			});
		}
	}
	checkPosition();



	$('.types__items').on('afterChange', function (event, slick, currentSlide, nextSlide) {
		var dataId = $(slick.$slides[currentSlide]).data("slickIndex");
		$(".control").removeClass("active");
		$(".control[data-id=" + dataId + "]").addClass("active");
	});


	$(".hiw__content").slick({
    arrows: false,
    slidesToShow: 1,
		dots: true,
		customPaging: function (slider, i) {
			var thumb = $(slider.$slides[i]).data();
			var title = $(slider.$slides[i]).data("title");
			return (
				'<button type="button" role="tab">' +
				'</button><a class="stage">' +
				title +
				"</a>"
			);
		}
	});
	
	$(".pricing__items").slick({
    arrows: false,
    slidesToShow: 1,
    dots: true,
    customPaging: function(slider, i) {
      var thumb = $(slider.$slides[i]).data();
      var title = $(slider.$slides[i]).data("title");
      return (
        '<button type="button" role="tab"><a>' +
        (i + 1) +
        '</a></button><a class="stage">' +
        title +
        "</a>"
      );
    }
  });
	$(".seo__testimonials .testimonials__items").slick({
    arrows: true,
    slidesToShow: 1,
    dots: false,
	});
	
	if ($("svg").hasClass("seo-bg--left")) {
		var bgItems = $(".seo-bg__item");

		bgItems.each(function (i) {
			var $item = $(this);
			setTimeout(function () {
				$item.addClass("animate");
			}, i * 150);
			setTimeout(function () {
				setTimeout(function () {
					$item.addClass("flow");
				}, i * 100);
			}, 2000);
		});
	};

	if ($("svg").hasClass("seo-bg--right")) {
		var bgItems = $(".seo-bg__item--right");

		bgItems.each(function (i) {
			var $item = $(this);
			setTimeout(function () {
				$item.addClass("animate");
			}, i * 150);
			setTimeout(function () {
				setTimeout(function () {
					$item.addClass("flow");
				}, i * 100);
			}, 1500);
		});
	}
	

// -----------FAQ ACCORDEON
	$(".faq__title-container").on("click", function () {
		$(this).next().is(":visible") ? ($(this).next().slideUp(),
			$(this).find(".icon-slide").removeClass("open"),
			$(this).parent().removeClass("active"),
			$(".faq__title-container").removeClass("active")) : ($(".faq__title-container").find("button").removeClass("open"),
				$(".faq__title-container").removeClass("active"),
				$(".faq__item").removeClass("active"),
				$(this).find(".icon-slide").addClass("open"),
				$(".faq__title-container").next().slideUp(),
				$(this).next().slideDown(),
				$(this).parent().addClass("active"),
				$(this).addClass("active"))
	});


	if ($("section").hasClass("timeline")) {
    $(document).bind("scroll", function(ev) {
      var scrollOffset = $(document).scrollTop();
			var timelineItem = $(".timeline__item");
			var containerOffset = $(".timeline").offset().top - 200;

      if (scrollOffset > containerOffset) {

				timelineItem.each(function(i) {
          var $item = $(this);
          setTimeout(function() {
            $item.addClass("active");
          }, i * 500);
        });

        // $(document).unbind("scroll");
      }
    });
	}
	if ($("svg").hasClass("cta__img")) {
    $(document).bind("scroll", function(ev) {
      var scrollOffset = $(document).scrollTop();
      var triangle = $(".st0,.st2");
      var containerOffset = $(".timeline").offset().top + 700;

      if (scrollOffset > containerOffset) {
				triangle.each(function(i) {
          var $item = $(this);
          setTimeout(function() {
            $item.addClass("active");
          }, i * 200);
				});
				
				setTimeout(function () {
					$(".timeline .timeline__cta .cta__img .st1").addClass("active");
				}, 1000);

        $(document).unbind("scroll");
      }
    });
  }
	
	


	// ----------------Form functions

	function t(e, t) {
		t
			? (($("#" + e).disabled = !0), $("#" + e).css("cursor", "default"))
			: (($("#" + e).disabled = !1), $("#" + e).css("cursor", "pointer"));
	};

	function i(e, t) {
		t
			? $("#" + e).css("visibility", "visible")
			: $("#" + e).css("visibility", "hidden");
	}

	function n(e, t) {
		i("message", e), t && $("#message").html(t);
	}

	function o() {
		document.getElementById("captcha").src =
			"/captcha.php?rnd=" + Math.random();
	}

	$(function () {
		var e = $(".name"),
			t = $(".email"),
			i = $(".captcha"),
			n = $(".message");

		e.blur(function () {
			"" == $(this).val()
				? $(this).addClass("on-error-js")
				: $(this).hasClass("on-error-js") && $(this).removeClass("on-error-js");
		}),
			i.blur(function () {
				"" == $(this).val()
					? $(this).addClass("on-error-js")
					: $(this).hasClass("on-error-js") &&
					$(this).removeClass("on-error-js");
			}),
			t.blur(function () {
				var e = $(this).val(),
					t = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gim;
				t.test(e)
					? $(this).hasClass("on-error-js") &&
					$(this).removeClass("on-error-js")
					: $(this).addClass("on-error-js");
			}),
			n.blur(function () {
				"" == $(this).val()
					? $(this).addClass("on-error-js")
					: $(this).hasClass("on-error-js") &&
					$(this).removeClass("on-error-js");
			});
	});

	$(".dep-result").on("click", function () {
		$(".cs-wrap").slideToggle();
		$(this).toggleClass("rotate");
		$(".department-data-wrap").toggleClass("border");
	}),
		$(".cs-wrap label").on("click", function () {
			var e = $(this)
				.find("input")
				.val();
			$(this)
				.parent()
				.slideUp()
				.end()
				.closest(".department-data")
				.find(".dep-result")
				.text(e),
				$(".dep-result").addClass("selected"),
				$(this)
					.closest(".department-data")
					.removeClass("on-error-js");
		}),
		$('button[type="submit"]').click(function (o) {
			"" == e.val() && e.addClass("on-error-js"),
				"" == t.val() && t.addClass("on-error-js"),
				"" == n.val() && n.addClass("on-error-js"),
				"" == i.val()
					? i.addClass("on-error-js")
					: i.removeClass("on-error-js"),
				"choose department" ==
				$(".dep-result")
					.text()
					.toLowerCase() && $(".department-data").addClass("on-error-js"),
				$(".on-error-js").length > 0 && o.preventDefault(),
				$(".success").text("");
		});

	// Form functions

	$("input, textarea, .captcha").focus(function () {
		$(this)
			.parents(".input-effect")
			.addClass("focused");
	});

	$("input, textarea, .captcha").blur(function () {
		var inputValue = $(this).val();
		if (inputValue == "") {
			//$(this).removeClass('filled');
			$(this)
				.parents(".input-effect")
				.removeClass("focused");
		}
	});

	});
