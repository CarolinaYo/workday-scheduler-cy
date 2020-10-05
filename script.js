$(document).ready(function(){    
    initialize();
})

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


function getScedule(){
    if (localStorage.getItem("workday")){
        workSchedule = JSON.parse (localStorage.getItem("workday"));
    }
} 

function saveSchedule(){
    
    localStorage.setItem("workday", JSON.stringify(workSchedule));
       
}   
    
function renderScedule(){
     
    //variables needed to make the row
    
    let row;
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
      

        let future = now.isBefore(time);

        if (future){
            textArea = $("<textarea>").addClass("text col-8 description future").text(todoItem);

        } else if (now === time) {
            textArea = $("<textarea>").addClass("text col-8 description present").text(todoItem);

        } else{
            textArea = $("<textarea>").addClass("text col-8 description past").text(todoItem);

        }; 
        
                   
        saveBtn = $("<div>").addClass("col-2 saveBtn");
        saveIcon = $("<i>").addClass("fa fa-save");
   
        saveBtn.data("hour", time);


        $(saveBtn).on("click", function(event){

           let hour = $(event.target).data("hour");
           let parentCol = $(event.target).parent();
           let textAreaValue = parentCol.children(".description").val();
          
          
           workSchedule[time] = textAreaValue;
           saveSchedule();
        })

        saveBtn.append(saveIcon);
        row.append(hour, textArea, saveBtn);
        
        });
    
       
        
            
}


    
    
function initialize(){
    currentDay();
    //getSchedule();
    renderScedule();

}





