
//If the user clicks on the submit button, all the attributes will come here and will determine
//what letter grade the user will get.
$("#submit").click(function () {
    var total
    total = ($("#assignments").val() * .5) + ($("#groupProject").val() * .1) + ($("#quizzes").val() * .1) +
        ($("#midterm").val() * .1) + ($("#finalExam").val() * .1) + ($("#intex").val() * .1)

    var grade
    if (total >= 94) {grade = "A"}
    else if (total >= 90 & total < 94) {grade = "A-"}
    else if (total >= 87 & total < 90) {grade = "B+"}
    else if (total >= 84 & total < 87) {grade = "B"}
    else if (total >= 80 & total < 84) {grade = "B-"}
    else if (total >= 77 & total < 80) {grade = "C+"}
    else if (total >= 74 & total < 77) {grade = "C"}
    else if (total >= 70 & total < 74) {grade = "C-"}
    else if (total >= 67 & total < 70) {grade = "D+"}
    else if (total >= 64 & total < 67) {grade = "D"}
    else if (total >= 60 & total < 64) {grade = "D-"}
    else {grade = "E"}


    //This is the letter grade being sent back to the HTML file and displayed in the p tag with the id "gradeOutput"
    //$("#gradeOutput").html("Your overall grade is: " + grade);

    alert("Your overall grade is: " + grade)
})

    //Assignments 50 %
    //Group Project 10 %
    //Quizzes 10 %
    //Midterm Exam 10 %
    //Final Exam 10 %
    //INTEX 10 %

