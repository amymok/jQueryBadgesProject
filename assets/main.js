$(function() {

  $.ajax({
    url:  'https://www.codeschool.com/users/amymok.json',
    dataType: 'jsonp',
    success: function(response) {
        for (var i = 0; i < response.courses.completed.length; i++) {
            var course = response.courses.completed[i]
            textToAdd = "<div class=\"course\">" +
                "<h3>" + course.title + "</h3>" +
                "<img src=\"" + course.badge + "\">" +
                "<a href=\"" + course.url + "\" target=_blank class=\"btn btn-primary\">See Course</a>" +
                "</div>";
            $("#badges").append(textToAdd);
        }          
    }
  })

});
