jQuery(document).ready(function(){
	var rowToRemove = 2;// Starting from 0
	this.handleTableHeading = function(mainTable){
		var headingRows = jQuery(mainTable).find('thead tr:first-child th');
		headingRows.each(function(index){
			if(index == rowToRemove){
				jQuery(this).remove();
			}			
		})
	}
	this.handleTableBody = function(mainTable){
		var bodyRows = jQuery(mainTable).find('tbody tr');
		var previousRow = null;
		
		bodyRows.each(function(index){
			var columns = jQuery(this).find('td');			
			var previousColumn = null;
			
			if(columns.length > 1){
				columns.each(function(_index){	
					if(_index == 1 && jQuery(this).find('a')[0].innerHTML !== "Brazilian"){
						jQuery(this).attr("rowspan",1);					
					}	
					
					if(_index == rowToRemove){
						var html = jQuery(this).html();
						var mergedElem = "<div>"+ jQuery(this).html() +"</div>";
						jQuery(previousColumn).append(mergedElem);
						jQuery(this).remove();
					}
					previousColumn = jQuery(this);
				});
				previousRow = jQuery(this);
				return;
			}
		});
		jQuery(mainTable).find('.mw-collapsible-toggle-collapsed').click();
		jQuery(mainTable).find('.mw-collapsible-toggle-expanded').remove();
	}
	
	var mainArticle = jQuery("#WikiaArticle");
	var mainTable = jQuery("#WikiaArticle #mw-content-text .article-table");
	
	this.handleTableHeading(mainTable);
	this.handleTableBody(mainTable);
	
	
});

