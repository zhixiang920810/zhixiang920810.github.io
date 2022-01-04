/** layuiAdmin.std-v1.2.1 LPPL License By http://www.layui.com/admin/ */ ;
layui.define(function (e) {
 layui.use(["admin", "carousel"], function () {
  var e = layui.$,
      t = (layui.admin, layui.carousel),
      a = layui.element,
      i = layui.device();
  e(".layadmin-carousel")
      .each(function () {
       var a = e(this);
       t.render({
        elem: this,
        width: "100%",
        arrow: "none",
        interval: a.data("interval"),
        autoplay: a.data("autoplay") === !0,
        trigger: i.ios || i.android ? "click" : "hover",
        anim: a.data("anim")
       })
      }), a.render("progress")
 })
 
/* layui.use(["admin", "carousel", "echarts"], function () {
	//折线图
	var xAxisData=[];
   var seriesData=[];
   $.ajax({
		url: "../receiveinfo/getJbxxTj.action",
		data: {id: "1"},
		dataType: "json",
		type: "post",
		async: false,
		success: function (data) {
			if(data !='null' && data !='' && data.length>0){
		    	for(var i=0;i<data.length;i++){
		    		var val=data[i].SL;
		    		var name=data[i].CBDWMC;
		    		seriesData.push(val);
//		    		if(name.length>5){
//		    		  xAxisData.push(name.substring(0,5)+"\n"+name.substr(5));
//		    		}else{
		    		  xAxisData.push(name);	
//		    		}
		    	}
	        }
		},
		error:function(xls){
			layer.alert("请求异常,请联系管理员!",{icon: 0,closeBtn:0},function(index){
				layer.close(index); 
			});
		}
	});
 var e = layui.$,
     t = layui.admin,
     a = layui.carousel,
     i = layui.echarts,
     l = [],
     n = [{
      title: {
       text: "各单位今日上报情报信息数量统计",
       x: "center",
       textStyle: {
        fontSize: 14
       }
      },
      tooltip: {
       trigger: "axis",
       formatter: "{b}：{c}"
      },
      xAxis: [{
       type: "category",
       data: xAxisData,
       axisLabel:{rotate:-45}
      }],
      yAxis: [{
       type: "value"
      }],
      series: [{
       type: "line",
       data: seriesData
      }]
     }],
     r = e("#LAY-index-dataview")
         .children("div"),
     o = function (e) {
      l[e] = i.init(r[e], layui.echartsTheme), l[e].setOption(n[e]), t.resize(function () {
       l[e].resize()
      })
     };
 if (r[0]) {
  o(0);
  var d = 0;
  a.on("change(LAY-index-dataview)", function (e) {
   o(d = e.index)
  }), layui.admin.on("side", function () {
   setTimeout(function () {
    o(d)
   }, 300)
  }), layui.admin.on("hash(tab)", function () {
   layui.router()
       .path.join("") || o(d)
  })
 }
}) */
 
  layui.use(["admin", "carousel", "echarts"], function () {
	//折线图
	var xAxisData=[];
   var seriesData=[];
 /*  $.ajax({
		url: "../receiveinfo/getJbxxTj.action",
		data: {id: "1"},
		dataType: "json",
		type: "post",
		async: false,
		success: function (data) {
			if(data !='null' && data !='' && data.length>0){
		    	for(var i=0;i<data.length;i++){
		    		var val=data[i].SL;
		    		var name=data[i].CBDWMC;
		    		seriesData.push(val);
//		    		if(name.length>5){
//		    		  xAxisData.push(name.substring(0,5)+"\n"+name.substr(5));
//		    		}else{
		    		  xAxisData.push(name);	
//		    		}
		    	}
	        }
		},
		error:function(xls){
			layer.alert("请求异常,请联系管理员!",{icon: 0,closeBtn:0},function(index){
				layer.close(index); 
			});
		}
	});*/
   xAxisData=['7.18','7.19','7.20','7.21','7.22','7.23']
   seriesData=['10','20','30','30','30','30']
   seriesData1=['5','5','80','30','30','30']
 var e = layui.$,
     t = layui.admin,
     a = layui.carousel,
     i = layui.echarts,
     l = [],
     n = [{
      title: {
       text: "涉稳涉警质态",
       x: "left",
       textStyle: {
        fontSize: 14,
        
       }
      },
      tooltip: {
       trigger: "axis",
       formatter: "{b}：{c}"
//       formatter:function(params){
//    	   console.log(params)
//    	   return "涉稳"+params[0].name+":"
//       }
      },
//      color:["red",'blue'],
      /*legend:{
    	data:['涉稳','涉警'] ,
    	right:'50',
    	width:'400',
    	textStyle:{}
      },*/
      xAxis: [{
       type: "category",
       data: xAxisData,
       axisLabel:{rotate:-45}
      }],
      yAxis: [{
       type: "value"
      }],
      series: [{
       type: "line",
       data: seriesData,
      
      },{
          type: "line",
          data: seriesData1
         }
      ]
     }],
     r = e("#LAY-index-dataview")
         .children("div"),
     o = function (e) {
      l[e] = i.init(r[e], layui.echartsTheme), l[e].setOption(n[e]), t.resize(function () {
       l[e].resize()
      })
     };
 if (r[0]) {
  o(0);
  var d = 0;
  a.on("change(LAY-index-dataview)", function (e) {
   o(d = e.index)
  }), layui.admin.on("side", function () {
   setTimeout(function () {
    o(d)
   }, 300)
  }), layui.admin.on("hash(tab)", function () {
   layui.router()
       .path.join("") || o(d)
  })
 }
})
});