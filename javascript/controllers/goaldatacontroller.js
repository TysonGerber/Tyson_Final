mainApp
    .controller("GoalDataController", dCtrl);
console.log('got here')

dCtrl.$inject = ["goalDataFactory", "$location"]




function dCtrl(goalDataFactory, $location) {
    var dCtrl = this;
   // window.dCtrl = dCtrl; // to debug 

    dCtrl.goalIndex = 0;

   // dCtrl.greeting = "This is working!"


    //Name Your Goal Input

    dCtrl.myGoals = goalDataFactory.myGoals
    console.log("goal data factory", goalDataFactory)

    dCtrl.myGoalSubmit = function () {

        dCtrl.costLeft = dCtrl.cost - dCtrl.saved;



        dCtrl.startDate = new Date();
        console.log("Chosen date: ", dCtrl.myDate);

        dCtrl.timeLeft = moment.duration(moment(dCtrl.myDate).diff(moment(dCtrl.startDate)));

        // console.log(dCtrl.timeLeft.years()); // 8 years
        // console.log(dCtrl.timeLeft.months()); // 5 months
        // console.log(dCtrl.timeLeft.days()); // 2 days


        
        console.log("Time left: ", dCtrl.timeLeft);

        dCtrl.myGoals.push({

            name: dCtrl.name,
            cost: dCtrl.cost,
            date: dCtrl.myDate,
            img: dCtrl.imgUrl,
            saved: dCtrl.saved,
            costLeft: dCtrl.costLeft,
            timeLeft: dCtrl.timeLeft
        })



        $location.url("/returnedData")

        dCtrl.goalIndex++;
    };



    console.log("My goals push");


    // CALENDAR INFORMATION
    dCtrl.myDate = new Date();

    dCtrl.minDate = new Date()
    dCtrl.myDate.getFullYear(),
        dCtrl.myDate.getMonth() - 2,
        dCtrl.myDate.getDate();

    dCtrl.maxDate = new Date(
        dCtrl.myDate.getFullYear(),
        dCtrl.myDate.getMonth() + 2,
        dCtrl.myDate.getDate());

    dCtrl.onlyWeekendsPredicate = function (date) {
        var day = date.getDay();
        return day === 0 || day === 6;
    }
}






//    function cost(cost,saved) {
//     var costLeft = cost - saved 
// console.log(costLeft)
// return costLeft
// }
// cost(4,2)


// function completedGoals() {
//     if (dCtrl.timeLeft === 0; 
//     console.log("true");
// }
//     else {
//     console.log("false");
// }

// };


