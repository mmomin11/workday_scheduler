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
$("#row8 .description").val(localStorage.getItem("row8"));
$("#row9 .description").val(localStorage.getItem("row9"));
$("#row10 .description").val(localStorage.getItem("row10"));
$("#row11 .description").val(localStorage.getItem("row11"));
$("#row12 .description").val(localStorage.getItem("row12"));
$("#row1 .description").val(localStorage.getItem("row1"));
$("#row2 .description").val(localStorage.getItem("row2"));
$("#row3 .description").val(localStorage.getItem("row3"));
$("#row4 .description").val(localStorage.getItem("row4"));
$("#row5 .description").val(localStorage.getItem("row5"));



// create function to assign whether the block of time is current, past, or future. 

})