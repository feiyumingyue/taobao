$(function() {
	// 点击事件(单击)
	// e.witch针对键盘和鼠标事件，这个属性能确定你到底按的是哪个键或按钮
	// $("#btn").click({name: "zhangsan"}, function(e){
	// 	console.log(e.which)//左键为1 点击右键的时候会触发浏览器默认的右键行为
	// 	// console.log(e.data.name);//函数参数
	// });

	//双击
	// $("#btn").dblclick(function(e){
	// 	// alert("dblclick");
	// 	console.log(e.type);//函数类型
	// });

	//mousedown与click事件不同，mousedown事件仅需要按键被按下，而不需要松开即可发生
	// $("#btn").mousedown(function(e){
	// 	/*alert("mousedown")*/
	// 	switch (e.which){
	// 		case 1:
	// 			console.log("点击了左键")
	// 			break;
	// 		case 2:
	// 			console.log("点击了中键")
	// 			break;
	// 		case 3:
	// 			console.log("点击了右键")
	// 			break;
	// 		default:
	// 			break;
	// 	}
	// });
		// $("#btn").mousedown(function(e) {
		// 	console.log("按下")
		// })
		// $("#btn").mouseup(function(e){
		// 	console.log("弹起")
		// });

	// $(document).mousemove(function(e){
	// 	$("#msg").text(e.pageX + ", " + e.pageY);
	// })

	// mouseover与mouseenter见demo2

	//keydown、keyup返回的是键码e.keyCode 键盘编码  回车键13
	//keypress返回的是字符编码e.charCode ascii编码
	//charcode必须在keypress中使用，在keydown中使用的话返回值都是0
	//当你按下一个键时（还没松开），就会触发keydown事件；当你松开后，又触发了keypress事件。

	// $("#text").keydown(function(e){
	// 	console.log("e.keyCode"+e.keyCode);
	// })
	// $("#text").keyup(function(){
	// 	alert($(this).val())
	// })
	// $("#text").keypress(function(e){
	// 	// console.log($(this).val())
	// 	console.log("e.charCode"+e.charCode)
	// })

	//focus/blur,必须是当前元素去触发
	// $("#text").focus(function(){
	// 	$("#tip").html("111")
	// 	$("#text").css("background-color","red");
	// })
	// $("#text").blur(function(){
	// 	$("#tip").html("222")
	// 	$("#text").css("background-color","black");
	// })
	//	
	//focusin、focusout可以在父元素上检测子元素获取焦点的情况
	// $("#box").focusin(function(){
	// 	$("#tip").html("111")
	// 	$("#text").css("background-color","red");
	// })
	// $("#box").focusout(function(){
	// 	$("#tip").html("222")
	// 	$("#text").css("background-color","black");
	// })
	
	// select当 textarea 或文本类型的 input 元素中的文本被选择时，会发生
	// $("input").select(function() {
	// 	$("input").after("jdjafjdas");
	// })

	// scroll在元素的滚动条位置发生改变时触发
	// $(window).scroll(function(event) {
	// 	$("#msg").append($(this).scrollTop() + '<br>');
	// });

	// resize当调整浏览器窗口的大小时
	// $(window).resize(function(){
	//   console.log($(window).width())
	// });

});