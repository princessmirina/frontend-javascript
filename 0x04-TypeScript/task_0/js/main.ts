interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 22,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 24,
  location: "Los Angeles",
};

//Put them into an array

const studentsList: Student[] = [student1, student2];

//Render a table dynamically

// Create table element
const table: HTMLTableElement = document.createElement("table");
table.border = "1";

// Create rows for each student
studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = table.insertRow();

  const firstNameCell: HTMLTableCellElement = row.insertCell();
  firstNameCell.textContent = student.firstName;

  const locationCell: HTMLTableCellElement = row.insertCell();
  locationCell.textContent = student.location;
});

// Append table to the document body
document.body.appendChild(table);
