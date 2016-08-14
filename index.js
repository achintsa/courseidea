$(document).ready(function() {

   
     $.getJSON("https://www.udacity.com/public-api/v0/courses", function(data) {
  
        var html = "";

         $.each(data.courses, function(count) {

          html += "<div class = 'cat'>";

          // Only change code below this line.
          
           html += "<a href = '" + data.courses[count].homepage + "'>"+data.courses[count].title+"</a>";
          
          // Only change code above this line.

          html += "</div>";

        });

        $(".message").html(html);

      });
    });