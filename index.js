// Code your solution in this file!
const returnFirstTwoDrivers= function(arrayDrivers){
    return arrayDrivers.slice(0,2)
    }
    
    const returnLastTwoDrivers= function(arrayDrivers){
        return arrayDrivers.slice(-2)
        }
        
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(integer){
    return function(fare){
      return fare*integer
    }
}
   

const fareDoubler=createFareMultiplier(2)
   
const fareTripler=createFareMultiplier(3)


function selectDifferentDrivers(drivers,driversFunction){
return driversFunction(drivers)
}