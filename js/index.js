$(document).ready(function () {
    $('#myTabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    })

    $('#myTabs a[href="#profile"]').tab('show') // Select tab by name
    $('#myTabs a:first').tab('show') // Select first tab
    $('#myTabs a:last').tab('show') // Select last tab
    $('#myTabs li:eq(2) a').tab('show') // Select third tab (0-indexed)

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
})