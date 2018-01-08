$(function () {
     var winWidth=$(window).width();
    $('html').css({
        fontSize:winWidth/750*100+'px'
    });
    // 遮罩层
    var $close = $('.close'),
        $modal = $('.modal');
    $close.on('click', function () {
        $modal.hide();
    });
    var $text = $('.text');
    $text.css({
        'background':'url("./images/18feiyong.png") no-repeat center top',
        'backgroundSize': '100%'
    });
});