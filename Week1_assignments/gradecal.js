function studentsScore(marks)
{
let grade;
switch (true) {
        case (marks >= 90 && marks <= 100):
            grade = "1st Rank"
            console.log("The student holds 1st Rank");
            break;
        case (marks >= 80 && marks <= 89):
            grade = "2nd Rank"
            console.log("The student holds 2nd Rank");
            break;
        case (marks >= 70 && marks <= 79):
            grade = "3rd Rank"
            console.log("The student holds 3rd Rank");
            break;
         case (marks >= 60 && marks <= 69):
            grade = "4th Rank"
            console.log("The student holds 4th Rank");
            break;
            case (marks >= 50 && marks <= 59):
            grade = "5th Rank"
            console.log("The student holds 5th Rank");
            break;
        default:
            grade = "F"
            console.log("The student Failed");
            break;

}
}
studentsScore("default");
studentsScore("100");
studentsScore("80");
