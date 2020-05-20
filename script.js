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


// load the local stoarge items at refresh for the items saved in each row of time slot. 

// create function to assign whether the block of time is current, past, or future. 

})