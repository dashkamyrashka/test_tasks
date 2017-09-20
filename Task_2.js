function secondSolution(){
	var value = document.getElementById("array").value;
    var output = document.getElementById("arrRes");
		output.value = "";
	arr = value.split(" ");
	

    function compareRandom(a, b) {
        return Math.random() - 0.5;
    }

    output.value = arr.sort(compareRandom);

}