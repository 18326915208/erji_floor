
//时间版运动框架
Object.prototype.timeSport=function(mJson,time,sport,fn){
	//time sport fn 都不存在 timeMove( oBox , {"opacity" : 20});
	//time没有 soprt有 fn没   timeMove( oBox , {"opacity" : 20} , "linear");
	//time有  soprt没有 fn有   timeMove( oBox , {"opacity" : 20} , 3000 , function(){});
	//time soprt 没有 fn有  timeMove( oBox , {"opacity" : 20} ， function(){});
	//time没有  soprt有 fn有  timeMove( oBox , {"opacity" : 20} , "linear" , function(){});
//	if(typeof sport == "undefined"){
//		time=time ||400;
//		sport="linear";
//	}
//	if(typeof time=="string"){
//		fn=sport;
//		sport=time;
//		time=400;
//	}else if(typeof time=="number" && typeof sport=="function"){
//		fn=sport;
//		sport="liner";
//	}else if(typeof time=="function"){
//		fn=time;
//		sport="linear";
//		time=400;
//	}
	//初始时间
	var startTime=(new Date).getTime();
	//初始值时间
	var iB={};
	for(var attr in mJson ){
		if(attr=="opacity"){
			iB[attr]=parseInt(getStyle(this,attr)*100);
		}else{
			iB[attr]=parseInt(getStyle(this,attr));
		}
	}
	clearInterval(this.timer);
	var This=this;
	this.timer=setInterval(function(){
		var nowTime=(new Date).getTime();
		var it=Math.min(nowTime-startTime,time);
		for(var attr in mJson){
			var value=Tween[sport](it,iB[attr],parseInt(mJson[attr]-iB[attr]),time);
			if(attr=="opacity"){
				This.style[attr]=value/100;
				This.style.filter="alpha(opacity="+value+")";
			}else{
				This.style[attr]=value+"px";
			}
			if(it==time){
				clearInterval(This.timer);
				fn&&fn.call(This); 
				
			}
		}
	},14)
}
function getStyle(obj,attr){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr];
}