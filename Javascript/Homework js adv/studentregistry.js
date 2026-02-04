
const database = [];

// Student generator function
function Student(firstName, lastName, age, email) {
    return {
        firstName,
        lastName,
        age,
        email
    };
}

function clearStudentInputs() {
    document.getElementById("studentForm").reset();
}

function printStudents() {
    const list = document.getElementById("studentList");
    list.innerHTML = "";

    database.forEach(student => {
        const li = document.createElement("li");
        li.textContent =
            `${student.firstName} ${student.lastName}, Age: ${student.age}, Email: ${student.email}`;
        list.appendChild(li);
    });
}

document.getElementById("studentForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const student = Student(
        firstName.value,
        lastName.value,
        age.value,
        email.value
    );

    database.push(student);
    printStudents();
    clearStudentInputs();
});