const employees = [
  { id: 1, name: "Aung Aung", department: "IT", salary: 1200, active: true },
  { id: 2, name: "Su Su", department: "HR", salary: 900, active: true },
  {
    id: 3,
    name: "Kyaw Kyaw",
    department: "Finance",
    salary: 1500,
    active: false,
  },
  {
    id: 4,
    name: "Mya Mya",
    department: "Marketing",
    salary: 1100,
    active: true,
  },
  { id: 5, name: "Zaw Zaw", department: "IT", salary: 1400, active: true },
  { id: 6, name: "Thida", department: "HR", salary: 950, active: false },
  { id: 7, name: "Min Min", department: "Finance", salary: 1600, active: true },
  {
    id: 8,
    name: "May Thu",
    department: "Marketing",
    salary: 1000,
    active: true,
  },
  { id: 9, name: "Ko Ko", department: "IT", salary: 1350, active: false },
  { id: 10, name: "Hnin Yu", department: "HR", salary: 980, active: true },
  { id: 11, name: "Ye Lin", department: "Finance", salary: 1700, active: true },
  {
    id: 12,
    name: "Cherry",
    department: "Marketing",
    salary: 1050,
    active: false,
  },
];

function addEmployee(name, department, salary) {
  const newId = employees[employees.length - 1].id + 1;

  // Create new employee object
  const newEmployee = {
    id: newId,
    name: name,
    department: department,
    salary: salary,
    active: true,
  };

  employees.push(newEmployee);

  console.log(`Employee ${name} added successfully.`);
}

function searchEmployee(search) {
  const result = employees.filter(function (employee) {
    const nameMatch = employee.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const departmentMatch = employee.department
      .toLowerCase()
      .includes(search.toLowerCase());

    return nameMatch || departmentMatch;
  });

  return result;
}

function filterByDepartment(department) {
  const result = employees.filter(function (employee) {
    return employee.department.toLowerCase() === department.toLowerCase();
  });

  return result;
}

function increaseSalary(percent) {
  employees.forEach(function (employee) {
    // Increase salary
    employee.salary += employee.salary * (percent / 100);
  });

  console.log(`Salary increased by ${percent}%`);
}

function calculateTotalSalary() {
  const total = employees.reduce(function (sum, employee) {
    return sum + employee.salary;
  }, 0);

  return total;
}

function highestSalaryEmployee() {
  const highest = employees.reduce(function (max, employee) {
    if (employee.salary > max.salary) {
      return employee;
    } else {
      return max;
    }
  });

  return highest;
}

function getActiveEmployees() {
  const activeEmployees = employees.filter(function (employee) {
    return employee.active === true;
  });

  return activeEmployees;
}

function deleteEmployee(id) {
  const index = employees.findIndex(function (employee) {
    return employee.id === id;
  });

  if (index !== -1) {
    const removed = employees.splice(index, 1);

    console.log(`Employee ${removed[0].name} deleted successfully.`);
  } else {
    console.log("Employee not found.");
  }
}

function printEmployees(list, title) {
  console.log("\n" + "=".repeat(70));
  console.log(title);
  console.log("=".repeat(70));

  if (list.length === 0) {
    console.log("No employees found.");
  } else {
    list.forEach(function (employee) {
      console.log(
        `ID: ${employee.id} | Name: ${employee.name.padEnd(12)} | Department: ${employee.department.padEnd(10)} | Salary: ${employee.salary} | Active: ${employee.active}`,
      );
    });
  }

  console.log("=".repeat(70));
}

printEmployees(employees, "ALL EMPLOYEES");

addEmployee("John", "IT", 1800);

printEmployees(employees, "AFTER ADDING EMPLOYEE");

const searchResult = searchEmployee("IT");

printEmployees(searchResult, 'SEARCH RESULT FOR "IT"');

const hrEmployees = filterByDepartment("HR");

printEmployees(hrEmployees, "HR DEPARTMENT");

increaseSalary(10);

printEmployees(employees, "AFTER 10% SALARY INCREASE");

const totalSalary = calculateTotalSalary();

console.log("\nTotal Salary =", totalSalary);

const highest = highestSalaryEmployee();

console.log("\nHighest Salary Employee:");
console.log(highest);

const activeEmployees = getActiveEmployees();

printEmployees(activeEmployees, "ACTIVE EMPLOYEES");

deleteEmployee(3);

printEmployees(employees, "AFTER DELETING EMPLOYEE");
