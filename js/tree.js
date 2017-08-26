 $(function(){

     var setting = {
        view: {
            showLine: false,
            showIcon:false,
            fontCss: getFontCss
        },
        check: {
            enable: true,
            chkboxType:{ "Y" : "ps", "N" : "ps" }
        }
    };
    var zNodes = [{
            name: "父节点1-展开",
            open: true,
            children: [{
                name: '子节点11'
            }, {
                name: '子节点11'
            }, {
                name: '子节点11'
            }]
        }, {
            name: "父节点2",
            children: [{
                name: '父节点21',
                children: [{
                    name: '子节点211'
                }, {
                    name: '子节点212'
                }, {
                    name: '子节点213'
                }, {
                    name: '父节点211',
                    children: [{
                        name: '子节点2111'
                    }, {
                        name: '子节点2112'
                    }, {
                        name: '子节点2113'
                    }]
                }]
            }, {
                name: '父节点22',
                children: [{
                    name: '子节点221'
                }, {
                    name: '子节点222'
                }, {
                    name: '子节点223'
                }, {
                    name: '父节点221',
                    children: [{
                            name: '子节点2211'
                        }, {
                            name: '子节点2212'
                        }, {
                            name: '子节点2213'
                        }

                    ]

                }]
            }],

        }, {
            name: "父节点3-无子节点",
            isParent: true

        }

    ]
     
    function focusKey(e) {
        function focusKey(e) {
            if (key.hasClass("empty")) {
                key.removeClass("empty");
            }
        }
        function blurKey(e) {
            if (key.get(0).value === "") {
                key.addClass("empty");
            }
        }
        var lastValue = "", 
        nodeList = [];
        function searchNode(e) {
            var zTree = $.fn.zTree.getZTreeObj("treedeo");
                var value = $.trim(key.get(0).value);
                var keyType = "";
                    keyType = "name";
                if (lastValue === value) return;
                lastValue = value;
                if (value === "") return;
                updateNodes(false);
                nodeList = zTree.getNodesByParamFuzzy(keyType, value);
            updateNodes(true);

        }
        function updateNodes(highlight) {
        }
        function updateNodes(highlight) {

            var zTree = $.fn.zTree.getZTreeObj("treedeo");
            for( var i=0, l=nodeList.length; i<l; i++) {
                nodeList[i].highlight = highlight;
                zTree.updateNode(nodeList[i]);
            }
        }
        function getFontCss(treeId, treeNode) {
            return (!!treeNode.highlight) ? {color:"#23527c", "font-weight":"bold"} : {color:"#333", "font-weight":"normal"};
        }
        var key;
        $(document).ready(function(){
            $.fn.zTree.init($("#treedeo"), setting, zNodes);
            key = $(".tree-search input");
            key.bind("focus", focusKey)
            .bind("blur", blurKey)
            $(".tree-search button").bind("click", searchNode);
        });

            return (!!treeNode.highlight) ? {color:"#23527c", "font-weight":"bold"} : {color:"#333", "font-weight":"normal"};
        }
        var key;


    $(document).ready(function() {
        $.fn.zTree.init($("#treedeo"), setting, zNodes);
        key = $(".tree-search input");
        key.bind("focus", focusKey)
        .bind("blur", blurKey)
        $(".tree-search button").bind("click", searchNode);
    })



    
 })
