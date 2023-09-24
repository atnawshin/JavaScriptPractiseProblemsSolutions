function gemsToDiamond(numOfGems1, numOfGems2, numOfGems3) {
    if (typeof numOfGems1 !== 'number' || typeof numOfGems2 !== 'number' || typeof numOfGems3 !== 'number') {
        return "Please enter valid numbers";
    } else if (numOfGems1 < 0 || numOfGems2 < 0 || numOfGems3 < 0) {
        return "Please enter positive numbers";
    } else if (numOfGems1 % 1 !== 0 || numOfGems2 % 1 !== 0 || numOfGems3 % 1 !== 0) {
        return "Please enter intiger numbers";

    }
    else {
        const powerOf1stFriendsGems = 21;
        const powerOf2ndFriendsGems = 32;
        const powerOf3rdFriendsGems = 43;

        const gemsToDiamond1 = powerOf1stFriendsGems * numOfGems1;
        const gemsToDiamond2 = powerOf2ndFriendsGems * numOfGems2;
        const gemsToDiamond3 = powerOf3rdFriendsGems * numOfGems3;

        const totalDiamonds = gemsToDiamond1 + gemsToDiamond2 + gemsToDiamond3;
        if (totalDiamonds > 1000 * 2) {
            const numberOfDiamonds = totalDiamonds - 2000;
            return numberOfDiamonds;
        } else {
            return totalDiamonds;
        }
    }


}

const numberOfFirstFriendsGems = 100;
const numberOfSecondFriendsGems = 5;
const numberOfThirdFriendsGems = 1;

const totalNumberOfGems = gemsToDiamond(numberOfFirstFriendsGems, numberOfSecondFriendsGems, numberOfThirdFriendsGems);
console.log(totalNumberOfGems);