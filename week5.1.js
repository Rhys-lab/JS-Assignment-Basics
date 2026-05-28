const students = [
  { id: 1, name: "Aung Aung", email: "aung@gmail.com", marks: 80 },
  { id: 2, name: "Su Su", email: "susu@gmail.com", marks: 45 },
  { id: 3, name: "Kyaw Kyaw", email: "kyaw@gmail.com", marks: 90 },
  { id: 4, name: "Hnin Yu", email: "kyikyi@gmail.com", marks: 75 },
  { id: 5, name: "Mya Mya", email: "myamya@gmail.com", marks: 60 },
  { id: 6, name: "Zaw Zaw", email: "zawzaw@gmail.com", marks: 55 },
  { id: 7, name: "Thida", email: "thida@gmail.com", marks: 88 },
];

function addStudent(name, email, marks) {
  const newID = students[students.length - 1].id + 1;

  const newStudent = {
    id: newID,
    name: name,
    email: email,
    marks: marks,
  };

  students.push(newStudent);

  console.log(`Student ${name} added successfully.`);
}

function searchStudents(search) {
  const result = students.filter(function (student) {
    const nameMatch = student.name.toLowerCase().includes(search.toLowerCase());

    const emailMatch = student.email
      .toLowerCase()
      .includes(search.toLowerCase());

    return nameMatch || emailMatch;
  });

  return result;
}

function getPassedStudents() {
  return students.filter(function (student) {
    return student.marks >= 50;
  });
}

function calculateAverageMarks() {
  const total = students.reduce(function (sum, student) {
    return sum + student.marks;
  }, 0);

  const average = total / students.length;

  return average.toFixed(2);
}

function removeStudent(id) {
  const remove = students.findIndex(function (student) {
    return student.id == id;
  });

  if (remove !== -1) {
    const removed = students.splice(remove, 1);

    console.log(`Student ${removed[0].name} removed successfully.`);
  } else {
    console.log("Invalid Error. Please try again.");
  }
}

function printStudents(list, title) {
  console.log("\n" + "=".repeat(55));
  console.log(" " + title);
  console.log("=".repeat(55));

  if (list.length === 0) {
    console.log("NO students found.");
  } else {
    list.forEach(function (student) {
      console.log(
        `ID: ${student.id} | Name: ${student.name.padEnd(12)} | Email: ${student.email.padEnd(22)} | Marks: ${student.marks}`,
      );
    });
  }

  console.log("=".repeat(55));
}

printStudents(students, "ALL STUDENTS");

addStudent("Min Min", "minmin@gmail.com", 72);

printStudents(students, "ALL STUDENTS (MODIFIED)");

const searchResult = searchStudents("kyaw");
printStudents(searchResult, 'SEARCH RESULTS for "kyaw"');

const searchResult2 = searchStudents("thida");
printStudents(searchResult2, 'SEARCH RESULTS for "thida"');

const passedStudents = getPassedStudents();
printStudents(passedStudents, "PASSED STUDENTS (Marks ≥ 50)");

const avg = calculateAverageMarks();
console.log("\nAverage Marks of All Students:", avg);

removeStudent(2);

printStudents(students, "ALL STUDENTS (After Removing Su Su)");
