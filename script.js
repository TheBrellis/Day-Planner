// Pulling elements to be modified
const currentDayEl = $('#current-day');
// Find current time and day the site is being accessed on
const currentDay = moment().format('dddd MMMM Do')
const currentHour = moment().format('H');
// Setting Header to show the current date
currentDayEl.text(currentDay);
// Building array of objects to store textarea info into
let allInfo = []
for (i=9 ; i < 18; i++){
    let thisInfo = {
        hour: `${i}`,
        info: ''
    }
    allInfo.push(thisInfo)
}
//-----------------------------------------------------------------------------------------------------------
/* --- Modifying time-blocks --- */
//-----------------------------------------------------------------------------------------------------------

//for loop steps through every element with a data-hour attribute
for (i=9 ; i < 18; i++){
let timeBlock = $(`[data-hour= ${i}]`).children().eq(1);

// assigns a class to the textarea in that element depending on the current time
    if (currentHour > i) {
        timeBlock.addClass('past');
    } else if (currentHour < i){
        timeBlock.addClass('future');
    } else {
        timeBlock.addClass('present');
    }
    //setting text content to equal allInfo array
    if (allInfo[`${i-9}`].hour == i)
        timeBlock.text(allInfo.info)
};
//-----------------------------------------------------------------------------------------------------------
/* --- Storing textarea data to local storage --- */
//-----------------------------------------------------------------------------------------------------------
/*
function storeText (){

let targetParent = $(this).parent();
allInfo.forEach(obj){
    if (targetParent.data('hour') === allInfo.obj.hour);
    let thisInfo = {
        hour: targetParent.data('hour'),
        info: targetParent.children().eq(1).val()
    }
};
}


/* --- Save Events --- */
//$('.saveBtn').on('click', storeText);