// A Script to help with localStorage
// Checking localStorage for text info;
let allInfoJSON = localStorage.getItem('allInfo');
allInfo = [];
if (allInfoJSON){
    allInfo = JSON.parse(allInfoJSON);
} else {
    for (i=9 ; i < 18; i++){
        let thisInfo = {
            hour: `${i}`,
            info: ''
        };
        allInfo.push(thisInfo);
    };
};
