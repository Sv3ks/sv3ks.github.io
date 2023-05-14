//{

	let MAIN_URL = 'http://127.0.0.1:5500/clicker/'
	let SHOP_URL = 'http://127.0.0.1:5500/shop/'

	let clickItem = document.getElementById('clicker-image')
	let clickText = document.getElementById('coin-display')

	let coins = 0
	
	// Load Data
	let data = JSON.parse(localStorage.getItem("clickerData"))
	
	if (data != null) {
		load()
	} else {
		data =
		{
			"coins": 0
		}
	}
	
	clickText.innerHTML = '$'+coins
	clickItem.addEventListener('click',()=>{clickText.innerHTML = '$'+(++coins)})

	function save() {
		localStorage.setItem("clickerData",JSON.stringify({
			"coins": coins
		}));
	}
	
	function load() {
		coins = data.coins
	}
	
	window.onbeforeunload = function (e) {
		save()
	}
	
	document.getElementById('navmain').addEventListener("click",() => {
		window.location = MAIN_URL
	})
	
	document.getElementById('shop').addEventListener("click",() => {
		window.location = SHOP_URL
	})
	
//}