function geStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj,null)[attr];
    }
}
function animate(obj,json,callback){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        // console.log(l);
        var isStop = true;
        for (var attr in json){
            var now = 0;
            if(attr == 'opacity'){
                now = parseInt(geStyle(obj,attr)*100);
            }else{
                now = parseInt(geStyle(obj,attr));
            }
            var now = parseInt(geStyle(obj,attr));
            var speed = (json[attr]-now)/6;
            speed = speed>0?Math.ceil(speed):Math.floor(speed);
            var current = now + speed;
            if (attr == 'opacity'){
                obj.style.opacity = current/100;
            }else{
                obj.style[attr] = current + "px";
            }
            if(json[attr] !== current){
                isStop = false;
            }
        } 
        if(isStop){
            clearInterval(obj.timer);
            if (callback){callback()}
            //callback&&callback();
        }
    },300)
}