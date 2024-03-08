// Determine Letter Grades - Start Code
// A: 80 - 100
// B: 65 - 79
// C: 55 - 64
// D: 50 - 54
// F: 0 - 49

// Determine Letter Grades Click Event
document.getElementById('btn').addEventListener('click', () => {
  percentLimits = [80, 65, 55, 50, 0]
  letterGrades = ["A", "B", "C", "D", "F"]
  for (let i = 0; i < 4; i++) {  
    // Get Percentage Grades
    percentGradeInput = Number(document.getElementsByClassName("percentGradeInput")[i].value)      
    letterGradeOutput = document.getElementsByClassName("letterGradeOutput")[i] 
    // Find the Index of the first number in the percentLimits array that is less than or equal to percentGradeInput, then use get letter within letterGrades array using that index and output
    searchIndex = percentLimits.findIndex(item => item <= percentGradeInput)
    letterGradeOutput.innerHTML = letterGrades[searchIndex]
  }  
});
