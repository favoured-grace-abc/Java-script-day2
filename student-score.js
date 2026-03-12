let score1 = 86, score2 = 93, score3 = 68, score4 = 74, score5 = 46;

for (let i = 1; i <= 5; i++) {
    let score;
    
    if (i === 1) score = score1;
    else if (i === 2) score = score2;
    else if (i === 3) score = score3;
    else if (i === 4) score = score4;
    else score = score5;
    
    let grade;
    if (score >= 90) grade = "A";
    else if (score >= 80) grade = "B";
    else if (score >= 70) grade = "C";
    else if (score >= 60) grade = "D";
    else grade = "F";
    
    console.log("Score " + i + ": " + score + " = Grade " + grade);
}