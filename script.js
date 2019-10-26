//pulling elements to be modified
const currentDayEl = $('#current-day');


// Find current time and day the site is being accessed on
const currentDay = moment().format('dddd MMMM Do')
const currentHour = moment().format('H');

// Setting Header to show the current date
currentDayEl.text(currentDay);

// Changing background of textarea's depending on currentHour
    //for loop steps through every element with a data-hour attribute and assignes a class to the textarea in that element depending on the current time

for (i=9 ; i < 18; i++){
let timeBlock = $(`[data-hour= ${i}]`);
    if (currentHour > i) {
        timeBlock.children().eq(1).addClass('past');
    } else if (currentHour < i){
        timeBlock.children().eq(1).addClass('future');
    } else {
        timeBlock.children().eq(1).addClass('present');
    }
};
