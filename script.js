var today = moment();
$('#currentDay').text(today.format('MMMM Do, YYYY'));


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

