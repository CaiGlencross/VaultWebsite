		window.onload = draw;
		window.onresize = resizeCanvas;
		function toRads(angle){
			return angle*(Math.PI/180);
		}
		function drawPentagon(){
			var canvas = document.getElementById("canvas1");
			//context to enable draw methods
			var ctx = canvas.getContext("2d");
			//scale to window
			ctx.canvas.width=window.innerWidth;
			ctx.canvas.height=window.innerHeight;
			//easy window variable names
			var canvasWidth = canvas.width;
			var canvasHeight = canvas.height;

			var pLength = window.innerHeight < .6*window.innerWidth ? pLength=.45*window.innerHeight :
				pLength=.3*window.innerWidth;

			var pAngle= 108;
		
			//top of pentagon
			var x1=canvasWidth/2;
			var y1=(.05*canvasHeight);
			//topright of pentagon
			var x2=x1 + pLength*Math.cos(toRads(36));
			var y2=y1 + pLength*Math.sin(toRads(36));
			//bottomright of pentagon
			var x3=x2-pLength*Math.sin(toRads(18));
			var y3=y2+pLength*Math.cos(toRads(18));
			//bottomleft of pentagon
			var x4=x3-pLength;
			var y4=y3;
			//topright of pentagon
			var x5=x4-pLength*Math.cos(toRads(72));
			var y5=y2;

			console.log(x2);

			//draw pentagon

			ctx.beginPath();
			ctx.moveTo(x1, y1);
			ctx.lineTo(x2, y2);
			ctx.lineTo(x3, y3);
			ctx.lineTo(x4, y4);
			ctx.lineTo(x5,y5);
			ctx.closePath();
			ctx.strokeStyle="white";
			ctx.lineWidth=.034*pLength;
			ctx.stroke();

			//position Visual label
			var visualLabel = document.getElementById("visualLabel");
			visualLabel.style.left = x1+"px";
			visualLabel.style.top = (y1+visualLabel.getAttribute("height"))+"px";
			visualLabel.style.transform = "rotate("+((180-pAngle)/2)+"deg)";
			console.log(visualLabel);


		}

		function draw(){
	
			
			drawPentagon();


			//ternary operator example condition ? true : false;
			




		}
		function resizeCanvas(){
			draw();
		}