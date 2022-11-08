class Country {
    constructor(name, lang, greeting, colors, image) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"], "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFlag_of_the_United_States&psig=AOvVaw2qf3v0YnoK-qsywPclpWP2&ust=1667944587677000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJC86_aHnfsCFQAAAAAdAAAAABAE");
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["green", "white", "red"], "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Ftopic%2Fflag-of-Algeria&psig=AOvVaw1Mf-rD5of43QEBUDBtkcIN&ust=1667944317006000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCPDdi_aGnfsCFQAAAAAdAAAAABAE");
let egypt = new Country("Egypt", "Arabic", "Marhaban bialealam", ["black", "white", "red"]);
let bolivia = new Country("Bolivia", "Spanish", "Hola mundo!", ["green", "yellow", "red"]);

function SwitchCountry() {
    let input = document.getElementById("CountryList").value;
    let country;

    if (input === "USA") {
        //set country to usa
        country = usa;
        document.getElementById("CountryName").innerHTML = country.name;
        document.getElementById("OfficialLanguage").innerHTML = country.lang;
        document.getElementById("HelloWorld").innerHTML = country.greeting;

        document.getElementById("Color1").style.backgroundColor = country.colors[0];
        document.getElementById("Color2").style.backgroundColor = country.colors[1];
        document.getElementById("Color3").style.backgroundColor = country.colors[2];
    }
    else if (input === "Mexico") {
        country = mexico;
        document.getElementById("CountryName").innerHTML = country.name;
        document.getElementById("OfficialLanguage").innerHTML = country.lang;
        document.getElementById("HelloWorld").innerHTML = country.greeting;

        document.getElementById("Color1").style.backgroundColor = country.colors[0];
        document.getElementById("Color2").style.backgroundColor = country.colors[1];
        document.getElementById("Color3").style.backgroundColor = country.colors[2];
    }
    else if (input === "Algeria") {
        country = algeria;
        document.getElementById("CountryName").innerHTML = country.name;
        document.getElementById("OfficialLanguage").innerHTML = country.lang;
        document.getElementById("HelloWorld").innerHTML = country.greeting;

        document.getElementById("Color1").style.backgroundColor = country.colors[0];
        document.getElementById("Color2").style.backgroundColor = country.colors[1];
        document.getElementById("Color3").style.backgroundColor = country.colors[2];
    }
    else if (input === "Egypt"){
        country = egypt;
        document.getElementById("CountryName").innerHTML = country.name;
        document.getElementById("OfficialLanguage").innerHTML = country.lang;
        document.getElementById("HelloWorld").innerHTML = country.greeting;

        document.getElementById("Color1").style.backgroundColor = country.colors[0];
        document.getElementById("Color2").style.backgroundColor = country.colors[1];
        document.getElementById("Color3").style.backgroundColor = country.colors[2];
    }
    else if(input === "Bolivia"){
        country = bolivia;
        document.getElementById("CountryName").innerHTML = country.name;
        document.getElementById("OfficialLanguage").innerHTML = country.lang;
        document.getElementById("HelloWorld").innerHTML = country.greeting;

        document.getElementById("Color1").style.backgroundColor = country.colors[0];
        document.getElementById("Color2").style.backgroundColor = country.colors[1];
        document.getElementById("Color3").style.backgroundColor = country.colors[2];
    }
}
