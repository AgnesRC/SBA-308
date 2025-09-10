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
let larray = LearnerSubmissions;
let lidArray = []

for (let i = 0; i < larray.length; i++) {
  if (lidArray.includes(larray[i].learner_id)) {
    continue
  } else {
    lidArray.push(larray[i].learner_id);
  }
}
console.log(lidArray);

console.log('Assignment Possible Scores');
let array = AssignmentGroup.assignments;
let ppArray = []

for (let i = 0; i < array.length; i++) {
  if (array[i].due_at === "3156-11-15") {
    continue
  } else {
    ppArray.push(array[i].points_possible);
  }
}
console.log(ppArray);

console.log('Assignment IDs');
let idArray = []

for (let i = 0; i < array.length; i++) {
  if (array[i].due_at === "3156-11-15") {
    continue
  } else {
    idArray.push(array[i].id);}
}
console.log(idArray);

console.log('Learner 125 & 132 scores:');
let lscoreArray = []

for (let i = 0; i < LearnerSubmissions.length; i++) {
  let submission = LearnerSubmissions[i].submission;

  if (submission && typeof submission.score === 'number') {
    if (submission.score === 400) {
      continue
    } else {
      lscoreArray.push(submission.score);
    }
  } 
}
console.log(lscoreArray);


// Create new variables (condense names)
console.log('Class Averages');
let learner125Avg = (lscoreArray[0] + lscoreArray[1]) / (ppArray[0] + ppArray[1]);
console.log(learner125Avg);

let learner132Avg = (lscoreArray[2]+ ((lscoreArray[3]) - 15)) / (ppArray[0] + ppArray[1]);
console.log(learner132Avg);

console.log('Individual Scores');
console.log('Learner125');
let ass1Learner125 = (lscoreArray[0])/(ppArray[0]);
console.log(ass1Learner125);
let ass2Learner125 = (lscoreArray[1])/(ppArray[1]);
console.log(ass2Learner125);

console.log('Learner 132');
let ass1Learner132 = (lscoreArray[2])/(ppArray[0]);
console.log(ass1Learner132);
let ass2Learner132 = ((lscoreArray[3]) - 15)/(ppArray[1]);
console.log(ass2Learner132);

// Create Arrays
console.log('Create Arrays');
let arrKey =['id', 'avg'];
arrKey = arrKey.concat(idArray);
console.log(arrKey);



let arr125= [lidArray[0], learner125Avg, ass1Learner125, ass2Learner125];
console.log(arr125);

let arr132 = [lidArray[1], learner132Avg, ass1Learner132, ass2Learner132 ];
console.log(arr132);

// push arrays into one array
console.log('Push arrays into one array');
let mainArr = []

mainArr.push(arrKey, arr125, arr132)
console.log(mainArr);

let arrColumn = mainArr[0]
console.log(arrColumn);

let finalArr = []

for (let i = 1; i < mainArr.length; i++) {
    let arrRow = {};
    for (let j = 0; j < mainArr[1].length; j++) {
        arrRow[arrColumn[j]]=mainArr[i][j];
    }
    finalArr.push(arrRow)
}

console.log(finalArr);

console.log(finalArr);



  





