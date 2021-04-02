//set moment to a varibale 
var today = moment();
//create a variable to show the current date in a specifc format 
var currentDate = today.format("MM/DD/YY  h:mm:ss a");


//setting the current date 
$("#currentDay").text("Today's Date: " + currentDate);

$(document).ready(function () {

    // For loop to get and display tasks from local storage
    hourArr = $('.hour').toArray();
    for (i = 0; i < hourArr.length; i++) {
        $(hourArr[i]).siblings('textarea').text(localStorage.getItem($(hourArr[i]).attr('data-time')));
    }
});


// For loop to print rows with timeblocks, taskblocks, and save buttons
for (i = 0; i < 9; i++) {
    var rowBlock = $('<div>').addClass('row');
    var timeBlock = $('<div>').addClass('hour col-md-2').text(moment('9:00 AM', 'hh:mm A').add(i, 'hours').format('hA'));
    timeBlock.attr('data-time', moment('9:00 AM', 'hh:mm A').add(i, 'hours').format('hA'));
    var taskBlock = $('<textarea>').addClass('col-md-9');  
    var saveButton = $('<button>').addClass('saveBtn col-md-1').html('<i class="fas fa-save"></i>');

    //add rows, time, save buttons
    $('.container').append(rowBlock);
    $(rowBlock).append(timeBlock);
    $(timeBlock).after(taskBlock);
    $(taskBlock).after(saveButton);


    // if statement determines the color of the row
    if (today.isSame(moment('9:00 AM', 'hh:mm A').add(i, 'hours'), 'hour')) {
        $(taskBlock).addClass('present');
    } else if (today.isBefore(moment('9:00 AM', 'hh:mm A').add(i, 'hours'), 'hour')) {
        $(taskBlock).addClass('future');
    } else if (today.isAfter(moment('9:00 AM', 'hh:mm A').add(i, 'hours'), 'hour')) {
        $(taskBlock).addClass('past');
    }
}



