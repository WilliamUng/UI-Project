filterSelection1("all")

function filterSelection1(k) {
    var c = k.toLowerCase();
    var x, i;
    x = document.getElementsByClassName("gamename");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
    console.log(x);
}

function filterSelection2() {
    var c = document.getElementById("Search").value;
    filterSelection1(c.toLowerCase());
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

function search() {
	var input = document.getElementById('myInput');
	filter = input.value.toLowerCase();
	if (filter == "breath of the wild" || filter == "zelda"){
		window.location.href = "searchBOTW.html";
		return false;
	}
	else if (filter == "doom"){
		window.location.href = "searchDoom.html";
		return false;
	}
	else if (filter == "apex" || filter == "apex legends"){
		window.location.href = "searchApex.html";
		return false;
	}
	else if (filter == "division" || filter == "tom clancey"){
		window.location.href = "searchDivision.html";
		return false;
	}
	else if (filter == "sekiro" || filter == "shadows die twice"){
		window.location.href = "searchSekiro.html";
		return false;
	}
	else {
		window.location.href = "noResult.html"
		return false;
	}
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}