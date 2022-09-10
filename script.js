//Inserts Current Day into Jumbotron
var today = moment();
$('#currentDay').text(today.format('MMMM Do, YYYY'));


//Applies Current Hour and CSS styling based on past, present or furture time
var hourCycle =function(){
    var currentHour = moment().hour() 

    for(var i = 9; i < 18; i++){
        var taskArea = $("#task-"+i)  
        if(currentHour > i){
            $(taskArea).addClass("past");
        } else if (currentHour === i){
            $(taskArea).addClass("present");
        }else{
            $(taskArea).addClass("future")
        }
    }
}

hourCycle();

//Applies functionality to Save Button so that text entry is saved to Local Storage and entries persist.
var saveBtn = $('.saveBtn');

saveBtn.on("click", function() {
    var time = $(this).siblings(".hour").text();
    var task = $(this).siblings(".taskEntry").val();

    localStorage.setItem(time, task);
});



function saveTasks () {
    $(".hour").each(function() {
        var rightNow = $(this).text();
        var myTask = localStorage.getItem(rightNow);

        if (myTask !== null) {
            $(this).siblings(".taskEntry").val(myTask);
        }
    });
}

saveTasks();