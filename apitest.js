$(document).ready(function() {
  $.ajax({
    url: "https://api.coursera.org/api/courses.v1?q=search&query=malware+underground",
    type: 'GET',
    dataType: "json",
    success: function(data) {
        console.log(JSON.stringify(data,null,4));
    }
  }); 
});