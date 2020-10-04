$(document).ready(function(){

    let today = moment().format('dddd, MMM Do YYYY');
    $("#currentDay").append(today);

    //variables needed to make the row
    
    let row;
    let hour;
    let textArea;
    let saveBtn;
    let saveIcon;

    let workSchedule = {
        "9:00 AM" :"",
        "10:00 AM":"",
        "11:00 AM":"",
        "12:00 AM":"",
        "1:00 PM":"",
        "2:00 PM":"",
        "3:00 PM":"",
        "4:00 PM":"",
        "5:00 PM":""
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
    

    // textArea = $("<textarea>").addClass("col 8 description").text(todoItem);
    let now = moment().format('LT');
    console.log(time);
    console.log(now);
    
    if(time < now){
        textArea = $("<textarea>").addClass("col 8 description past").text(todoItem);
    } else if(time === now){
            textArea = $("<textarea>").addClass("col 8 description present").text(todoItem);
    } else { textArea = $("<textarea>").addClass("col 8 description future").text(todoItem)};
        

    saveBtn = $("<div>").addClass("col-2 saveBtn");
    saveIcon = $("<i>").addClass("fa fa-save");
    saveBtn.append(saveIcon);

    row.append(hour, textArea, saveBtn);
    






    });

// if tab save is click:
    //.click, function(){}
        // to save input item
    
// save input value to local Storage
    // localStorage.setItem("schedule", saveItem)









})


