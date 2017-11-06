/**
 * Created by guoha on 2017/10/29.
 */
$('.packUpBtn').on('click',function () {
   $(this).parents('aside').toggleClass('packUp');
});

$('.menu').on('click',function () {
    $(this).toggleClass('active');
    $(this).parent().find('ul').toggle();
});

/*
 * 支付方式切换
 */
$('.payType dt').on('click',function () {
    var idx = $(this).index();
    $('.payType dt').removeClass('current');
    $(this).addClass('current');

    $('.qrcode img').hide();
    $('.qrcode img').eq(idx).show();
});

/*
 * 马上认购
 */
$('.msrgBtn').on('click',function () {
    $('._3-1').hide();
    $('._3-2').show();
});

/*
 * 下拉选择
 */
$('.status, .kind').on('click',function () {
    $(this).toggleClass('show');
});

/*
 * 选择
 */
$('.status li').on('click',function () {
    var idx = $(this).index();
    $('.status li').removeClass('active');
    $(this).addClass('active');
    $('.status span').text($(this).text());

    switch (idx){
        case 0:
            $('.item').show();
            break;
        case 1:
            $('.item').hide();
            $('.unbinding').parent().show();
            break;
        case 2:
            $('.item').hide();
            $('.trying').parent().show();
            break;
        case 3:
            $('.item').hide();
            $('.binding').parent().show();
            break;
        case 4:
            $('.item').hide();
            $('.payed').parent().show();
            break;

    }
});

var changeImage = function($this) {
    var file = $this[0].files[0];
    console.log(file)
    var img = $this.parent().find('img');
    if((file.size/1024).toFixed(1)>300) {
        alert('不超过300KB');
        return;
    }
    if (window.FileReader) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function (e) {
            img.attr('src',e.target.result);
        };
    }
};

$('.plus').on('click',function () {
    $(this).prev('input').trigger('click');
});


var map;
function initMap(id){
    createMap(id);//创建地图
    setMapEvent();//设置地图事件
    addMapControl();//向地图添加控件
    addMapOverlay();//向地图添加覆盖物
}
function createMap(id){
    map = new BMap.Map(id);
    map.centerAndZoom(new BMap.Point(113.271431,23.135336),11);
}
function setMapEvent(){
    map.enableScrollWheelZoom();
    map.enableKeyboard();
    map.enableDragging();
    map.enableDoubleClickZoom()
}
function addClickHandler(target,window){
    target.addEventListener("click",function(){
        target.openInfoWindow(window);
    });
}
function addMapOverlay(){
}
//向地图添加控件
function addMapControl(){
    var scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
    scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
    map.addControl(scaleControl);
    var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
    map.addControl(navControl);
    var overviewControl = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:true});
    map.addControl(overviewControl);
}

if(document.location.href.split('?step=')[1]!=undefined){
    $('.step').hide();
    $('.step'+document.location.href.split('?step=')[1]).show();
}
else{
    $('.step0').show();
}