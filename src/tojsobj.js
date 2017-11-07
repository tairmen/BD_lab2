function getPerContinent() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'json/ContinentsDB.json', false);
    xhr.send();
    if (xhr.status != 200) {
        alert(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
    } else {
        var cont = JSON.parse(xhr.responseText); // responseText -- текст ответа.
    }
    return cont;
    /*return {
        africa: {
            text:'Africa'
        },
        southAmerica: {
            text:'South America'     
        },
        asia: {
            text:'Asia'
        },
        europe: {
            text:'Europe'
        }
    };*/
}

function getCountries() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'json/CountriesDB.json', false);
    xhr.send();
    if (xhr.status != 200) {
        alert(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
    } else {
        var countries = JSON.parse(xhr.responseText); // responseText -- текст ответа.
    }
    return countries;
    /*return {
        EGY: { name: 'Egypt', gov: 'Semi-presidential republic', curr: 'EGP', question: 'Cairo', telcode: '20', map: 'Africa', population: 95623427, square: '1 001 450' },
        NGA: { name: 'Nigeria', gov: 'Presidential republic', curr: 'NGN', question: 'Abuja', telcode: '234', map: 'Africa', population: 192193402, square: '923 768' },
        BRA: { name: 'Brazil', gov: 'Presidential republic', curr: 'BRL', question: 'Brasília', telcode: '55', map: 'South America', population: 208174800, square: '8 514 877' },
        ARG: { name: 'Argentina', gov: 'Presidential republic', curr: 'ARS', question: 'Buenos Aires', telcode: '54', map: 'South America', population: 43131966, square: '2 780 400' },
        CHL: { name: 'Chile', gov: 'Presidential republic', curr: 'CLP', question: 'Santiago', telcode: '56', map: 'South America', population: 18006407, square: '756 950' },
        URY: { name: 'Uruguay', gov: 'Presidential republic', curr: 'UYU', question: 'Montevideo', telcode: '598', map: 'South America', population: 3415866, square: '176 220' },
        CHN: { name: 'China', gov: 'One-party republic', curr: 'CNY', question: 'Beijing', telcode: '86', map: 'Asia', population: 1386192000, square: '9 598 962' },
        UZB: { name: 'Uzbekistan', gov: 'Presidential republic', curr: 'UZS', question: 'Tashkent', telcode: '998', map: 'Asia', population: 32121100, square: '447 400' },
        JPN: { name: 'Japan', gov: 'Constitutional monarchy', curr: 'JPY', question: 'Tokyo', telcode: '81', map: 'Asia', population: 126740000, square: '377 835' },
        SAU: { name: 'Saudi Arabia', gov: 'Absolute monarchy', curr: 'SAR', question: 'Riyadh', telcode: '966', map: 'Asia', population: 32248200, square: '2 149 690' },
        GBR: { name: 'United Kingdom', gov: 'Constitutional monarchy', curr: 'GBP', question: 'London', telcode: '44', map: 'Europe', population: 65808573, square: '244 820' },
        FRA: { name: 'France', gov: 'Premier-presidential republic', curr: 'EUR', question: 'Paris', telcode: '33', map: 'Europe', population: 64859599, square: '547 030' },
        ESP: { name: 'Spain', gov: 'Constitutional monarchy', curr: 'EUR', question: 'Madrid', telcode: '34', map: 'Europe', population: 46528966, square: '504 782' },
        ITA: { name: 'Italy', gov: 'Parliamentary republic', curr: 'EUR', question: 'Rome', telcode: '39', map: 'Europe', population: 60589445, square: '301 340' },
        DNK: { name: 'Denmark', gov: 'Constitutional monarchy', curr: 'DKK', question: 'Copenhagen', telcode: '45', map: 'Europe', population: 5668743, square: '43 094' },
        AUT: { name: 'Austria', gov: 'Parliamentary republic', curr: 'EUR', question: 'Vienna', telcode: '43', map: 'Europe', population: 8773686, square: '83 858' },
        POL: { name: 'Poland', gov: 'Premier-presidential republic', curr: 'EUR', question: 'Warsaw', telcode: '48', map: 'Europe', population: 38424000, square: '312 685' },
        LVA: { name: 'Latvia', gov: 'Parliamentary republic', curr: 'EUR', question: 'Riga', telcode: '371', map: 'Europe', population: 1934500, square: '64 589' },
        UKR: { name: 'Ukraine', gov: 'Premier-presidential republic', curr: 'UAH', question: 'Kyiv', telcode: '380', map: 'Europe', population: 42353130, square: '603 549' }
    }*/
};

function getCities() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'json/CitiesDB.json', false);
    xhr.send();
    if (xhr.status != 200) {
        alert(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
    } else {
        var cities = JSON.parse(xhr.responseText); // responseText -- текст ответа.
    }
    return cities;
    /*return {
        London: { name: 'London', population: 8787892, country: 'United Kingdom' },
        Manchester: { name: 'Manchester', population: 541300, country: 'United Kingdom' },
        Birmingham: { name: 'Birmingham', population: 1124600, country: 'United Kingdom' },
        Leeds: { name: 'Leeds', population: 781700, country: 'United Kingdom' },
        Kiev: { name: 'Kiev',population: 2900920,  country: 'Ukraine' },
        Odessa: { name: 'Odessa', population: 1016515,  country: 'Ukraine' },
        Simferopol: { name: 'Simferopol', population: 332317,  country: 'Ukraine' },
        Paris: { name: 'Paris', population: 2229621, country: 'France' },
        Marsel: { name: 'Marseille', population: 855393, country: 'France' },
        Madrid: { name: 'Madrid', population: 3141991 , country: 'Spain' },
        Barcelona: { name: 'Barcelona', population: 1604555, country: 'Spain' },
        Sevilla: { name: 'Seville', population: 703021, country: 'Spain' },
        Beijing: { name: 'Beijing', population: 21516000, country: 'China' },
        Rome: { name: 'Rome', population: 2876076, country: 'Italy' },
        Milan: { name: 'Milan', population: 3219000, country: 'Italy' },
        Neapol: { name: 'Naples', population: 975260, country: 'Italy' },
        Genoa: { name: 'Genoa', population: 594733, country: 'Italy' },
        Cairo: { name: 'Cairo', population: 9278441, country: 'Egypt' },
        Abuja: { name: 'Abuja', population: 1235880, country: 'Nigeria' },
        Brasília: { name: 'Brasília', population: 214529, country: 'Brazil' },
        BuenosAires: { name: 'Buenos Aires', population: 2890151, country: 'Argentina' },
        Santiago: { name: 'Santiago', population: 7314176, country: 'Chile' },
        Montevideo: { name: 'Montevideo', population: 1305082, country: 'Uruguay' },
        Tashkent: { name: 'Tashkent', population: 2309600, country: 'Uzbekistan' },
        Tokyo: { name: 'Tokyo', population: 12513734, country: 'Japan' },
        Riyadh: { name: 'Riyadh', population: 6506700, country: 'Saudi Arabia' },
        Copenhagen: { name: 'Copenhagen',population: 606057, country: 'Denmark' },
        Vienna: { name: 'Vienna', population: 1867960, country: 'Austria' },
        Warsaw: { name: 'Warsaw', population: 1753977, country: 'Poland' },
        Riga: { name: 'Riga', population: 641423, country: 'Latvia' }
    }*/
};

function getCurrencies() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'json/CurrenciesDB.json', false);
    xhr.send();
    if (xhr.status != 200) {
        alert(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
    } else {
        var Currs = JSON.parse(xhr.responseText); // responseText -- текст ответа.
    }
    return Currs;
    /*return {
        EGP: { name: 'Egyptian pound', symb: '£', togrn: 1.51 },
        NGN: { name: 'Nigerian naira', symb: '₦', togrn: 0.07 },
        BRL: { name: 'Brazilian real', symb: 'R$', togrn: 8.33 },
        ARS: { name: 'Argentine peso', symb: '$', togrn: 1.52 },
        CLP: { name: 'Chilean peso', symb: '$', togrn: 0.04 },
        UYU: { name: 'Uruguayan peso', symb: '$', togrn: 0.91 },
        CNY: { name: 'Chinese yuan', symb: '¥', togrn: 4.04 },
        UZS: { name: 'Uzbekistani som', symb: '', togrn: 0.003 },
        JPY: { name: 'Japanese yen', symb: '¥', togrn: 0.23 },
        SAR: { name: 'Saudi riyal', symb: 'ر.س', togrn: 7.08 },
        GBP: { name: 'British pound', symb: '£', togrn: 35.42 },
        DKK: { name: 'Danish krone', symb: 'kr', togrn: 4.23 },
        UAH: { name: 'Ukrainian hryvnia', symb: '₴', togrn: 1 },
        EUR: { name: 'Euro', symb: '€', togrn: 31.52 }
    }*/
};

function getTravels() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'json/TravelsDB.json', false);
    xhr.send();
    if (xhr.status != 200) {
        alert(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
    } else {
        var travels = JSON.parse(xhr.responseText); // responseText -- текст ответа.
    }
    return travels;
    //{
        //1: {city:'London', dep_date:'01.01.2018', arriv_date:'03.01.2018'}
   // }
};