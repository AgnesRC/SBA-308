// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
  
  function getLearnerData(course, ag, submissions) {
    // here, we would process this data to achieve the desired result.
    const result = [
      {
        id: 125,
        avg: 0.985, // (47 + 150) / (50 + 150)
        1: 0.94, // 47 / 50
        2: 1.0 // 150 / 150
      },
      {
        id: 132,
        avg: 0.82, // (39 + 125) / (50 + 150)
        1: 0.78, // 39 / 50
        2: 0.833 // late: (140 - 15) / 150
      }
    ];
  
    return result;
  }
  
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
  console.log(result);
   


// My Work Begins 

// Identify all data needed for the string 
console.log('Learner IDs');
console.log(LearnerSubmissions[0].learner_id);
console.log(LearnerSubmissions[3].learner_id);

console.log('Assignment Possible Scores');
console.log(AssignmentGroup.assignments[0].points_possible);
console.log(AssignmentGroup.assignments[1].points_possible);

console.log('Assignment IDs');
console.log(AssignmentGroup.assignments[0].id);
console.log(AssignmentGroup.assignments[1].id);

console.log('Learner 125 scores:');
console.log(LearnerSubmissions[0].submission.score);
console.log(LearnerSubmissions[1].submission.score);

console.log('Learner 132 scores:');
console.log(LearnerSubmissions[3].submission.score);
console.log((LearnerSubmissions[4].submission.score) - 15);


// Create new variables (condense names)
console.log('Class Averages');
let learner125Avg = (LearnerSubmissions[0].submission.score + LearnerSubmissions[1].submission.score) / (AssignmentGroup.assignments[0].points_possible + AssignmentGroup.assignments[1].points_possible);
console.log(learner125Avg);

let learner132Avg = (LearnerSubmissions[3].submission.score + (LearnerSubmissions[4].submission.score - 15)) / (AssignmentGroup.assignments[0].points_possible + AssignmentGroup.assignments[1].points_possible);
console.log(learner132Avg);

console.log('Individual Scores');
console.log('Learner125');
let ass1Learner125 = (LearnerSubmissions[0].submission.score)/(AssignmentGroup.assignments[0].points_possible);
console.log(ass1Learner125);
let ass2Learner125 = (LearnerSubmissions[1].submission.score)/(AssignmentGroup.assignments[1].points_possible);
console.log(ass2Learner125);

console.log('Learner 132');
let ass1Learner132 = (LearnerSubmissions[3].submission.score)/(AssignmentGroup.assignments[0].points_possible);
console.log(ass1Learner132);
let ass2Learner132 = ((LearnerSubmissions[4].submission.score) - 15)/(AssignmentGroup.assignments[1].points_possible);
console.log(ass2Learner132);