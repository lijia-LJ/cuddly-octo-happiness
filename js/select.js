// 点击区域按钮 展示蒙版 展示区域部分
// 区域部分优先级高于蒙版部分
var mBanner=document.getElementsByClassName('mBanner')[0];
var quyu=document.getElementsByClassName('quyu')[0];
var quyuLi=document.getElementsByTagName('li')[0];
quyuLi.onclick=function(){
    mBanner.style.display='block';
    quyu.style.display='block';
}

// 点击下面蒙版 蒙版消失 区域消失
mBanner.onclick=function(){
    mBanner.style.display='none';
    quyu.style.display='none';
    
}