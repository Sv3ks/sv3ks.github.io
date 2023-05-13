{


let clickItem = document.getElementById('clicker-image')
let clickText = document.getElementById('coin-display')
let coins = 0

if (localStorage.getItem("coins")!=null) {
	load()
}

clickText.innerHTML = '<i class="material-icons" id="coin-image">attach_money</i>'+coins

clickItem.addEventListener('click',()=>{clickText.innerHTML = '<i class="material-icons" id="coin-image">attach_money</i>'+(++coins)})

function save() {
	localStorage.setItem("coins",coins)
}

function load() {
	coins = localStorage.getItem("coins")
}

window.onbeforeunload = function (e) {
	save()
}

}