window.onload=function(){/*window.onload让页面加载完后再加载js*/

    var music=document.getElementById("music");
    var audio=document.getElementsByTagName("audio")[0];/*通过Tagname获取到的是一个数组，audio只有一个，所以【0】获取第一个*/
    var page1=document.getElementById("page1");
    var page2=document.getElementById("page2");
    var page3=document.getElementById("page3");

    //手机端为了区别点击与长按，不用onclick触发事件//

    // music.onclick=function(){
    //     if(audio.paused){
    //         audio.play();
    //         //this.setAttribute("class","play");//在播放的时候设置class为play，图片转动//
    //         this.style.animationPlayState="running";//有兼容性问题//
    //         this.style.webkitanimationPlayState="running";//加上webkit后解决iphone6的兼容性问题，iphone6及安卓4.4以下依旧有问题//
    //     }
    //     else{
    //         audio.pause();
    //        // this.setAttribute("class","");//暂停的时候设置class为空//
    //         this.style.animationPlayState="paused";//有兼容性问题//
    //         this.webkitstyle.animationPlayState="paused";////加上webkit后解决iphone6的兼容性问题，iphone6及安卓4.4以下依旧有问题////
    //     }
    // };

    //音乐播放玩光碟停止转动//
    audio.addEventListener("ended",function(event){
        // music.Attribute("class","");
        music.style.animationPlayState="paused";
        music.style.webkitanimationPlayState="paused";
    },false)//增加监听事件,ended是audio的API，通过监听这个API，当音乐结束的时候执行下面的语句//


    //监听touchstart来触发事件

    music.addEventListener("touchstart",function(event){
        if(audio.paused){
            audio.play();
            //this.setAttribute("class","play");//在播放的时候设置class为play，图片转动//
            this.style.animationPlayState="running";//有兼容性问题//
            this.style.webkitanimationPlayState="running";//加上webkit后解决iphone6的兼容性问题，iphone6及安卓4.4以下依旧有问题//
        }
        else{
            audio.pause();
           // this.setAttribute("class","");//暂停的时候设置class为空//
            this.style.animationPlayState="paused";//有兼容性问题//
            this.webkitstyle.animationPlayState="paused";////加上webkit后解决iphone6的兼容性问题，iphone6及安卓4.4以下依旧有问题////
        }
    },false);

    page1.addEventListener("touchstart",function(event){
        page1.style.display="none";
        page2.style.display="block";
        page3.style.display="block";
        page3.style.top="100%";

        setTimeout(function(){
            page2.setAttribute("class","page fadeout");
            page3.setAttribute("class","page fadeIn");
        },3500);/*函数在3500ms后执行*/
    },false);
};