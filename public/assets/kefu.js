/**
 * Created by lsy on 2016/10/25.
 */
$(document).ready(function () {
    var isMeiqiaOpen = true;
    function yourFunction(msg) {
        var text = '',
            num = 0;
        if (msg === 'hasBeenRead') { // 消息已被阅读
            num = 0;
        } else if (typeof(msg) === 'object') {
            var unreadNum = document.getElementById('unreadNum').innerHTML,
                lastMsg = msg[msg.length - 1];
            num = isNaN(+unreadNum) ? msg.length : +unreadNum + msg.length;
            // content_type 是消息的类型， text（文字）、photo（图片）、file（文件）
            // content 是消息的内容
            if (lastMsg.content_type === 'text') {
                // 文字消息中可能会存在表情图片，由于路径问题，将文字消息中的图片处理为文字'[表情]'
                text = lastMsg.content.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, '[表情]');
            } else if (lastMsg.content_type === 'photo') {
                text = '[图片]';
            } else if (lastMsg.content_type === 'file') {
                text = '[文件]';
            } else {
                text = '[新消息]';
            }
        }

        if (isMeiqiaOpen && num > 0) {
            $("#unreadNum").show();
        } else {
            $("#unreadNum").hide();
        }
        // 未读消息数量
        document.getElementById('unreadNum').innerHTML = num;
    }
    (function(m, ei, q, i, a, j, s) {
        m[i] = m[i] || function() {
                (m[i].a = m[i].a || []).push(arguments)
            };
        j = ei.createElement(q),
            s = ei.getElementsByTagName(q)[0];
        j.async = true;
        j.charset = 'UTF-8';
        j.src = '//static.meiqia.com/dist/meiqia.js';
        s.parentNode.insertBefore(j, s);
    })(window, document, 'script', '_MEIQIA');
    //美洽企业id
    _MEIQIA('entId', 30951);
    //不用美洽的btn
    _MEIQIA('withoutBtn');
    //初始化美洽
    _MEIQIA('init');
    // 获取未读消息
    _MEIQIA('getUnreadMsg', yourFunction);

    (function($,window,document,undefined){
        var goMeiqia = true;

        //一半跳美洽,一半跳qq
        function meiqiaAndqq () {
            var random = Math.random()*10;
            var goto = true
            //小于5的时候去美洽
            if(random < 5) {
                goto = true;
            } else {
                goto = false;
            }

            if(window.navigator.userAgent.indexOf("Mac")>-1) {
                goto = true
            }
            return goto
        }

        try {
            $.ajax({
                type:"GET",
                dataType:"json",
                data: {key: "CUSTOMER_SERVICE_SWITCH"},
                url:"/ecTool/globalVar",
                success: function (ret) {
                    if(!ret.code) {
                        switch (ret.data.value) {
                            case "1":
                                goMeiqia = true;
                                break;
                            case "2":
                                goMeiqia = false;
                                break;
                            case "3":
                                goMeiqia = $.cookie('goMeiqia');
                                if(goMeiqia == undefined || goMeiqia == null) {
                                    goMeiqia = meiqiaAndqq();
                                } else {
                                    goMeiqia = goMeiqia == "true" ? true : false
                                }
                                break;
                        }

                        if (!goMeiqia) {
                            $(".kefuqqmac").attr('target', '_blank');
                            isMeiqiaOpen = false;
                        }

                        $.cookie('goMeiqia', goMeiqia, { 'expires': 30 , path: '/'});
                        meiqiaLinks();
                    }
                },
                error: function () {
                    meiqiaLinks();
                }
            });
        } catch (err) {
            meiqiaLinks();
        };

        function meiqiaLinks() {
            if (goMeiqia) {
//        $('.kefuqqmac').attr('href','http://wpa.qq.com/msgrd?V=3&uin=2878204658');
                var href = "https://static.meiqia.com/dist/standalone.html?eid=30951&metadata=";
                var number = getRandom(999);
                var data = {
                    'age': number,
                };
                function getRandom(n){
                    return Math.floor(Math.random()*n+1)
                }
                function stopDefAction(evt) {
                    evt.preventDefault();
                }
                var kefus = document.getElementsByClassName("kefuqqmac");

                for (var i = 0; i < kefus.length; i++) {
                    kefus[i].addEventListener('click', stopDefAction, false);
                }
                // $(".kefuqqmac").attr("href",'#');

                $(".kefuqqmac").click(function () {
                    try {

                        _MEIQIA('showPanel');
                        $("#MEIQIA-PANEL-HOLDER").css({'z-index': 99999, 'visibility': 'visible'});
                        $("#MEIQIA-IFRAME").show();
                    }
                    catch(e) {
                        console.error('err:', e)
                    }
                });

                $.ajax({
                    type:"GET",
                    dataType:"json",
                    url:"/ecTool/getUser",
                    success:function(result){
                        if(result.code==0) {
                            if(result.user.superUser || result.user.seniorUser){
                                // href = 'https://static.meiqia.com/dist/standalone.html?eid=30951&groupid=0d20ab23ab4702939552b3f81978012f&metadata=';
                                _MEIQIA('assign', {
                                    groupToken: '0d20ab23ab4702939552b3f81978012f'
                                });
                            }
                            data = {
                                'name': result.user.company,
                                'age': number,
                            }

                            data = JSON.stringify(data);
                            href  = href+data;

                            _MEIQIA('metadata', data);

                            $(".kefuqqmac").click(function () {
                                _MEIQIA('showPanel');
                            });

                            //问卷调查跳转参数加上
                            var inviteCode = result.user.inviteCode;
                            $('.wenjuandiaocha').attr('href','https://www.wenjuan.com/s/EzEJZn/?user=' + inviteCode + '&repeat=1');


                            var newdate = new Date();
                            var gmtCreated = new Date(result.user.gmtCreated);
                            newdate.setFullYear(2016,2,29);
                            var link = $("a");
                            var api;
                            if(gmtCreated.getTime()<newdate.getTime()){
                                for(var i=0;i<link.length;i++){
                                    api = $(link[i]).attr("href");
                                }
                            }
                        }
                    },
                    error:function(){
                        data = JSON.stringify(data);
                        href  = href+data;
                        $(".kefuqqmac").attr("href",href);
                    }
                });

                $.ajax({
                    type:"GET",
                    dataType:"json",
                    url:"/ecTool/getSubAccounts",
                    success:function(result){
                        if(result.code==0){
                            if(result.subAccounts.length>0){
                                var newdate = new Date();
                                var gmtCreated = new Date(result.subAccounts[0].gmtCreated);
                                newdate.setFullYear(2016,2,29);
                                var link = $("a");
                                var api;
                                if(gmtCreated.getTime()<newdate.getTime()){
                                    for(var i=0;i<link.length;i++){
                                        api = $(link[i]).attr("href");
                                    }
                                }
                            }
                        }
                    },
                    error:function(){},
                });
            }
        }
    })(jQuery,window,document);
})