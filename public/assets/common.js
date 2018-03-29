(function(window,document,$,undefined){
    if (typeof(console) !== 'undefined' && console && console.log && typeof(console.log) == 'function') {
        console.log('Hi，很高兴从这里见到你！');
        console.log('没错，我们正在招聘攻城师！');
        console.log('如果您对我们的网站感兴趣，那就赶紧加入我们吧！');
        console.log('详情请戳: http://weibo.com/1652148572/AyOkU9ELW#Pl_Core_Nav__2');
        console.log('邮件标题记得加上: _console_ ');
    }

    if(window.location.hostname === 'yunpian.com' || window.location.hostname === 'api.taovip.com')
        window.location.hostname = "www.yunpian.com";

    var topItems = $('.top-item');
    topItems.click(function(e) {
        e.stopPropagation();
        e.preventDefault();

        var item = $(this);
        var list = $(this.parentElement).find('ul');
        var trangle = $(this.parentElement).find('.toggle-icon');
        
        if(item.hasClass('active')) {
            item.removeClass('active');
            list.removeClass('active');
            trangle.removeClass('active');
        }
        else {
            item.addClass('active');
            list.addClass('active');
            trangle.addClass('active');
        }
    });
})(window,document,jQuery);