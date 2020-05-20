// document.ready set up to begin coding
$(document).ready(function() {

// script to place timer on the top using moment.js in text format
$("#currentDay").text(moment().format('dddd') + ", " + moment().format("MMM Do YY"));

// save button listener and time stamp
$(".saveBtn").on("click", function () {
    //get nearby values.
    console.log(this);
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    //set items in local storage.
    localStorage.setItem(time, text);
})

// set items in local storage at save. 
$("#time8 .description").val(localStorage.getItem("time8"));
$("#time9 .description").val(localStorage.getItem("time9"));
$("#time10 .description").val(localStorage.getItem("time10"));
$("#time11 .description").val(localStorage.getItem("time11"));
$("#time12 .description").val(localStorage.getItem("time12"));
$("#time13 .description").val(localStorage.getItem("time13"));
$("#time14 .description").val(localStorage.getItem("time14"));
$("#time15 .description").val(localStorage.getItem("time15"));
$("#time16 .description").val(localStorage.getItem("time16"));
$("#time17 .description").val(localStorage.getItem("time17"));


// create function to assign whether the block of time is current, past, or future. 
function timeTracker() {

    var currentHour = moment().hour();

    $(".time-slot").each(function () {
        var slotHour = parseInt($(this).attr("id").split("time")[1]);
        console.log( slotHour, currentHour)

        if (slotHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        } 
        else if (slotHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
 timeTracker();
})