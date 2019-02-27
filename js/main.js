
$(".search-bar").on("keyup", function() {
  const $input = $(".search-bar").val().toLowerCase();
  const $photoSet = $("a[href*='img']");

  for(let i=0; i< $photoSet.length; i+=1) {
    const $descript = $($photoSet[i]).attr("data-title").toLowerCase();
    const $photoBlocks = $(".photo-block")
    if ($descript.indexOf($input) > -1) {
      $photoBlocks[i].style.display = "";
    } else {
      $photoBlocks[i].style.display = "none";
    }  
  }
});
