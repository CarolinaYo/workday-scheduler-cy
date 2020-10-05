let workSchedule = {
    "9:00 AM":"",
    "10:00 AM":"",
    "11:00 AM":"",
    "12:00 PM":"",
    "1:00 PM":"",
    "2:00 PM":"",
    "3:00 PM":"",
    "4:00 PM":"",
    "5:00 PM":""
};

function currentDay(){
    let today = moment().format('dddd, MMM Do YYYY');
    $("#currentDay").append(today);
}

 
function renderScedule(){
     
    //variables needed to make the row
    
    let row;
    // let midCol;
    let hour;
    let textArea;
    let saveBtn;
    let saveIcon;
    let now;

    $.each(workSchedule, function(time, todoItem){
        //create row
    
        row = $("<div>").addClass("row");
        $(".time-block").append(row);
    
        //create collums
        hour = $("<div>").addClass("col-2 hour").text(time);
    
        now = moment().format('LT');
        // console.log(time);
        console.log("---------------------------")

        now = moment(now, "h:mma");
        time = moment(time, "h:mma");
        //check console
        console.log("now: ", now._i);
        console.log("time: ", time._i);
        console.log("now.isBefore(givenTime): ", now.isBefore(time));
        console.log("now.isAfter(givenTime): ", now.isAfter(time));

        let future = now.isBefore(time);

        if (future){
            textArea = $("<textarea>").addClass("text col-8 description future").text(todoItem);

        } else if (time === now) {
            textArea = $("<textarea>").addClass("text col-8 description present").text(todoItem);

        } else{
            textArea = $("<textarea>").addClass("text col-8 description past").text(todoItem);

        }; 
        
                   
        saveBtn = $("<div>").addClass("col-2 saveBtn");
        saveIcon = $("<i>").addClass("fa fa-save");
   
        saveBtn.data("hour", time);


        $(saveBtn).on("click", function(event){
           let hour = $(event.target).data("hour");
           let textAreaVallue = $(event.target).sibling(".description").val;
           schedule[time] = textAreaVallue;
           saveSchedule();
        })

        saveBtn.append(saveIcon);
        row.append(hour, textArea, saveBtn);
        
        });
    
    
}
function saveSchedule(){
    
    localStorage.setItem("workday", JSON.stringify(schedule));
       
}   
    
function getScedule(){
    if (localStorage.getItem("workday")){
        schedule = JSON.parse (localStorage.getItem("workday"));
    }
}

    
    
function initialize(){
    currentDay();
    //getSchedule();
    renderScedule();

}


$(document).ready(function(){
        //function call....
        initialize();


})


