(function(){

    // 设置页面缩放比例
    function setLayoutPageSize(){
        var w = window.screen.width;
        var targetW = 320;
        var scale = w/targetW; //当前尺寸/目标尺寸
        var meta = document.createElement("meta");
        meta.name = "viewport";
        meta.content = "user-scalable=no,initial-scale="+scale+",minimum-scale="+scale+",maximum-scale="+scale+""
        //console.log(scale);
        document.head.appendChild(meta);
    }
    
    // 设置根字体大小 
    function setRootFontSize(){
        var html = document.documentElement;
        var hWidth = html.getBoundingClientRect().width;
        html.style.fontSize = hWidth/16 + "px";
    }

    // 当窗口大小发生变化
    window.onresize = function(){
        setLayoutPageSize();
    }

    // 设置页面缩放比例
    setLayoutPageSize();
    // 设置根字体大小 
    setRootFontSize();

})();