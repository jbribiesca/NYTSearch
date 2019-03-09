// https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=Wg0SfSHkxKoSMxEpmAwGAg0vDhaQu9qg&begin_date=20180101&end_date=20190101

$("button").on("click", function() {
    console.log($("#begindate").val())

    
    var query = $("#searchterm").val();
    var begin_date = "&begin_date=" + $("#begindate").val();
    var end_date = "&end_date=" +  + $("#enddate").val();
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
      query + "&api-key=Wg0SfSHkxKoSMxEpmAwGAg0vDhaQu9qg" + begin_date + end_date;

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {

        console.log(response);

        var articles = response.response.docs;

        for (var i = 0; i < articles.length; i++) {
          var articleDiv = $("<div>");

          var description = articles[i].lead_paragraph;

          var p = $("<p>").text("Snippet: " + description);

          var articleLink = $("<a>");
          articleLink.attr("href", articles[i].web_url);
          articleLink.text(articles[i].snippet)

          articleDiv.prepend(p);
          articleDiv.prepend(articleLink);

          $("#article-section").prepend(articleDiv);
        }
      });
  });