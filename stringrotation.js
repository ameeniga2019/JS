
var str = "amrutha";
var str1 ="";

var len = str.length;

var j = len - 1;

for (var i = 0; i < len; i++) {
	//console.log(str.length);
	var sTr = str[j];
	console.log(sTr);
	str = str.slice(0, -1);
	console.log(str);
	// j--;
	str = sTr+str;
	console.log(str);
}