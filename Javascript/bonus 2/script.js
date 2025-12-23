function proverkaAdmin() {
    //vnesi lozinka za pristap
    let password = prompt("Внесете лозинка:");
    if (password === "admin123") {
        alert("Пристап дозволен!");
    } else {
        alert("Неточна Лозинка.");
    }
}
proverkaAdmin();