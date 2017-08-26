/*
 * 木有车签约的插件脚本 
 * 作者Geek.Yu 在2017-08-25 创建了它，
 * 若您对此脚本存在疑问，请联系作者Geek.Yu  qq:1098654043
 */

(function($){ 
    
    // 悬浮球按钮
    $.fn.floatBox = function(option){
        var $el,                      // 按钮本身的DOM
            defaults,                 // 默认配置
            setting,                  // 实际的配置
            $popup,                   // 绑定的弹出层DOM
            $mask,                    // 遮罩层DOM
            $box;                     // 实际内容盒子DOM
        
        // 默认配置
        defaults = {};

        // 参数继承
        setting = $.extend(defaults,option);
        
        $el = $(this);
        $popup = $(".m-popup");
        $mask = $popup.find(".p-mask");
        $box = $popup.find(".p-box");
        
        // 用户点击悬浮球
        $el.on('touchstart',openBOX);
        $mask.on('touchstart',classBOX);
        
        // 定义打开弹出层的序列函数方法
        var openPopup = [
            {e: $popup, p: { opacity: 1 }, o: { delay: 0, duration: 0, display: "block" , sequenceQueue: false}},
            {e: $mask, p: { opacity: 1 }, o: { delay: 0, duration: 250 , display: "block" , sequenceQueue: false}},
            {e: $box, p: { opacity: 1,translateY:[0,-120],}, o: { delay: 150, duration: 300, easing: [ 0.3, 0.52, 0.63, 0.86 ], display: "block" , sequenceQueue: false}},
        ];
        
        // 定义关闭弹出层的序列函数方法
        var closePopup = [
            { e: $box, p: "reverse", o: { delay: 0, duration: 250, display: "none"} },
            { e: $mask, p: "reverse", o: { delay: 120, duration: 200, display: "none", sequenceQueue: false } },
            { e: $popup, p: "reverse", o: { delay: 150, duration: 0, display: "none", sequenceQueue: false} },
        ];
        
        // 将$ .Velocity.mock设置为任意乘数，以加快或减慢页面上的所有动画
        $.Velocity.mock = 1;
        
        // 显示弹出层内容的方法
        function openBOX(){
            $.Velocity.RunSequence(openPopup);
        }
        
        // 关闭弹出层内容的方法
        function classBOX(){
            $.Velocity.RunSequence(closePopup);
        }
        
    }
    
    // 彩条飞舞（一）
    $.colourEvOne  = function(option){
        var defaults,                 // 默认配置
            setting,                  // 实际的配置
            $balloon,                 // 气球DOM
            $bar1,                    // 彩带一DOM
            $bar2,                    // 彩带二DOM
            $bar3,                    // 彩带三DOM
            $bar4,                    // 彩带四DOM
            $bar5;                    // 彩带五DOM
        
        // 默认配置
        defaults = {};

        // 参数继承
        setting = $.extend(defaults,option);
        
        $balloon = $("#balloon");
        $bar1 = $("#cb_1");
        $bar2 = $("#cb_2");
        $bar3 = $("#cb_3");
        $bar4 = $("#cb_4");
        $bar5 = $("#cb_5");
        
        var balloonShow = [
            {e: $balloon, p: { translateY:[-15,800],translateX:[0,0]}, o: { delay: 500, easing: [ 0.1, 0.19, 0.41, 1.01 ], duration: 2800, display: "block", sequenceQueue: false}},
            {e: $balloon, p: { translateY:[20,-15],translateX:[5,0]}, o: { delay: 0, easing: [ 0.3, 0.52, 0.63, 0.86 ], duration: 800, sequenceQueue: false}},
            {e: $balloon, p: { translateY:[15,20],translateX:[3,5]}, o: { delay: 0, easing: [ 0.3, 0.52, 0.63, 0.86 ], duration: 300, sequenceQueue: false}},
            {e: $balloon, p: { translateY:[8,15],translateX:[-4,3] }, o: { delay: -250, loop: true, duration: 1200, sequenceQueue: false}},
        ];
        
        $.Velocity.RunSequence(balloonShow);
        
        $bar1.velocity({
            translateX:[4,-8],
            translateY:[5,-12],
        }, {
            /* Velocity's default options */
            duration: 2200,
            easing: "swing",
            queue: "",
            begin: undefined,
            progress: undefined,
            complete: undefined,
            display: undefined,
            loop: true,
            delay: false,
            mobileHA: true
        });
        $bar2.velocity({translateX:[-6,3],translateY:[5,-5],}, 
            { delay: 20,duration: 2350,display: "block",loop: true,mobileHA: true});
        $bar3.velocity({translateX:[-5,8],translateY:[-8,5],}, 
            { delay: 80,duration: 2200,display: "block",loop: true,mobileHA: true});
        $bar4.velocity({translateX:[6,-8],translateY:[5,-12],}, 
            { delay: 60,duration: 2180,display: "block",loop: true,mobileHA: true});
        $bar5.velocity({translateX:[-5,12],translateY:[-5,8],}, 
            { delay: 50,duration: 2260,display: "block",loop: true,mobileHA: true});

        
    }
    
    // 彩条飞舞（二）
    $.colourEvTwo = function(option){
        var defaults,                 // 默认配置
            setting,                  // 实际的配置
            $balloon,                 // 气球DOM
            $bar1,                    // 彩带一DOM
            $bar2,                    // 彩带二DOM
            $bar3,                    // 彩带三DOM
            $bar4,                    // 彩带四DOM
            $bar5;                    // 彩带五DOM
        
        // 默认配置
        defaults = {};

        // 参数继承
        setting = $.extend(defaults,option);
        
        $balloon = $("#balloon");
        $bar1 = $("#cb_1");
        $bar2 = $("#cb_2");
        $bar3 = $("#cb_3");
        $bar4 = $("#cb_4");
        $bar5 = $("#cb_5");
        
        var balloonShow = [
            {e: $balloon, p: { translateY:[-8,5],translateX:[-4,3] }, o: { delay: -250, loop: true,display: "block", duration: 1200, sequenceQueue: false}},
        ];
        
        $.Velocity.RunSequence(balloonShow);
        
        $bar1.velocity({
            translateX:[4,-8],
            translateY:[5,-12],
        }, {
            /* Velocity's default options */
            duration: 2200,
            easing: "swing",
            queue: "",
            begin: undefined,
            progress: undefined,
            complete: undefined,
            display: undefined,
            loop: true,
            delay: false,
            mobileHA: true
        });
        $bar2.velocity({translateX:[-6,3],translateY:[5,-5],}, 
            { delay: 20,duration: 2350,loop: true,display: "block",mobileHA: true});
        $bar3.velocity({translateX:[-5,8],translateY:[-8,5],}, 
            { delay: 80,duration: 2200,loop: true,display: "block",mobileHA: true});
        $bar4.velocity({translateX:[6,-8],translateY:[5,-12],}, 
            { delay: 60,duration: 2180,loop: true,display: "block",mobileHA: true});
        $bar5.velocity({translateX:[-5,12],translateY:[-5,8],}, 
            { delay: 50,duration: 2260,loop: true,display: "block",mobileHA: true});
        
    }
   
    // 熊猫的提示
    $.XMreminder = function(option){
        var $promptDom,               // 指向新增提示框的Dom
            cid,                      // 唯一标识
            defaults,                 // 默认配置
            setting;                  // 实际的配置
        
        defaults = {
            className : "reminderBox",           // 生成提示的类名 
            animationTime : 300,                 // 动画时间
            boxBg : "rgba(49,53,54,.88)",        // 背景色
            promptText : "我是默认提示语",       // 默认提示语
        };
        // 参数继承
        setting = $.extend(defaults,option);
        
        /*创建一个reminderDom*/
        createPrompt();

        // 生成 Prompt
        function createPrompt(){
            // 唯一标识
            cid = $.GenerateGuid({
                digit : 4,         // 随机数位数 
            });
            $("body").append('<div class="'+setting.className+'" data-id="'+cid+'">'+setting.promptText+'</div>');
            var $promptDom = $("[data-id="+cid+"]");
            $promptDom.css({
                backgroundColor: setting.boxBg,
                width: "72vw",
                height: ".9rem",
                lineHeight: ".9rem",
                color: "#f5f5f5",
                position: "fixed",
                left: "0",
                right: "0",
                bottom: "2.6rem",
                fontSize: "12px",
                letterSpacing: '.05rem',
                textIndent: '.05rem',
                margin: "auto",
                zIndex: "9999",
                textAlign: "center",
                webkitBorderRadius: ".45rem",
                borderRadius: ".45rem",
            });

            // 定义显示提示框的方法
            var openPrompt = [
                { e: $promptDom, p: { scale: .5, opacity:0, }, o: { display: "none", delay: 0, duration:0 } },
                { e: $promptDom, p: { scale: [1,.5] }, o: { display: "block", delay: 0, duration:150, easing: [ 0, 0, 0.2, 1 ], sequenceQueue: false} },
                { e: $promptDom, p: { opacity: [1,.2], translateY: [0,"1rem"]  }, o: {  delay: 0, duration:250, easing: [ 0, 0, 0.2, 1 ], sequenceQueue: false} },
                { e: $promptDom, p: { opacity: [0,1] }, o: {display: "none", delay: 500, duration:150 } },
            ];
            setTimeout(function(){
                $promptDom.remove();
            },1050);
            $.Velocity.RunSequence(openPrompt);
        }
    }

    // 生成唯一标识
    $.GenerateGuid = function(option){
        var GUID = "",                     // 存储唯一标识值
            defaults,                      // 默认配置
            setting;                       // 实际的配置

        defaults = {
            digit : 8,                     // 随机数位数 
        };
        // 参数继承
        setting = $.extend(defaults,option);
        // 一个随机数
        function Guid(){
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }
        for(var i = 0; i<setting.digit; i++){
            GUID = GUID + Guid();
        }
        return GUID;
    }
  
})(jQuery);  
