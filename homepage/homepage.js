// 景点攻略部分
$(function () {
    m = 0;
    s = setTimeout(carol, 100);

    function carol() {
        m += 10;
        $(".slider").css("marginTop", -m + "px");
        if (m == 360 || m == 720) { //到达360、720的时候，轮播图片将停止一下
            setTimeout(carol, 2000);
        } else if (m >= 1080) {
            m = 0;
            s = setTimeout(carol, 2000);
        } else {
            s = setTimeout(carol, 100);
        }
    }

});

// 旅行分享部分
$(function () {
    $('#myCarousel').carousel({
        //轮播间隔时间5s
        interval: 3000,
        wrap: true
    })
})

//视觉风景部分
$(function () {
    document.getElementById("rightButton").addEventListener("click", function () {
        document.getElementById("picWrap").scrollLeft += 200;
    });
    document.getElementById("leftButton").addEventListener("click", function () {
        document.getElementById("picWrap").scrollLeft -= 200;
    });
})