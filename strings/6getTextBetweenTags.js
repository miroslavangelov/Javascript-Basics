﻿	/*Write a function that extracts the content of a html page given as text. The function should return anything that is in a tag, without the tags:
*/
	
	var getHtml = document.documentElement.innerHTML,
		repl = getHtml.replace(/<(.*?)>/g, "");
		console.log(repl);
