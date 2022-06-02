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
    price.style.display='none';
    hometype.style.display='none';
    moreHome.style.display='none';
    
}
// 点击价格
var priceLi=document.getElementsByTagName('li')[1];
var price=document.getElementsByClassName('price')[0];
priceLi.onclick=function(){
    mBanner.style.display='block';
    price.style.display='block';

}
// 点击房型
var homeLi=document.getElementsByTagName('li')[2];
var hometype=document.getElementsByClassName('hometype')[0];
homeLi.onclick=function(){
    mBanner.style.display='block';
    hometype.style.display='block';

}
// 点击更多
var moreLi=document.getElementsByTagName('li')[3];
var moreHome=document.getElementsByClassName('moreHome')[0];
moreLi.onclick=function(){
    mBanner.style.display='block';
    moreHome.style.display='block';

}