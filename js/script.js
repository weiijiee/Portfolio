$(function() {
    $(".secManually_nav_left_menu_content_btn li, .secManually_nav_m_right_menu_content_btn li, .btnMore").on("click", function() {
        var target = $(this).attr("data-target");
        var goTo;
        goTo = $("#" + target).first().offset().top;
        
        if (window.innerWidth < 992) {
          goTo -= 60;
        }
        
        $("body, html").stop().animate({
          scrollTop: goTo
        }, 500);
    })

    $(document).click(function(e) {
        var _con = $(".secManually_nav_left_menu_box");
        if (!_con.is(e.target) && _con.has(e.target).length === 0) {
            $(".secManually_nav_left_menu_area").removeClass("opened");
            $(".secManually_nav_left_menu_burger>i").removeClass("fa-times");
            $(".secManually_nav_left_menu_burger>i").addClass("fa-bars");
            $(".secManually_nav_left_menu_content_box").css("opacity", "0");
        }
    });

    $(".secManually_nav_left_menu_burger").on("click", function() {
        $(this).parent(".secManually_nav_left_menu_area").toggleClass("opened");
        if ($(".secManually_nav_left_menu_area").hasClass("opened")) {
            $(this).children(".burger").removeClass("fa-bars");
            $(this).children(".burger").addClass("fa-times");
            $(this).siblings(".secManually_nav_left_menu_content_box").css("opacity", "1");
        } else {
            $(this).children(".burger").removeClass("fa-times");
            $(this).children(".burger").addClass("fa-bars");
            $(this).siblings(".secManually_nav_left_menu_content_box").css("opacity", "0");
        }
    });

    $(".secManually_nav_m_right_menu_burger").on("click", function() {
        $(".darken_content_cover").unbind("transitionend webkitTransitionEnd oTransitionEnd");
        $(this).siblings(".secManually_nav_m_right_menu_fixed").css("left", "0");
        $(this).siblings(".secManually_nav_m_right_menu_fixed").addClass("opened");
    });

    $(".darken_content_cover").on("click", function() {
        $(this).parent().removeClass("opened");
        $(this).bind("transitionend webkitTransitionEnd oTransitionEnd", function() {
            $(this).parent().css("left", "100%");
        })
    });

    $(".secManually_nav_m_right_menu_times").on("click", function() {
        $(this).parent().parent().removeClass("opened");
        $(".darken_content_cover").bind("transitionend webkitTransitionEnd oTransitionEnd", function() {
            $(this).parent().css("left", "100%");
        })
    });
})

$(function() {
    var filter_index = 0;

    var width_gallery_item = $("#gallery .gallery-item").outerWidth(true);
    var height_gallery_item = $("#gallery .gallery-item").outerHeight(true);

    $.each($("#gallery .gallery-item"), function(i, e) {
        $(e).css("left", width_gallery_item * (i % 3));
        $(e).css("top", height_gallery_item * Math.floor(i / 3));
    })

    $("#gallery").css("height", height_gallery_item * 5);

    $("#filters .filter-etitle").on("click", function() {
        var width_gallery_item = $("#gallery .gallery-item").outerWidth(true);
        var height_gallery_item = $("#gallery .gallery-item").outerHeight(true);

        filter_index = $(this).index();
        $(this).addClass("selected").siblings().removeClass("selected");
        if (filter_index == 0) {
            $.each($("#gallery .gallery-item"), function(i, e) {
                $(e).addClass("show").removeClass("hide");
                $(e).css("left", width_gallery_item * (i % 3));
                $(e).css("top", height_gallery_item * Math.floor(i / 3));
            })
            $("#gallery").css("height", height_gallery_item * 5);
        } else if (filter_index == 1) {
            $.each($("#gallery .gallery-item:not(.marketing)"), function(i, e) {
                $(e).addClass("hide").removeClass("show").siblings(".marketing").addClass("show").removeClass("hide");
            })
            $.each($("#gallery .gallery-item.marketing"), function(i, e) {
                $(e).css("left", width_gallery_item * (i % 3));
                $(e).css("top", height_gallery_item * Math.floor(i / 3));
            })
            $("#gallery").css("height", height_gallery_item * 1);
        } else if (filter_index == 2) {
            $.each($("#gallery .gallery-item:not(.advertisement)"), function(i, e) {
                $(e).addClass("hide").removeClass("show").siblings(".advertisement").addClass("show").removeClass("hide");
            })
            $.each($("#gallery .gallery-item.advertisement"), function(i, e) {
                $(e).css("left", width_gallery_item * (i % 3));
                $(e).css("top", height_gallery_item * Math.floor(i / 3));
            })
            $("#gallery").css("height", height_gallery_item * 1);
        } else if (filter_index == 3) {
            $.each($("#gallery .gallery-item:not(.supplies)"), function(i, e) {
                $(e).addClass("hide").removeClass("show").siblings(".supplies").addClass("show").removeClass("hide");
            })
            $.each($("#gallery .gallery-item.supplies"), function(i, e) {
                $(e).css("left", width_gallery_item * (i % 3));
                $(e).css("top", height_gallery_item * Math.floor(i / 3));
            })
            $("#gallery").css("height", height_gallery_item * 2);
        } else if (filter_index == 4) {
            $.each($("#gallery .gallery-item:not(.accessories)"), function(i, e) {
                $(e).addClass("hide").removeClass("show").siblings(".accessories").addClass("show").removeClass("hide");
            })
            $.each($("#gallery .gallery-item.accessories"), function(i, e) {
                $(e).css("left", width_gallery_item * (i % 3));
                $(e).css("top", height_gallery_item * Math.floor(i / 3));
            })
            $("#gallery").css("height", height_gallery_item * 1);
        } else if (filter_index == 5) {
            $.each($("#gallery .gallery-item:not(.food)"), function(i, e) {
                $(e).addClass("hide").removeClass("show").siblings(".food").addClass("show").removeClass("hide");
            })
            $.each($("#gallery .gallery-item.food"), function(i, e) {
                $(e).css("left", width_gallery_item * (i % 3));
                $(e).css("top", height_gallery_item * Math.floor(i / 3));
            })
            $("#gallery").css("height", height_gallery_item * 1);
        }
    })

    function resizeGallery() {
        var width_gallery_item = $("#gallery .gallery-item").outerWidth(true);
        var height_gallery_item = $("#gallery .gallery-item").outerHeight(true);

        $.each($("#gallery .gallery-item"), function(i, e) {
            $(e).css("left", width_gallery_item * (i % 3));
            $(e).css("top", height_gallery_item * Math.floor(i / 3));
        })

        $("#gallery").css("height", height_gallery_item * 5);

        if (filter_index == 0) {
            $.each($("#gallery .gallery-item"), function(i, e) {
                $(e).addClass("show").removeClass("hide");
                $(e).css("left", width_gallery_item * (i % 3));
                $(e).css("top", height_gallery_item * Math.floor(i / 3));
            })
            $("#gallery").css("height", height_gallery_item * 5);
        } else if (filter_index == 1) {
            $.each($("#gallery .gallery-item:not(.marketing)"), function(i, e) {
                $(e).addClass("hide").removeClass("show").siblings(".marketing").addClass("show").removeClass("hide");
            })
            $.each($("#gallery .gallery-item.marketing"), function(i, e) {
                $(e).css("left", width_gallery_item * (i % 3));
                $(e).css("top", height_gallery_item * Math.floor(i / 3));
            })
            $("#gallery").css("height", height_gallery_item * 1);
        } else if (filter_index == 2) {
            $.each($("#gallery .gallery-item:not(.advertisement)"), function(i, e) {
                $(e).addClass("hide").removeClass("show").siblings(".advertisement").addClass("show").removeClass("hide");
            })
            $.each($("#gallery .gallery-item.advertisement"), function(i, e) {
                $(e).css("left", width_gallery_item * (i % 3));
                $(e).css("top", height_gallery_item * Math.floor(i / 3));
            })
            $("#gallery").css("height", height_gallery_item * 1);
        } else if (filter_index == 3) {
            $.each($("#gallery .gallery-item:not(.supplies)"), function(i, e) {
                $(e).addClass("hide").removeClass("show").siblings(".supplies").addClass("show").removeClass("hide");
            })
            $.each($("#gallery .gallery-item.supplies"), function(i, e) {
                $(e).css("left", width_gallery_item * (i % 3));
                $(e).css("top", height_gallery_item * Math.floor(i / 3));
            })
            $("#gallery").css("height", height_gallery_item * 2);
        } else if (filter_index == 4) {
            $.each($("#gallery .gallery-item:not(.accessories)"), function(i, e) {
                $(e).addClass("hide").removeClass("show").siblings(".accessories").addClass("show").removeClass("hide");
            })
            $.each($("#gallery .gallery-item.accessories"), function(i, e) {
                $(e).css("left", width_gallery_item * (i % 3));
                $(e).css("top", height_gallery_item * Math.floor(i / 3));
            })
            $("#gallery").css("height", height_gallery_item * 1);
        } else if (filter_index == 5) {
            $.each($("#gallery .gallery-item:not(.food)"), function(i, e) {
                $(e).addClass("hide").removeClass("show").siblings(".food").addClass("show").removeClass("hide");
            })
            $.each($("#gallery .gallery-item.food"), function(i, e) {
                $(e).css("left", width_gallery_item * (i % 3));
                $(e).css("top", height_gallery_item * Math.floor(i / 3));
            })
            $("#gallery").css("height", height_gallery_item * 1);
        }
    }

    $(window).on("resize", resizeGallery);
})