/**
 * register $.centerDialog
 * @param conf is a dict. Fields are width(Number), height(Number), content(HTML[include iframe]), id(just fix the id rule of html element), close(function)
 *        <br/> id for keeping the dialog after you close it. when open a same Id of the hidden before, it will be show again.
 * @api close() for close the dialog
 * @api resize(config) for resize the dialog. config like {width: 400, height:600}, width and height must be at least one was set.
 * @callback close() to be invoked before the dialog closing, return a false(boolean) can stop the dialog to close.
 * @author jiacheo
 */
(function ($) {

    var className = "center-dialog";

    $.centerDialog = function (conf) {
        var config = conf || {};
        var width = config.width || 500;
        var height = config.height || 300;
        var content = config.content;
        var closeFunc = config.close || function () {
        };
        var resize = config.resize || function () {
        };
        var id = config.id
        if (id) {
            id = 'center-dialog-' + id;
        } else {
            id = ('center-dialog-' + new Date().getTime());
        }
        if (!content) {
            return;
        }

        //var exist = $("#" + id);
        //if (exist.size() > 0) {
        //    exist.fadeIn();
        //    return;
        //}
        var box = $("<div id='" + id + "'></div>");
        box.css({
            position: "fixed",
            height: 296,
            width: "100%",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 2048
        });
        var fade = $("<div></div>");
        fade.css({
            position: "absolute",
            height: $(window).height(),
            width: "100%",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 2048,
            opacity: 0.6,
            backgroundColor: '#000'
        });

        var div = $("<div  class='" + className + "'></div>");
        div.css('position', 'absolute');
        div.css('background-color', 'white');
        div.css('zIndex', 2049);
        div.css({width: width});
        var w = $(window);
        div.append("<div style='width:100%;height: 50px;background-color: #f7f9fb;'><span title='点此关闭' style='float:right;margin-right:10px;cursor:pointer;font-size:18px;position: relative;z-index: 10000;' class='center-dialog-close-btn'>×</span><div style='clear:both;'></div></div>")
        var contentContainer = $("<div></div>");
        contentContainer.css('padding', '0px');
        contentContainer.append(content);
        div.append(contentContainer);
        div.find('.center-dialog-close-btn').click(function () {

            if (typeof(closeFunc) == 'function') {
                var result = closeFunc();
                if (typeof(result) == 'boolean' && result == false) {
                    return;
                }
            }

            box.fadeOut(function () {
                //没有注册ID的话, 就直接删了,反正无法重用
                if (!config.id) {
                    box.remove();
                }
            });
        });

        fade.click(function () {
            div.find('.center-dialog-close-btn').click();
        });

        div.find(".cancel-btn").on("click", function () {
            div.find('.center-dialog-close-btn').click();
        })

        div.find(".kefuqqmac").on("click", function () {
            $('.kefu li>a').click()
            // div.find('.center-dialog-close-btn').click();
            // fade.hide()
            box.css("display", "none")
        })


        box.append(fade);
        box.append(div);
        $("body").append(box);
        var repos = function () {
            var wHeight = w.height();
            var wWidth = w.width();
            var top = parseInt((wHeight - height) / 2);
            var left = parseInt((wWidth - width) / 2);
            if (top < 40) {
                top = 56;
            }
            if (left < 40) {
                left = 40;
            }
            div.css({top: top, left: left});
        }
//		w.scroll(function(){
//			repos();
//		});
        w.resize(function () {
            repos();
            fade.height(w.height());
        })
        repos();

        this.close = function () {
            div.find('.center-dialog-close-btn').click();
        }

        this.resize = function (size) {

            var w = size.width;
            var h = size.height;

            if (typeof(w) == 'number' && typeof(h) == 'number') {
                div.css({width: w, height: h});
            } else if (typeof(w) == 'number') {
                div.css({width: w});
            } else if (typeof(h) == 'number') {
                div.css({height: h});
            }

            if (typeof(w) == 'number') {
                width = w;
            }

            if (typeof(h) == 'number') {
                height = h;
            }

            repos();

        }

        return this;
    }

})(jQuery);
