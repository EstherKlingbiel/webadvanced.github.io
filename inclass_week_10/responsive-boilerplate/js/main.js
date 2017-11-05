$(document).ready(function(){

	console.log("RSS - Responsive");

	//rss url here
   	var statement = "select * from feed where url='http://rss.nytimes.com/services/xml/rss/nyt/Space.xml'";
    
    //yql function
    $.queryYQL(statement, "json", undefined, function (data) { 

		//title here
		$("#times").append("<h1>The New York Times: Space & Cosmos RSS Feed</h1>");

        //for loop to call rss results
        for (var i = 0; i < data.query.results.item.length; i++) {

        //log the objects
        console.log(data.query.results.item[i]);

        //objects here
        $(".titles").append("<br>" + "<p class='author'>" + data.query.results.item[i].creator + 
        "</p>" + "<p class='title'>" + data.query.results.item[i].title + "</p>" + "<p class='descriptions'>" + data.query.results.item[i].description + "</p>" + "<br>");
        }//end for loop
    });//end space & cosmos
});//end jquery