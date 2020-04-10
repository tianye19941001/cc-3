// JavaScript Document
// create by zcy 2016/10/10

function runCircle(settings) {
	var defaultSetting = {
		obj: '', //场景添加的canvas id 名
		percent: 1, //圆环转动的百分比  0-1 
		circleBottomColor: "#f2f2f2", //圆环底色
		outerColorStart: '#fffaf7', //外部圆环 渐变色
		outerColorMid: '#fff4ec',
		outerColorEnd: '#ffd2b0',
		innerColorStart: '#ffdd00', //内部圆环 渐变色
		innerColorEnd: '#fc7d37'
	};
	var option = $.extend({}, defaultSetting, settings);

	var obj = option.obj;
	var percent = option.percent;
	var innerColorStart = option.innerColorStart;
	var innerColorEnd = option.innerColorEnd;
	var circleBottomColor = option.circleBottomColor;

	var preA = Math.PI / 180;

	var canvasC = document.getElementById(obj);
	/*控制运动*/
	var context = canvasC.getContext('2d');
	var windowW = parseInt($(canvasC).parent().width());
	var lineW1 = option.lineW1 || 18;
	var lineW0 = 5;
	var R1;
	var canvasW = windowW * 0.76;
	R = parseInt(canvasW / 2 - 2 * lineW1 - 2 * lineW0 - 10);
	R0 = parseInt(canvasW / 2 - lineW0 - 4);
	R1 = parseInt(canvasW / 2 - lineW1 - lineW0 - 10);
	var ra = parseInt(canvasW / 2 - lineW0 / 2 - 5);
	var canvasH = canvasW;
	var rotateAngle = percent * 360;
	if (percent > 0.5) {
		anotherA = (percent - 0.5) * 360 * preA;
	}
	var rotataRadians = preA * rotateAngle;
	canvasC.width = canvasW * 2;
	canvasC.height = canvasH * 2;

	var x = canvasC.width /2;
	var y = canvasC.height /2;
	var startAa = -Math.PI ;
	var startA = 0;
	var Timer;

	function CanvasApp() {
		canvasC.setAttribute("data-run", "1")

		function drawScreen() {

			if (startA < rotataRadians) {
				startA += 0.1;
			}

			context.fillStyle = "#ffffff";
			context.fillRect(0, 0, canvasC.width, canvasC.height);

			context.save();
			context.setTransform(1, 0, 0, 1, 0, 0);
			context.fillStyle = "#ffffff";
			context.fillRect(0, 0, canvasC.width, canvasC.height);
			context.translate(x, y);
			context.rotate(-Math.PI / 2);

			//中环
			context.beginPath();
			context.strokeStyle = circleBottomColor;
			context.lineWidth = lineW1 * 2;
			context.arc(0, 0, R1*2, 0, Math.PI * 2, false);
			context.stroke();
			context.closePath();
			context.beginPath();

			// Linear gradients
			var gradient2 = context.createLinearGradient(R1, 0, -R1, 0);
			gradient2.addColorStop(0, innerColorStart);
			gradient2.addColorStop(1, innerColorEnd);
			context.lineCap = "round";
			context.strokeStyle = gradient2;
			context.lineWidth = lineW1 * 2;
			context.arc(0, 0, R1*2, 0, startA, false);
			context.stroke();
			context.closePath();

			//画图
			if (startAa < rotataRadians - Math.PI / 2) {
				startAa += 0.1;
				canvasC.setAttribute("data-run", "1")
			} else {
				clearInterval(Timer);
				canvasC.setAttribute("data-run", "0")
			}
			context.save();
			context.setTransform(1, 0, 0, 1, 0, 0);
			var ax = ra * Math.cos(startAa);
			var ay = ra * Math.sin(startAa);
			context.translate(x + ax, y + ay);
			context.rotate(startAa);
			context.restore();
		}
		drawScreen();
		Timer = setInterval(drawScreen, 20);
	}
	CanvasApp()
}