/**
 * ITCAST WEB
 * Created by zhousg on 2016/12/29.
 */
$(function(){

    /*
    * �ֲ�ͼ
    * 1.�Զ��ֲ�
    * 2.���Զ�����
    * 3.���ƻ���  �һ� ��һ��  �� ��һ��
    * */

    /*��ȡ��Ҫ������dom*/
    var $banner = $('.sn_banner');
    /*��ȡ���*/
    var width = $banner.width();
    /*��ȡͼƬ����*/
    var $imgBox = $banner.find('ul:eq(0)');
    /*��ȡ�����*/
    var $point = $banner.find('ul:last');
    /*���еĵ�*/
    var $lis = $point.children();

    var animateFuc = function(callback){
        /*����*/
        $imgBox.animate({'transform':'translateX('+(-index*width)+'px)'},200,'linear',function(){
            if(index >= 9){
                index = 1;
                /*˲�䶨λ*/
                $imgBox.css({'transform':'translateX('+(-index*width)+'px)'});
            }else if(index <= 0){
                index = 8;
                /*˲�䶨λ*/
                $imgBox.css({'transform':'translateX('+(-index*width)+'px)'});
            }

            /*index�ķ�Χ  1-8*/
            /*2.���Զ�����*/
            $lis.removeClass('active').eq(index-1).addClass('active');

            /*��������  ���϶�ʱ��*/
            callback && callback();
        });
    }

    /*1.�Զ��ֲ�*/
    var index = 1;
    var timer = setInterval(function(){
        index ++;

        animateFuc();

    },5000);


    /*3.���ƻ���*/
    $imgBox.on('swipeLeft', function () {
        /*�� ��һ��*/
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
        /*�һ� ��һ��*/
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