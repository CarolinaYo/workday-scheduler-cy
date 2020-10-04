$(document).ready(function(){
    //at header create current date:
    //need moment.js
    //append to display Day, Month, Date, Year
    let today = moment().format('dddd, MMM Do YYYY');
    $("#currentDay").append(today);

    //variables needed to make the row
    
    let row;
    let hour;
    let textArea;
    let saveBtn;
    let saveIcon;
    // let timeBlock = $("time-block");
    let workSchedule = {
        "9:00AM" :"test",
        "10:00AM":"",
        "11:00AM":"",
        "12:00AM":"",
        "1:00PM":"",
        "2:00PM":"",
        "3:00PM":"",
        "4:00PM":"",
        "5:00PM":""
    };

   //Call local storage at start of page
    //renderLastSchedule();
    //make function scheduledItem to call local storage.
    //var renderLastSchedule = local.storage.getItem("saveItem");

    $.each(workSchedule, function(time, todoItem){
    //create row

    row = $("<div>").addClass("row");
    $(".time-block").append(row);
    //create collums
    hour = $("<div>").addClass("col-2 hour").text(time);
    console.log(time);
    row.append(hour);
    //text
    // col = $("<div>").addClass("col-8");
    textArea = $("<textarea>").addClass("col 8 description").text(todoItem);
    // col.append(textArea);
    row.append(textArea);
    saveBtn = $("<div>").addClass("col-2 saveBtn");
    saveIcon = $("<i>").addClass("fa fa-save");
    saveBtn.append(saveIcon);

    row.append(saveBtn);
    

    });

// if tab save is click:
    //.click, function(){}
        // to save input item
    
// save input value to local Storage
    // localStorage.setItem("schedule", saveItem)









})


