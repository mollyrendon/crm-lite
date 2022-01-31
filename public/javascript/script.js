//Current Date
var todaysDate = moment().format("DD MMM, YYYY hh:mm");
console.log(todaysDate);

$("p#currentDay").text(todaysDate);

//Current Time
var currentHour = moment().hour();
console.log(currentHour);
$(".description").each(function () {
  var val = parseInt($(this).prop("id"));
  if (val > currentHour) {
    $(this).addClass("future");
  } else if (val < currentHour) {
    $(this).addClass("past");
  } else {
    $(this).addClass("present");
  }
});

//Save Functions
function saveData() {}

$(".saveBtn").on("click", function () {
  var thisBtn = $(this);
  var parentDiv = thisBtn.parent();
  var textarea = parentDiv.find("textarea");
  var value = textarea.val();
  var key = textarea.attr("id");
  localStorage.setItem(key, value);
});

for (var hour = 9; hour < 18; hour++) {
  $("#" + hour).val(localStorage.getItem(hour));
}

//delete function 
function delData() {}

$(".delBtn").on("click", function () {
  var thisBtn = $(this);
  var parentDiv = thisBtn.parent();
  var textarea = parentDiv.find("textarea");
  var value = textarea.val();
  var key = textarea.attr("id");
  localStorage.removeItem(key, value);
    })

$(".delBtn").click(function(){
  location.reload()
})