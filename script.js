init()
	blink_text()
	Confirmed()


	function init(){
		var url = "https://api.covid19api.com/summary"

		var data =''
		

		$.get(url,function(data){
			console.log(data)

			data = `
				<td>${data.Global.TotalConfirmed}</td>
				<td>${data.Global.TotalRecovered}</td>
				<td>${data.Global.TotalDeaths}</td>
				<td>${data.Global.NewConfirmed}</td>
				<td>${data.Global.NewRecovered}</td>
			`

			$("#data").html(data)
		})
	}


	function RefreshData(){
		clearData()
		init()
	}

	function clearData(){
		$("#data").empty()
	}

	function Confirmed(){
		var url = "https://api.covid19api.com/summary"
		var data1 =''
		var active_india , active_usa , active_brazil

		$.get(url,function(data1){

			active_india = data1.Countries[76].NewConfirmed
			active_usa = data1.Countries[182].NewConfirmed
			active_brazil = data1.Countries[23].NewConfirmed

			$("#india").html(active_india)
			$("#usa").html(active_usa)
			$("#brazil").html(active_brazil)
		})
	}

	function blink_text(){
		$('.massage').fadeOut(500);
		$('.massage').fadeIn(500);
	}
	setInterval(blink_text,1000);