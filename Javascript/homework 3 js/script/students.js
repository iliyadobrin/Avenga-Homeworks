async function task1() {
  const res = await fetch(
    "https://raw.githubusercontent.com/aa-codecademy/mkwd14-03-ajs-and-ai/refs/heads/main/G2/Homeworks/students.json"
  );

  const students = await res.json();
  
  const avgGrade = s =>
    s.grades?.length
      ? s.grades.reduce((sum, g) => sum + g, 0) / s.grades.length
      : 0;

  console.log(
    "Avg > 3:",
    students.filter(s => avgGrade(s) > 3)
  );

  console.log(
    "Female grade 5:",
    students
      .filter(s => s.gender === "Female" && avgGrade(s) === 5)
      .map(s => s.firstName)
  );

  console.log(
    "Male Skopje >18:",
    students
      .filter(
        s =>
          s.gender === "Male" &&
          s.city === "Skopje" &&
          s.age > 18
      )
      .map(s => `${s.firstName} ${s.lastName}`)
  );

  console.log(
    "Avg grades females >24:",
    students
      .filter(s => s.gender === "Female" && s.age > 24)
      .map(s => avgGrade(s))
  );

  console.log(
    "Male B avg >2:",
    students.filter(
      s =>
        s.gender === "Male" &&
        s.firstName.startsWith("B") &&
        avgGrade(s) > 2
    )
  );

  console.log(
    "Emails female 20-30:",
    students
      .filter(
        s =>
          s.gender === "Female" &&
          s.age >= 20 &&
          s.age <= 30
      )
      .map(s => s.email)
      .sort()
  );

  console.log(
    "Full names >40:",
    students
      .filter(s => s.age > 40)
      .map(s => `${s.firstName} ${s.lastName}`)
      .sort()
      .reverse()
  );

  console.log(
    "Google mails:",
    students.filter(s => s.email.includes("gmail")).length
  );

  console.log(
    "Avg age females Skopje:",
    students
      .filter(
        s => s.gender === "Female" && s.city === "Skopje"
      )
      .reduce((sum, s, _, arr) => sum + s.age / arr.length, 0)
  );
}

task1();