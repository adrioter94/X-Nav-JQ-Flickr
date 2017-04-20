
$(document).ready(function() {

  function searchFlickr(tag) {
    var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    $.getJSON(flickerAPI, {
      tags: tag,
      tagmode: "any",
      format: "json"
    }).done(function(data) {
      $.each(data.items, function(i, item) {
        $("<img>").attr("src", item.media.m).appendTo(".images");
        if ( i === 4 ) {
          return false;
        }
      });
    });
  };

  $(".search").click(function() {
    $(".images").empty();
    var tag = $(".input").val();
    searchFlickr(tag);
  });

  $(".fuenlabrada").click(function() {
    $(".images").empty();
    searchFlickr("fuenlabrada");
  });
});
