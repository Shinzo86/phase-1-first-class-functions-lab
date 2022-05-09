// Code your solution in this file!
const returnFirstTwoDrivers = function drivers(scrubDrivers){
    const newScrubDrivers = scrubDrivers.slice(0,2)
    return newScrubDrivers
}

const returnLastTwoDrivers = function drivers(scrubDrivers){
    const newScrubDrivers = scrubDrivers.slice(-2)
    return newScrubDrivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){
    function fareMultiplier(fare){
        return fare * multiplier
    }
    return fareMultiplier
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, callBack){
    return callBack(arrayOfDrivers)
}

