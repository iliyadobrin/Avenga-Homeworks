function proveriUcenik() {

    // Vnesi ocenka na ucenik
    let brojOcena = parseInt(prompt("Vnesi ocenka:"));
    // Proveri dali vnesenata ocenka e validen broj
     if (isNaN(brojOcena)) {
        alert("Ve moli me vnesete validen broj!");
        return;
    }
    // Proveri dali ocenkata e pomegju 1 i 5
    if (brojOcena < 1 || brojOcena > 5) {
        alert("Ocenkata mora da bide pomegju 1 i 5!");
        return;
    }
    // Odredi dali ucenikot e uspeshen ili neuspeshen
    if (brojOcena == 5) {
        alert("Odlichen Uspeh.");
    } else if (brojOcena == 4) {
        alert("Mnogu dobar Uspeh.");
    } else if (brojOcena == 3) {
        alert("Dobar Uspeh.");
    } else if (brojOcena <= 2) {
        alert("Nedovolen Uspeh.");
    }
}
// Povikaj ja funkcijata
proveriUcenik();