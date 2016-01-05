
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
				  data: {'name1':'Lina','name2':'Sarah','name3':'Razan'},
				  success: function(response) { 
				  // success
					$('#divResults').empty();
					$.each(response, function(i,item){
						// Console log json objects
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
