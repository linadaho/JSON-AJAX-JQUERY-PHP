
(function($){
	
    family = {
		
        settings: {
			ajaxImage: 'loading.gif'
        },

        init: function() {
			// events
			$('button').on('click', function(e) {
				e.preventDefault();
				eval('family.runFunction["'+$(this).attr("id")+'"]();');
			});
        },

        runFunction: {
			// get JSON data 
            "getData": function() {
				var outputResults = $("#divResults"); 
				console.log('running getFacebookData...');
				outputResults.html('<img src="img/loading.gif" />');
				$.ajax({
				  url: 'api/getDataAPI.php',
				  dataType: 'json',
				  data: {'val1':'lina','val2':'sarah'},
				  success: function(response) { 
				  // success
					$('#divResults').empty();
					$.each(response, function(i,item){
						// log json objects
						console.log(item);
						outputResults.append('<hr><li>'+item.name);
						outputResults.append('<li>'+item.city + ' ' + item.state);
						outputResults.append('<li>'+item.birthday);
					});
				  },
				  error: function(e) { 
				  // error
					 alert('error');
					$('#divResults').html(e.message);
				  }
				});
            },

        }

    }

})(jQuery);
