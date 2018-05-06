//Binary tree construction

module.exports.getRandomInt = getRandomInt;
module.exports.Tree = Tree;

function getRandomInt(max){
	return (Math.floor(Math.random() * Math.floor(max)));
}

function getValue(){
	return (this.value);
}

function appendNode(racine, node){
	var i = getRandomInt(2);
	if (node == null)
		node = new Node();
	if (i == 0) {
		if (racine.left == null)
			racine.left = node;
		else
			appendNode(racine.left, node);
	}
	else {
		if (racine.right == null)
			racine.right = node;
		else
			appendNode(racine.right, node);
	}
	return (node.getValue());
}

// Show
function showNode(){
	if (this.left != null){
		console.log("left of " + this.value + " is " + this.left.getValue())
		this.left.show(0);
	}
	if (this.right != null){
		console.log("right of " + this.value + " is " + this.right.getValue())
		this.right.show(0);
	}
}

function showTree(){
	if (this.root){
		console.log("[" + this.root.getValue() + "]");
		this.root.show();
	}
}

// Create new Node object
function Node(){
	this.value = getRandomInt(100);
	this.left = null;
	this.right = null;
	this.appendNode = appendNode;
	this.show = showNode;
	this.getValue = getValue;

}

function Tree(size){
	var	i = 1;
	var value = 0;
	
	this.show = showTree;
	if (size == 0)
	{
		this.max = 0;
		this.root = null;
		return ;
	}
	this.root = new Node();
	this.max = this.root.getValue();
	while (i < size){
		value = this.root.appendNode(this.root, null);
		this.max = (this.max < value) ? value : this.max;
		i++;
	}
}

module.exports.getMaxValue = function getMaxValue(tree){
	var max = 0;
	var tmp;

	if (tree && max < tree.getValue())
		max = tree.getValue();
	if (tree && tree.left && max < (tmp = getMaxValue(tree.left)))
		max = tmp;
	if (tree && tree.right && max < (tmp = getMaxValue(tree.right)))
		max = tmp;
	return (max);
}



