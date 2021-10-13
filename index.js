// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']) {
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function (drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']) {
    return drivers.slice(2, 4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return function (fare) {
        return int * fare
    }

}
// const fareDoubler = function double() {
//     return (function createFareMultiplier(a) {
//         return function () {
//             return a * a
//         }

//     }) * 2
// }
const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'], selectingFunction) {
    return selectingFunction(drivers)
}

