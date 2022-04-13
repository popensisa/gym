// let a = 7;

// if(a < 4){
// 	console.log("yes");
// }
// else{
// 	console.log("else")
// }

const button = document.querySelector('.btnForm');


button.onclick = function(){

	const input = document.querySelector('.height');
	const inputTwo = document.querySelector(".kilo");
	var objSel = document.getElementById("selection");

	let height = +input.value;
	let kilo = +inputTwo.value;

	if (height > 0 && kilo > 0 && objSel.selectedIndex == 0 ){
		// const abs = document.querySelector('.absolute');
		// abs.classList.toggle('active');
		console.log("welcome");

		var result = kilo;
		document.getElementById("resB").value = "Ваш вес: " + result.toFixed(2) + " кг";

		var result = (height - 110) * 1.15;
		document.getElementById("resA").value = "Идеальный вес: " + result.toFixed(2) + " кг";
	}
	else if(height > 0 && kilo > 0 && objSel.selectedIndex == 1){
		console.log("STARUK");
		
		var result = kilo;
		document.getElementById("resB").value = "Ваш вес: " + result.toFixed(2) + " кг";

		var result = (height - 120) * 1.15;
		document.getElementById("resA").value = "Идеальный вес: " + result.toFixed(2) + " кг";
	}else{
		console.log("GOOUT")
	}
}
