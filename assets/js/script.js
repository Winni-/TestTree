(function ($, window, document, undefined) {

  'use strict';

  $(function () {
  	
    var data = {
    	tree : [
    		[
    			[
    				[]
    			],
    			[
    				[
    					[]
    				],
    				[
    					[]
    				]
    			]
    		],
    		[],
    		[
    			[
    				[]
    			],
    			[
    				[]
    			],
    		]
    	]
    };

    var flourish = (branch, point) => {
    	let bud = $(point).append("<div class='branch closed'>").children().last();    	
    	if (branch.length > 0) {
    		bud.append("<a href='#'>Open branch")
    		.children("a").click(function(e) {
    			e.preventDefault();
    			let text = $(this).text();
    			$(this).text( text == "Open branch" ? "Close branch" : "Open branch");
    			$(this).siblings(".branch").toggleClass("closed");
    		});

    		for (let i = 0; i < branch.length; i++) {
    			flourish(branch[i],bud);
    		};

    	}else{
    		bud.text("This branch didn'd do it ...yet");
    	}
    };
    flourish(data.tree, "#tree");
  });

})(jQuery, window, document);