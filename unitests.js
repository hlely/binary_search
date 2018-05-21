var tree = require("./test.js");

var i = 0;
var size;
var max;
var newTree;
var success = 0;

console.log("Start of tests")
while (i < 1000){
	size = tree.getRandomInt(50);
	newTree = new tree.Tree(size);
	max = tree.getMaxValue(newTree.root);
	if (max == newTree.max)
	{
		success++;
		console.log("\n----------OK----------");
	}
	else
		console.log("\n----------KO----------");
//	newTree.show();
	console.log("Tree size : " + size);
	console.log("Greater value added to tree is :\t" + newTree.max);
	console.log("Max value of tree is :\t\t\t" + max);
	i++;
}

console.log("\nResult : " + success + "/1000 succeeded tests.");
