 // kreira niza od broevi
        const numbers = [2, 4, 5, 8, 12, 7, 15];

        // kreira naslov
        const title = document.createElement('h2');
        title.textContent = 'Numbers from Array';
        document.body.appendChild(title);

        // lista
        const list = document.createElement('ul');
        document.body.appendChild(list);

        // gi printa broevite od listata
        numbers.forEach(num => {
            const li = document.createElement('li');
            li.textContent = num;
            list.appendChild(li);
        });

        // presmetuva zbir na broevite
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }

        // prikazuva zbir na broevite
        const sumDiv = document.createElement('div');
        sumDiv.textContent = 'Sum: ' + sum;
        document.body.appendChild(sumDiv);

        // Bonus: Prikazuva ednakvost na zbir na broevite
        let equation = '';
        for (let i = 0; i < numbers.length; i++) {
            equation += numbers[i];
            if (i < numbers.length - 1) {
                equation += ' + ';
            }
        }
        equation += ' = ' + sum;

        const eqDiv = document.createElement('div');
        eqDiv.textContent = equation;
        document.body.appendChild(eqDiv);