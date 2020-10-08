let workSchedule = {
  "9:00 AM": "",
  "10:00 AM": "",
  "11:00 AM": "",
  "12:00 PM": "",
  "1:00 PM": "",
  "2:00 PM": "",
  "3:00 PM": "",
  "4:00 PM": "",
  "5:00 PM": "",
};

function currentDay() {
  let today = moment().format("dddd, MMM Do YYYY");
  $("#currentDay").append(today);
}

function getSchedule() {
  if (localStorage.getItem("workday")) {
    workSchedule = JSON.parse(localStorage.getItem("workday"));
  }
}

function saveSchedule() {
  localStorage.setItem("workday", JSON.stringify(workSchedule));
}

function renderSchedule() {
  let row;
  let hour;
  let midDiv;
  let textArea;
  let saveBtn;
  let saveIcon;
  let now;

  $.each(workSchedule, function (time, todoItem) {
    //create row
    row = $("<div>").addClass("row");
    $(".time-block").append(row);

    //create collums
    hour = $("<div>").addClass("col-2 hour").text(time);

    now = moment().format("LT");
    now = moment(now, "ha");
    time = moment(time, "ha");

    let future = now.isBefore(time);
    let past = now.isAfter(time);

    midDiv = $("<div>").addClass("col-8 mid-col");

    textArea = $("<textarea>").addClass("description").text(todoItem);

    if (future) {
      midDiv.addClass("future");
    } else if (past) {
      midDiv.addClass("past");
      textArea.attr("readonly", true);
    } else {
      midDiv.addClass("present");
    }

    midDiv.append(textArea);

    saveBtn = $("<div>").addClass("col-2 saveBtn");
    saveIcon = $("<i>").addClass("fa fa-save");

    saveBtn.data("hour", time);

    $(saveBtn).on("click", function (event) {
      let hour = $(event.target).parent().data("hour");

      let textAreaValue = $(event.target)
        .parent()
        .siblings(".mid-col")
        .children(".description")
        .val();

      workSchedule[hour._i] = textAreaValue;

      saveSchedule();
    });

    saveBtn.append(saveIcon);
    row.append(hour, midDiv, saveBtn);
  });
}

function initialize() {
  currentDay();
  getSchedule();
  renderSchedule();
}

$(document).ready(function () {
  initialize();
});
