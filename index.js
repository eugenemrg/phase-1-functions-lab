// Code your solution in this file!
const blockLengthInFeet = 264;
const headquarterBlock = 42;

function distanceFromHqInBlocks(pickupBlock) {
    return Math.abs(headquarterBlock-pickupBlock)
}

function distanceFromHqInFeet(pickupBlock){
    return distanceFromHqInBlocks(pickupBlock) * blockLengthInFeet;
}

function distanceTravelledInFeet(start, destination){
    return Math.abs(destination - start) * blockLengthInFeet; 
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let fare;

    if(distance<=400){
        fare = 0;
    }else if(distance>400 && distance<=2000){
        const chargableDistance = distance - 400;
        fare = (chargableDistance * 2) / 100;
    }else if(distance>2000 && distance<=2500){
        fare = 25;
    }else if(distance > 2500){
        return 'cannot travel that far';
    }

    return fare;
  }