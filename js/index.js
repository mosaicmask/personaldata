$(document).ready(function () {
    dynamicLines();
    exampleTabs();
    swiper();
    signboardGirl();
    listeningHeight();
})

//swiper js
function swiper() {
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        slidesPerView: 2,
        spaceBetween: 20,
        autoplay: true, //可选选项，自动滑动
        speed: 1500,
        autoplay: {
            delay: 5000, //5秒切换一次
        },

        // 如果需要滚动条
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: true,
            draggable: false,
            snapOnRelease: true,
            dragSize: 200,
        },
    })
}

//监听高度
function listeningHeight() {
    let my_width = $('#my_body').width();
    // console.log("listeningHeight -> my_width", my_width)
    $(window).scroll(function () {
        var scroH = $(document).scrollTop(); //滚动高度
        var viewH = $(window).height(); //可见高度 
        // var contentH = $(document).height(); //内容高度
        // console.log("listeningHeight -> scroH", scroH)
        // console.log("listeningHeight -> viewH", viewH)
        // console.log("listeningHeight -> contentH", contentH)

        // 导航栏
        if (scroH >= 100) {
            $("#top_nav").css("background-color", "#2e2e2e")
        } else {
            $("#top_nav").css("background-color", "#535353")
        }
        //侧边导航栏
        if (scroH < 100) {
            $("#right_nav_ul li a").not($("#right_nav_ul li:eq(0)")).css({
                "background-color": "#fff",
                "color": "#000"
            })
            $("#right_nav_ul li:eq(0) a").css({
                "background-color": "#2dceff",
                "color": "#fff"
            })
        }
        if (scroH >= 700) {
            $("#right_nav_ul li a").not($("#right_nav_ul li:eq(1)")).css({
                "background-color": "#fff",
                "color": "#000"
            })
            $("#right_nav_ul li:eq(1) a").css({
                "background-color": "#2dceff",
                "color": "#fff"
            })
        }
        if (scroH >= 1500) {
            $("#right_nav_ul li a").not($("#right_nav_ul li:eq(2)")).css({
                "background-color": "#fff",
                "color": "#000"
            })
            $("#right_nav_ul li:eq(2) a").css({
                "background-color": "#2dceff",
                "color": "#fff"
            })
        }
        if (scroH >= 2100) {
            $("#right_nav_ul li a").not($("#right_nav_ul li:eq(3)")).css({
                "background-color": "#fff",
                "color": "#000"
            })
            $("#right_nav_ul li:eq(3) a").css({
                "background-color": "#2dceff",
                "color": "#fff"
            })
        }
        if (scroH >= 3100) {
            $("#right_nav_ul li a").not($("#right_nav_ul li:eq(4)")).css({
                "background-color": "#fff",
                "color": "#000"
            })
            $("#right_nav_ul li:eq(4) a").css({
                "background-color": "#2dceff",
                "color": "#fff"
            })
        }

        // 欢迎页张开合并以及隐藏
        $('#my_body').css("width", my_width - scroH)
        if (scroH >= 800) {
            $("#my_body div").fadeOut();
        } else {
            $("#my_body div").fadeIn();
        }

        // 技能展示图标
        if (scroH + viewH >= 1800 && scroH + viewH <= 2370) {
            $(".skill_img img").slideDown();
        } else {
            $(".skill_img img").slideUp();
        }
    });
}

//看板娘
function signboardGirl() {
    L2Dwidget.init({
        "model": {
            jsonPath: "https://unpkg.com/live2d-widget-model-shizuku/assets/shizuku.model.json",
            "scale": 1
        },
        "display": {
            "position": "right",
            "width": 100,
            "height": 150,
            "hOffset": 0,
            "vOffset": -27
        },
        "mobile": {
            "show": true,
            "scale": 0.5
        },
        "react": {
            "opacityDefault": 0.7,
            "opacityOnHover": 0.3
        }
    });
}

//bootstrap 标签页
function exampleTabs() {
    $('#myTabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    })

    $('#myTabs a[href="#profile"]').tab('show') // Select tab by name
    $('#myTabs a:first').tab('show') // Select first tab
    $('#myTabs a:last').tab('show') // Select last tab
    $('#myTabs li:eq(2) a').tab('show') // Select third tab (0-indexed)
}

//背景线条
function dynamicLines() {
    function n(n, e, t) {

        // getAttribute() 方法通过名称获取属性的值。
        return n.getAttribute(e) || t

    }

    function e(n) {

        // getElementsByTagName() 方法可返回带有指定标签名的对象的集合。
        return document.getElementsByTagName(n)

    }

    function t() {

        var t = e("script"),
            o = t.length,
            i = t[o - 1];

        return {

            l: o,
            z: n(i, "zIndex", -1),
            o: n(i, "opacity", .5),
            c: n(i, "color", "0,0,0"),
            n: n(i, "count", 99)

        }

    }

    function o() {

        a = m.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,

            c = m.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

    }

    function i() {

        r.clearRect(0, 0, a, c);

        var n, e, t, o, m, l;

        s.forEach(function (i, x) {

                for (i.x += i.xa, i.y += i.ya, i.xa *= i.x > a || i.x < 0 ? -1 : 1, i.ya *= i.y > c || i.y < 0 ? -1 : 1, r.fillRect(i.x - .5, i.y - .5, 1, 1), e = x + 1; e < u.length; e++) n = u[e],

                    null !== n.x && null !== n.y && (o = i.x - n.x, m = i.y - n.y,

                        l = o * o + m * m, l < n.max && (n === y && l >= n.max / 2 && (i.x -= .03 * o, i.y -= .03 * m),

                            t = (n.max - l) / n.max, r.beginPath(), r.lineWidth = t / 2, r.strokeStyle = "rgba(" + d.c + "," + (t + .2) + ")", r.moveTo(i.x, i.y), r.lineTo(n.x, n.y), r.stroke()))

            }),

            x(i)

    }

    var a, c, u, m = document.createElement("canvas"),

        d = t(),
        l = "c_n" + d.l,
        r = m.getContext("2d"),

        x = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||

        function (n) {

            window.setTimeout(n, 1e3 / 45)

        },

        w = Math.random,
        y = {
            x: null,
            y: null,
            max: 2e4
        };
    m.id = l, m.style.cssText = "position:fixed;top:0;left:0;z-index:" + d.z + ";opacity:" + d.o, e("body")[0].appendChild(m), o(), window.οnresize = o,

        window.onmousemove = function (n) {

            n = n || window.event, y.x = n.clientX, y.y = n.clientY

        },

        window.onmouseout = function () {

            y.x = null, y.y = null

        };

    for (var s = [], f = 0; d.n > f; f++) {

        var h = w() * a,
            g = w() * c,
            v = 2 * w() - 1,
            p = 2 * w() - 1;
        s.push({
            x: h,
            y: g,
            xa: v,
            ya: p,
            max: 6e3
        })

    }

    u = s.concat([y]),

        setTimeout(function () {
            i()
        }, 100)
}