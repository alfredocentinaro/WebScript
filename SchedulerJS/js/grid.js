const side   = 20;
const label  = 50;

let   yoffset= 0;	

let   i = 0;
var   start = 0;
var   processtime = 0;

function drawFCFS() 
{
		let   i = 0;
		var   start = 0;
		var   processtime = 0;

		var canvas =$("#canvas")[0];
	    	var ctx = $("#canvas")[0].getContext('2d');
									
		while (processv.length > 0)
		{
			//pesco il primo arrivato
			idx = arrivaltimev.indexOf(Math.min(...arrivaltimev));
			yoffset = side*i;
			//arrivaltimev.splice(idx,1);

			lenghtp = burstv.splice(idx,1);
			ctx.font = "20px Georgia";
			ctx.fillText(processv.splice(idx,1), 10, yoffset+side);


			//disegno i quadretti di attesa
			ctx.beginPath();
			arrivalp = arrivaltimev.splice(idx,1);
			ctx.fillStyle = 'white';
			ctx.strokeStyle = 'black';
			if (i == 0)
			{
				for (x=1; x<=arrivalp; x++)
				{
					ctx.rect(label+(side*x), yoffset, side, side);
					ctx.fill();
					ctx.stroke();
				}	
				start += parseInt(arrivalp); 		
			}

			if (i>0 && arrivalp <= start)
			{
				for (x=1; x<=start; x++)
				{
					ctx.rect(label+(side*x), yoffset, side, side);
					ctx.fill();
					ctx.stroke();
				}	
				
			}

			if (i>0 && arrivalp > processtime)
			{
				//TODO
			}				
			ctx.closePath();
			
			//disegna i quadretti attivi
			ctx.beginPath();
			ctx.fillStyle = colorv.splice(idx);
			ctx.strokeStyle = 'grey';
			for (x=1; x<=lenghtp; x++)
			{
				ctx.rect(label+(start+x)*side, yoffset, side, side);
				ctx.fill();
				ctx.stroke();
			}
			processtime = parseInt(lenghtp);
			start += parseInt(processtime);
			ctx.closePath();
			i++;
		}

};

function drawSJF() 
{
}




$(document).ready(
	function()
	{
		$("#calc").click(
			function()
			{
				drawFCFS();
				drawSJF();
			}
		)
	}	





)
