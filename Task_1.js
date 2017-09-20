function firstSolution(){

        var arr1 = [], arr2 = [], arr3 = [], ArrResult = [];
		var value1 = document.getElementById("arr1").value;
		var value2 = document.getElementById("arr2").value;
		var value3 = document.getElementById("arr3").value;
		var output = document.getElementById("arrRes");
		output.value = "";
        arr1 = value1.split(" ");
        arr2 = value2.split(" ");
        arr3 = value3.split(" ");

		//заполнение массива 0
        function fill(arr) {
            if (arr.length < maxLength(arr1.length, arr2.length, arr3.length)) {
                arr.push("0");
            }
            return arr;
        }

        //заполненные массивы
        arr11 = fill(arr1);
        arr22 = fill(arr2);
        arr33 = fill(arr3);
		
        //поэлементное сложение
        for (i = 0; i < maxLength(arr1.length, arr2.length, arr3.length); i++){
             //   if (typeof arr11[i] !== 'number'){
				//	arr11[i] = 0;
				//}
				//if (typeof arr22[i] !== 'number'){
					//arr22[i] = 0;
				//}
			//	if (typeof arr33[i] !== 'number'){
				//	arr33[i] = 0;
				//}-->
			//	else
							ArrResult[i] = (((+arr1[i]) == NaN) ? arr1[i].toString() : (+arr1[i])) + (((+arr2[i]) == NaN) ? arr2[i].toString() : (+arr2[i])) + (((+arr3[i]) == NaN) ? arr3[i].toString() : (+arr3[i]));

					//ArrResult[i] = (+arr1[i]) + (+arr2[i]) + (+arr3[i]);
        }

		
		for(i = 0; i < ArrResult.length; i++){
		output.value += ArrResult[i] + " ";
		}
}

        //нахождение максимального размера массива
        function maxLength(a, b, c) {
            if (a >= b && a >= c)
                max = a;
            else {
                if (b >= a && b >= c)
                    max = b;
                else
                    max = c;
            }
            return max;
        }