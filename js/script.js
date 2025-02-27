//jQuery
    $(function(){

	$( "#dragg" ).draggable();

	$( "#accordion" ).accordion({
		collapsible: true
	});

	var data = [ "HTML",
	         "CSS",
	         "JavaScript" 
             ];

                $( "#c_name" ).autocomplete({
      source: data
    });

	


});