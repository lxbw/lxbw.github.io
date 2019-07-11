(function($){
    //自定义插件
    $.fn.scrollList = function (options) {
        var obj = options ? options : {};
        var limit = obj.limit ? obj.limit : 4;
        //默认值页面中显示几个项目
        var speed = obj.speed ? obj.speed : 3000;
        //默认值滚动的速度
        var type = obj.type ? obj.type : 0;//滚动的形式


        //获取其中的一个项目元素对象
        var itemEle = $(this).children().first();
        //获取项目元素的高度
        var itemHeight = itemEle.outerHeight() +
            parseFloat(itemEle.css("margin-top")) +
            parseFloat(itemEle.css("margin-bottom"));

        //设置包裹元素的高度
        $(this).height(itemHeight * limit);
        var that = $(this);
        //判断滚动的动画形式
        switch (type) {
            case 1:
                setInterval(function () {
                    that.children().last().fadeTo(0,0).
                        prependTo(that).slideDown(400).fadeTo(600,1);
                }, speed);
                break;
            case 2:
                that.children().slice(limit).hide();
                setInterval(function(){
                    that.children().eq(limit-1).
                    fadeOut(600,function(){
                        that.children().last().prependTo(that).delay(200).
                        slideDown(400)
                    })
                },speed)
                break;
            default:
                setInterval(function () {
                    that.children().last().hide().
                        prependTo(that).slideDown(500);
                }, speed);
                break;
        }


    }
})(jQuery)