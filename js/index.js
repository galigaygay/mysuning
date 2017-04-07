/**
 * ITCAST WEB
 * Created by zhousg on 2016/12/29.
 */
$(function(){

    /*
    * 轮播图
    * 1.自动轮播
    * 2.点自动滚动
    * 3.手势滑动  右滑 上一张  左滑 下一张
    * */

    /*获取需要操作的dom*/
    var $banner = $('.sn_banner');
    /*获取宽度*/
    var width = $banner.width();
    /*获取图片盒子*/
    var $imgBox = $banner.find('ul:eq(0)');
    /*获取点盒子*/
    var $point = $banner.find('ul:last');
    /*所有的点*/
    var $lis = $point.children();

    var animateFuc = function(callback){
        /*动画*/
        $imgBox.animate({'transform':'translateX('+(-index*width)+'px)'},200,'linear',function(){
            if(index >= 9){
                index = 1;
                /*瞬间定位*/
                $imgBox.css({'transform':'translateX('+(-index*width)+'px)'});
            }else if(index <= 0){
                index = 8;
                /*瞬间定位*/
                $imgBox.css({'transform':'translateX('+(-index*width)+'px)'});
            }

            /*index的范围  1-8*/
            /*2.点自动滚动*/
            $lis.removeClass('active').eq(index-1).addClass('active');

            /*动画结束  加上定时器*/
            callback && callback();
        });
    }

    /*1.自动轮播*/
    var index = 1;
    var timer = setInterval(function(){
        index ++;

        animateFuc();

    },5000);


    /*3.手势滑动*/
    $imgBox.on('swipeLeft', function () {
        /*左滑 下一张*/
        index ++;

        clearInterval(timer);

        animateFuc(function(){
            clearInterval(timer);
            timer = setInterval(function(){
                index ++;

                animateFuc();

            },5000);
        });
    })

    $imgBox.on('swipeRight', function () {
        /*右滑 上一张*/
        index --;

        clearInterval(timer);

        animateFuc(function(){
            clearInterval(timer);
            timer = setInterval(function(){
                index ++;

                animateFuc();

            },5000);
        });
    })


});