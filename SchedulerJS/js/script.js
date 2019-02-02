processv = [];
arrivaltimev = [];
burstv = [];
colorv = [];
$(document).ready(
	function()
	{
		$("#add").click(
			function()
			{
				$("#list").append("<li>"+"<span style='background-color:"+$("#processcolor").val()+"'>&nbsp;&nbsp;&nbsp;</span>&nbsp;"+
							$("#processname").val()+ "&nbsp;" +
							$("#burst").val()+ "&nbsp;" +	
							$("#arrivaltime").val()+ "&nbsp;" +
						 "</li>")

				processv.push($("#processname").val());
				arrivaltimev.push(parseInt($("#arrivaltime").val()));
				burstv.push(parseInt($("#burst").val()));
				colorv.push($("#processcolor").val());
		
			}		
		)
	
		
	}

)