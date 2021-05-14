nova.commands.register("turnselectionmarkdown.bold", (editor) => {
	var original = editor.selectedText;
	
	editor.insert("**" + original + "**")
		
});

nova.commands.register("turnselectionmarkdown.italic", (editor) => {
	var original = editor.selectedText;
	
	editor.insert("*" + original + "*")
		
});
