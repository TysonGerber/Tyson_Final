mainApp   //Just like controllers, when we define a factory. We pass it a name a and function that represent the factory.
    .factory('goalDataFactory', goalDataFact);





function goalDataFact(){

var myGoals = [];

    return {
           myGoals: myGoals // this states return an object that is an empty object that is an empty array.
    }
}