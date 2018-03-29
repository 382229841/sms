;
(function($,document,window,undefine){
    /**
     * top-left下拉菜单
     */
    $(".topmenu-div").hover(function(){
        var self = $(this);
        var topmenuBtn = self.find(".topmenu-btn");

        self.find('.topmenu').show();
        $(topmenuBtn).css({
            "margin-top": "7px",
            "transform":"rotate(45deg)",
            "-ms-transform":"rotate(45deg)",
            "-moz-transform":"rotate(45deg)",
            "-webkit-transform":"rotate(45deg)",
            "-o-transform":"rotate(45deg)",
        });
    },function(){
        var self = $(this);
        self.find('.topmenu-btn').css({
            "margin-top": "0",
            "transform":"rotate(225deg)",
            "-ms-transform":"rotate(225deg)",
            "-moz-transform":"rotate(225deg)",
            "-webkit-transform":"rotate(225deg)",
            "-o-transform":"rotate(225deg)",
        });
        self.find('.topmenu').hide();
    });
})(jQuery,document,window);



function goToTab(obj) {
    window.location.href = obj.href;
}
function toPage(obj, pn, ps) {
    var subAccountIdx = $("#subAccountIdx").val();
    if(typeof subAccountIdx == 'undefined'){
        subAccountIdx = '';
    }
    pathname = window.location.pathname;
    window.location.href = pathname + "?pageNo=" + pn + "&pageSize=" + ps + "&subAccountIdx=" + subAccountIdx;
}

function searchTemplatePage(obj, pn, ps) {
    var tpl_id = $("#tpl_id").val();
    var keyword = encodeURIComponent($("#keyword").val());
    pathname = window.location.pathname;
    window.location.href = pathname + "?pageNo=" + pn + "&pageSize=" + ps + "&tpl_id=" + tpl_id + "&keyword=" + keyword;
}

function searchSmsPage(obj, pn, ps) {
    var startDay = $("#startDay").val();
    var endDay = $("#endDay").val();
    var mobile = $.trim($("#mobile").val());
    var status = $("#status").val();
    var subAccountIdx = $("#subAccountIdx").val();
    if(typeof subAccountIdx == 'undefined'){
        subAccountIdx = '';
    }
    pathname = window.location.pathname;
    window.location.href = pathname + "?pageNo=" + pn + "&pageSize=" + ps + "&startDay=" + startDay
        + "&endDay=" + endDay + "&mobile=" + encodeURIComponent(mobile)
        +"&status="+status + "&subAccountIdx=" + subAccountIdx;
}

function searchSmsReplyPage(obj, pn, ps) {
    var subAccountIdx = $("#subAccountIdx").val();
    if(typeof subAccountIdx == 'undefined'){
        subAccountIdx = '';
    }
    pathname = window.location.pathname;
    window.location.href = pathname + "?pageNo=" + pn + "&pageSize=" + ps + "&subAccountIdx=" + subAccountIdx;
}

function searchSendFailurePage(obj, pn, ps) {
    var startTime = $("#startTime").val();
    var endTime = $("#endTime").val();
    var errorCode = $("#errorCode").val();
    var api = $("#api").val();
    var subAccountIdx = $("#subAccountIdx").val();
    if(typeof subAccountIdx == 'undefined'){
        subAccountIdx = '';
    }
    pathname = window.location.pathname;
    window.location.href =
        pathname + "?pageNo=" + pn + "&pageSize="
        + ps + "&startTime=" + startTime
        + "&endTime=" + endTime
        + "&errorCode=" + errorCode + "&api=" + api + "&subAccountIdx=" + subAccountIdx;
}

function searchActivityPage(obj, pn, ps) {
    var startTime = $("#startTime").val();
    var endTime = $("#endTime").val();
    var status = $("#status").val();
    var subAccountIdx = $("#subAccountIdx").val();
    if(typeof subAccountIdx == 'undefined'){
        subAccountIdx = '';
    }
    pathname = window.location.pathname;
    window.location.href =
        pathname + "?pageNo=" + pn + "&pageSize="
        + ps + "&startTime=" + startTime
        + "&endTime=" + endTime
        + "&status=" + status + "&subAccountIdx=" + subAccountIdx;
}

$(document).ready(function () {
    var pathname = window.location.pathname;
    var start = pathname.lastIndexOf("/") + 1;
    var filename = pathname.substring(start);
    var idx = -1;
    if (filename == "account_setting") {
        idx = 0;
    }
    else if (filename == "sms_test") {
        idx = 1;
    }
    else if (filename == "sms_batch"||filename=="sms_batch_result") {
        idx = 2;
    }
    else if (filename == "sms_record" || filename == "sms_reply"
        || filename == "sms_daily" || filename == "sms_failure"
        || filename == "sms_receive" || filename == "voice_sms_record") {
        idx = 3;
    }
    else if (filename == "black_setting") {
        idx = 4;
    }
    else if (filename == "tpl_setting") {
        idx = 5;
    }
    else if (filename == "sign_setting") {
        idx = 6;
    }
    if (idx >= 0) {
        $("#menu-0"+idx).addClass("active");
    }
})

//var hasOwnPrice = "$!hasOwnPrice";

var hasOwnPrice = footerdata.hasOwnPrice;
var prices = [{
    threshold: 0,
    price: 0.055
},{
    threshold: 50000,
    price: 0.053
},{
    threshold: 100000,
    price: 0.05
}];

if(hasOwnPrice === true){
    prices = [{
        threshold: 0,
        price: footerdata.price
    }];
}

var getPrice = function(smsNum){
    var len = prices.length;
    var match;
    for(var i=0; i<len; i++){
        var price = prices[i];
        if(smsNum >= price.threshold){
            match = price;
        }else {
            break;
        }
    }
    return match.price;
}

var selector = ".yp-container";
$(document).ready(function () {

    var taocan = {
        init: function(){
            var taocanContainer = $("#taocan");
            $(".taocan-custom-container").show();

            taocanContainer.find("tr").hover(function(){
                $(this).find(".taocan-counter").show();
            }, function(){
                $(this).find(".taocan-counter").hide();
            })
            taocanContainer.find(".taocan-item").click(function(){
                var _this = $(this);

                if(_this.hasClass("money")) {
                    $('#money_count_msg').html('');
                    var counter = $('#money_count').val();


                    if(isNaN(counter) || counter > 50000 || counter < 50){
                        $('#money_count_msg').html('请输入50～50000之间的数字');
                        return false;
                    }

                    // var url = "/alipay/paymoney?cnt="+counter+"&from=chargeDialog.cnt";
                    var url = "/alipay/pay_view?money="+counter;
                    window.open(url, '_blank');
                }else if(_this.hasClass("custom")){
                    var custom = $(".custom-input").val();
                    var url = "/alipay/paymethod?smsNum="+custom+"&from=chargeDialog.custorm";
                    window.open(url, '_blank');
                }else{
                    var counter = $(this).parents("tr").find(".taocan-counter input").val();
                    var smsNum = $(this).data("sms");
                    var url = "/alipay/paymethod?smsNum="+smsNum+"&cnt="+counter+"&from=chargeDialog.cnt";
                    window.open(url, '_blank');
                }
                return false;
            });

            $(".custom-input").keydown(function(event){
                var which = event.which;
                var _this = $(this);
                if((which >= 48 && which <= 57) || (which>=96 && which <= 105) || which < 48){
                    if(which == 38 || which == 40){
                        var val = _this.val();
                        if(isNaN(val) || val == ''){
                            val = '1000';
                        }
                        val = parseInt(val);
                        if(which == 38){
                            val = val +1000;
                        }else{
                            val = val-1000;
                        }
                        if(val < 1000){
                            val = 1000;
                        }
                        _this.val(val);
                        return false;
                    }
                }else{
//						console.log(which);
                    return false;
                }
            }).blur(function(){
                var _this = $(this);
                var val = $.trim(_this.val());
            if(isNaN(val) || val == '' || val == '0' || parseInt(val) < 1000){
                $(this).val('1000');
            }else {
                val = parseInt(val);
                $(this).val(val);
            }
            _this.keyup();
        }).keyup(function(){
        var _this = $(this);
        var val = parseInt($.trim(_this.val()));
    var changed = false;
    if(val > 10000000){
        val = 10000000;
        changed = true;
    }
    if(changed){
        $(this).val(val);
    }
    var smsCount = val;

    var money = Math.round( getPrice(smsCount)* smsCount * 100 )/100;
    _this.parents("tr").find(".taocan-money").text(money);
});

taocanContainer.find(".taocan-counter input").keydown(function(event){
    var which = event.which;
    var _this = $(this);
    var max = parseInt(_this.data("max"));
    if((which >= 48 && which <= 57) || (which>=96 && which <= 105) || which < 48){
        if(which == 38 || which == 40){
            var val = _this.val();
            if(isNaN(val) || val == ''){
                val = '1';
            }
            val = parseInt(val);
            if(which == 38){
                val = val +1;
            }else{
                val = val-1;
            }
            if(val < 1){
                val = 1;
            }
            if(val > max){
                val  = max;
            }
            _this.val(val);
            return false;
        }
    }else{
//						console.log(which);
        return false;
    }
}).blur(function(){
    var _this = $(this);
    var max = parseInt(_this.data("max"));
    var val = $.trim(_this.val());
if(isNaN(val) || val == '' || val == '0'){
    $(this).val('1');
}else {
    val = parseInt(val);
    if(val > max){
        val = max;
    }
    $(this).val(val);
}
_this.keyup();
}).keyup(function(event){
    var _this = $(this);
    var max = parseInt(_this.data("max"));
    var val = parseInt($.trim(_this.val()));
var changed = false;
if(val < 1){
    val = 1;
    changed = true;
}
if(val > max){
    val =  max;
    changed = true;
}
if(changed){
    $(this).val(val);
}
var sms =parseInt( _this.data("sms") );
var smsCount = sms * val;

var money = Math.round( getPrice(smsCount)* smsCount * 100 )/100;
_this.parents("tr").find(".taocan-money").text(money);
});

}
};

$("#chargeBtn").click(function () {
    $.centerDialog({
        width: 610,
        //id: 'chargeDialog',
        height: 450,
        content: $("#charge").html()
    });
taocan.init();
});

$("#menu-charge-link").click(function () {
    $("#chargeBtn").click();
});

var minHeight = 500;
var _resize = function(){
//        	var rightHeight = $(".yp-content-right").height() + 40;
//        	if(rightHeight < minHeight){
//        		rightHeight = minHeight;
//        	}
//        	$(".yp-content-left").css({height: rightHeight});
}

$(window).resize(function(){
    _resize();
});

_resize();

var oldShowFunc = $.fn.show;
var oldHideFunc = $.fn.hide;

$.fn.show = function(speed, oldCallback) {
    return $(this).each(function() {
        var obj = $(this);
        if(oldShowFunc && typeof(oldShowFunc) === 'function'){
            oldShowFunc.apply(obj, [speed, oldCallback]);
        }
        _resize();
    });
}

    $.fn.hide = function(speed, oldCallback) {
    return $(this).each(function() {
        var obj = $(this);
        if(oldHideFunc && typeof(oldHideFunc) === 'function'){
            oldHideFunc.apply(obj, [speed, oldCallback]);
        }
        _resize();
    });
}
});

$(document).ready(function () {

    $(".collapse-sms-menu-item").click(function(){
        $(this).parents("li").toggleClass("open");
    });

    $(".right-menu-dropdown").hover(function(){
        $(this).find(".yp-menu-dropdown-list").addClass("open");
    }, function(){
        $(this).find(".yp-menu-dropdown-list").removeClass("open");
    });
})
