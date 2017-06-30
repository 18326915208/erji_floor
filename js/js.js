//function Tab(){
//	this.oBox=document.getElementById("box")
//	this.oBan=document.getElementById("ban");
//	this.oBimg=document.getElementById("ban").getElementsByTagName("img");
//	this.oUl=document.getElementById("ul");
//	this.oList=document.getElementById("ul").getElementsByTagName("li");
//	this.oLeft=document.getElementById("left");
//	this.oRight=document.getElementById("right");
//	this.num=0;
//	this.time=null;
//	this.onOff=true;
//}
//Tab.prototype.onmouseover=function(){
//	var This=this;
//	this.onmouseover=function(){
//		clearInterval(This.time);
//	}
//}
//Tab.prototype.onmouseout=function(){
//	var This=this;
//	this.onmouseout=function(){
//		This.time=setInterval(function(){
//			This.oRight.onclick();
//		},3000)
//	}
//}
//Tab.prototype.tabpic=function(){
//	var This=this;
//	for(var i=0;i<this.oList.length;i++){
//		this.oList[i].index=i;
//		this.oList[i].onmouseover=function(){
//			This.tab(this);
//		}
//	}
//}
//Tab.prototype.right=function(){
//	var This=this;
//	this.oRight.onclick=function(){
//		This.num++;
//		if(This.num>=This.oList.length){
//			This.num=0;
//		}
//		This.tab();
//	}
//}
//Tab.prototype.left=function(){
//	var This=this;
//	this.oLeft.onclick=function(){
//		This.num--;
//		if(This.num<0){
//			This.num=This.oList.length-1;
//		}
//		This.tab();
//	}
//}
//Tab.prototype.time=function(){
//	this.time=setInterval(function(){
//		this.oRight.onclick();
//	},3000);
//}
//Tab.prototype.tab=function(obj){
//	var This=this;
//	for(var i=0;i<this.oList.length;i++){
//		this.oList[i].className="";
//		this.oBimg[i].className="";
//		move(this.oBimg[i],{"opacity":0},function(){
//			move(obj.oBimg[this.num],{"opacity":100});
//		})
//	}
//	obj.oList[obj.num].className="list";
//	this.num=This.index;
//}
//var alltab=new Tab();
//alltab.tabpic();
//alltab.right();
//alltab.left();
////alltab.time();
//alltab.onmouseover();
//alltab.onmouseout();




var oBox=document.getElementById("box")
var oBan=document.getElementById("ban");
var oBimg=oBan.getElementsByTagName("img");
var oUl=document.getElementById("ul");
var oList=oUl.getElementsByTagName("li");
var oLeft=document.getElementById("left");
var oRight=document.getElementById("right");
var num=0;
var time=null;
var onOff=true;
oBox.onmouseover=function(){
	clearInterval(time);
}
oBox.onmouseout=function(){
	time=setInterval(function(){
		oRight.onclick();
	},3000)
}
for(var i=0;i<oList.length;i++){
	oList[i].index=i;
	oList[i].onmouseover=function(){
		num=this.index;
		fun();
	}
}
oRight.onclick=function(){
	num++;
	if(num>=oList.length){
		num=0;
	}
	fun();
}
oLeft.onclick=function(){
	num--;
	if(num<0){
		num=oList.length-1;
	}
	fun();
}
time=setInterval(function(){
	oRight.onclick();
},3000);
function fun(){
	for(var i=0;i<oList.length;i++){
		oList[i].className="";
		oBimg[i].className="";
		move(oBimg[i],{"opacity":0})
	}
	oList[num].className="list";
	oBimg[num].className="first";
	move(oBimg[num],{"opacity":100});
}








var oPhp=$("#php");
var oPul=$("#pul");
var oPulist=$("li",oPul);
var oSleft=$("#sleft");
var oSright=$("#sright");
var oSbtn=$(".sbtn",oPhp)[0];
var oPhpWidth=oPhp.offsetWidth;
var n=0;
//console.log()
oSright.onclick=function(){
	n++;
	if(n>oPulist.length/4-1){
		n=1;
		oPul.style.left=0;
	}
	move(oPul,{"left":n*(-oPhpWidth)});
	console.log(oPul.offsetWidth);
}
oSleft.onclick=function(){
	n--;
	if(n<0){
		n=oPulist.length/4-2;
		oPul.style.left=-(n+1)*oPhpWidth+"px";
	}
	move(oPul,{"left":n*(-oPhpWidth)});
	console.log(oPul.offsetWidth);
}
oPhp.onmouseover=function(){
	move(oSbtn,{"opacity":100,})
}
oPhp.onmouseout=function(){
	move(oSbtn,{"opacity":0,})
}






