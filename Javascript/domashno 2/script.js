function proveriBroj() {
    // vnesi broj
    let broj = prompt("Внеси број:");
    
    // konvertiraj vneseniot tekst vo broj
    broj = Number(broj);
    
    // proveri dali e validen broj
    if (isNaN(broj)) {
        alert("Ве молиме внесете валиден број!");
        return;
    }

    // proveri dali e pozitiven, negativen ili nula
    if (broj > 0) {
        alert("Бројот " + broj + " е поголем од 0");
    } else if (broj < 0) {
        alert("Бројот " + broj + " е помал од 0");
    } else {
        alert("Бројот е точно 0");
    }
}
proveriBroj();