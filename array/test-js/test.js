var scores = [60, 50, 60, 58, 54, 54,
              58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51,
              69, 64, 66, 55, 52, 61,
              46, 31, 57, 52, 44, 18,
              41, 53, 55, 61, 51, 44];

var BUBBLES_TESTS = scores.length;
var hight_score = scores[0] ;

var i = 0;
// Тут хранятся индексы самых высоких значений
var indexHighScore = [];
while (scores.length > i) {
    console.log("Bubble solution #" + i + " score " + scores[i]);
    if (scores[i] >= hight_score) {
        hight_score = scores[i];



    }
    i = i + 1;
}

    var y = 0;
    while (scores.length > y) {

        if (hight_score == scores[y]) {
            arrayAdd(y);
        }

        y = y + 1;
    }


function arrayAdd(indexArray) {
    var hightIndex = indexHighScore.length;
    return indexHighScore[hightIndex] = indexArray;
}

var text = "Solution with highest score: ";

if (indexHighScore.length == 0) {
    var outputIndexHighScore = text + indexHighScore[0];
    console.log(outputIndexHighScore);
} else if (indexHighScore.length > 0) {

    var x = 0;

    while (indexHighScore.length > x) {
        if (x == 0) {

            var outputIndexHighScore = text + indexHighScore[x];
        } else {
            outputIndexHighScore = outputIndexHighScore + ", " + indexHighScore[x];
        }
x = x + 1;

    }
}

console.log(outputIndexHighScore);
