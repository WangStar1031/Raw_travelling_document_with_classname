function getElementByClassName(_className){ //main function that get elements by class name
	var doc = document.body;	   // first node -> body
	var arrNodes = [];					     // return value initialize
	function searchClassNames(_curNode, _className, _arrNodes){ // recursion function that find node that has class name
			if(!_curNode)return;      // if node is null then return
			var strClassNames = _curNode.className;			   // get the class name
			if( strClassNames){			  // if class name is not null or ""
					var lstClassNames = strClassNames.split(" ");       // get class names
					if( lstClassNames.indexOf(_className) != -1){     // if has same class name
							_arrNodes.push(_curNode);		       // then insert to array
					}
			}
			searchClassNames(_curNode.childNodes[0], _className, _arrNodes);    // child node search
			searchClassNames(_curNode.nextSibling, _className, _arrNodes);			  // next node search
	}
	searchClassNames(doc, _className, arrNodes); // get all nodes
	return arrNodes;	      // return nodes
}
getElementByClassName("w3-modal");

function getElementByClassNameWithoutRecursion(_className){
        function HasClassName(_node, _className){
                if( !_node)return false;
                var strClassNames = _node.className;
                if( strClassNames){
                        var lstClassNames = strClassNames.split(" ");
                        if( lstClassNames.indexOf(_className) != -1){
                                return true;
                        }
                }
                return false;
        }
        var doc = document.body;
        var curNode = doc;
        var arrNodes = [];
        var retVal = [];
        while(curNode != null || arrNodes.length > 0){
                if(curNode != null){
                        for( var i = 0; i < curNode.childNodes.length; i++){
                                arrNodes.push(curNode.childNodes[i]);
                        }
                }
                curNode = arrNodes.shift();
                if( HasClassName(curNode, _className)){
                        retVal.push(curNode);
                }
        }
        console.log(retVal);
        return retVal;
}
getElementByClassNameWithoutRecursion("w3-modal");

