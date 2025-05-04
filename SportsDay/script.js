let scoreBoard = {
    red: 0,
    blue: 0,
    green: 0,
    yellow: 0
};

function outputDom(output) {
    document.getElementById('output').innerText += output + '\n';
}

function OpeningCeremony(callback) {
    outputDom("Opening Ceremony: Welcome to the Sports Day!");
    setTimeout(() => {
        outputDom("Let the games begin!\n");
        callback();
    }, 3000);
}

function Race100M(callback) {
    setTimeout(() => {
        const times = {
        red: Math.floor(Math.random() * 6) + 10,
        blue: Math.floor(Math.random() * 6) + 10,
        green: Math.floor(Math.random() * 6) + 10,
        yellow: Math.floor(Math.random() * 6) + 10,
        };

        const sorted = Object.entries(times).sort((a, b) => a[1] - b[1]);
        scoreBoard[sorted[0][0]] += 50;
        scoreBoard[sorted[1][0]] += 25;

        outputDom("100M Race times: " + JSON.stringify(times));
        outputDom("Updated Scores after 100M Race: " + JSON.stringify(scoreBoard) + '\n');
        callback();
    }, 2000);
}

function LongJump(callback) {
    setTimeout(() => {
        const colors = Object.keys(scoreBoard);
        const winner = colors[Math.floor(Math.random() * colors.length)];
        scoreBoard[winner] += 150;

        outputDom(`${winner.toUpperCase()} won the Long Jump and earned 150 points!`);
        outputDom("Updated Scores after Long Jump: " + JSON.stringify(scoreBoard) + '\n');
        callback();
    }, 2000);
}

function HighJump(callback) {
    outputDom("High Jump is starting...");
    setTimeout(() => {
        const userInput = prompt("What color secured the highest jump? (red/blue/green/yellow)");
        if (userInput && scoreBoard.hasOwnProperty(userInput.toLowerCase())) {
        scoreBoard[userInput.toLowerCase()] += 100;
        outputDom(`${userInput.toUpperCase()} won the High Jump and earned 100 points!`);
        } else {
        outputDom("Event was cancelled due to invalid or no input.");
        }
        callback(); // Proceed to Award Ceremony
    }, 1000);
}

function AwardCeremony() {
    outputDom("\n Award Ceremony Begins...");

    const sortedScores = Object.entries(scoreBoard).sort((a, b) => b[1] - a[1]);

    sortedScores.forEach(([color, score], index) => {
        outputDom(`${index + 1}️⃣  ${color.toUpperCase()} - ${score} points`);
    });
}

function startEvent() {
    document.getElementById('output').innerText = '';
    scoreBoard = { red: 0, blue: 0, green: 0, yellow: 0 };
    OpeningCeremony(() => {
        Race100M(() => {
            LongJump(() => {
            HighJump(() => {
                AwardCeremony();
            });
            });
        });
    });
}