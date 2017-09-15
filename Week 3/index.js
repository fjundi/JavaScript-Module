//1

let bookTitles = ['wanted', 'the_da_vinci_code', 'world_war_z', 'the_last_vampire', 'watchmen', 'the_dark_knight_returns', 'filthy_rich', 'the_deceiver', 'catch_22', 'punk_rock_jesus' ]

//2

console.log('Test to show this is working.');

//3


//insert function to start the whole thing here
function makeUL(){   
    let myUL = document.createElement('ul');

    document.body.appendChild(myUL);
    //at this point you should the ul in the body
    //insert function to creat LI here

    for (let i = 0; i < bookTitles.length; i++){

        let myLI = document.createElement('li'); //creates <li> element
        myLI.appendChild(document.createTextNode(bookTitles[i])); //adds content to <li> element
        myLI.setAttribute("id", bookNames[i]);
        myUL.appendChild(myLI); //adds <li> element to <ul> element
    } 
}
//makeUL();

//4

let bookInfo = {
    wanted:{
        title: 'Wanted',
        author: 'Mark Millar',
        language: 'English',
    },
    the_da_vinci_code:{
        title: 'The Da Vinci Code',
        author: 'Dan Brown',
        language: 'English',
    },
    world_war_z:{
        title: 'World War Z',
        author: 'Max Brooks',
        language: 'English',
    },
    the_last_vampire:{
        title: 'The Last Vampire',
        author: 'Christopher Pike',
        language: 'English',
    },
    the_dark_knight_returns:{
        title: 'The Dark Knight Returns',
        author: 'Frank Miller',
        language: 'English',
    },
    filthy_rich:{
        title: 'Filthy Rich',
        author: 'Brian Azzarello',
        language: 'English',
    },
    watchmen:{
        title: 'Watchmen',
        author: 'Alan Moore',
        language: 'English',
    },
    catch_22:{
        title: 'Catch 22',
        author: 'Joseph Heller',
        language: 'English',
    },
    the_deceiver:{
        title: 'The Deceiver',
        author: 'Frederick Forsyth',
        language: 'English',
    },
    punk_rock_jesus:{
        title: 'Punk Rock Jesus',
        author: 'Sean Murphy',
        language: 'English',
    }
}

//5&6


function bookList(){ 
    let objectList = document.createElement('ul');
    document.body.appendChild(objectList);

    for(b in bookInfo){
        let objectListChild = document.createElement('li');
        objectList.appendChild(objectListChild);

        let bookTitle = document.createElement('h1');
        let titleText = document.createTextNode(bookInfo[b].title);
        bookTitle.appendChild(titleText);
        objectListChild.appendChild(bookTitle);

        let bookAuthor = document.createElement('h2');
        let authorText = document.createTextNode(bookInfo[b].author);
        bookAuthor.appendChild(authorText);
        objectListChild.appendChild(bookAuthor);

        let bookLanguage = document.createElement('p');
        let languageText = document.createTextNode(bookInfo[b].language);
        bookLanguage.appendChild(languageText);
        objectListChild.appendChild(bookLanguage);

    }
}
bookList();

//7

let bookCover = {
    wanted:'./images/wanted.jpg', 
    the_da_vinci_code:'./images/davincicode.jpeg',
    world_war_z: './images/wwz.jpg',
    the_last_vampire: './images/lastvampire.jpg',
    filthy_rich: './images/filthy-rich.jpg',
    the_dark_knight_returns: './images/dkr.jpg',
    watchmen: './images/watchmen.jpg',
    catch_22: './images/catch22.jpg',
    the_deceiver: './images/thedeceiver.jpg',
    punk_rock_jesus: './images/prj.jpg',
};

let arrayKeys = Object.keys(bookCover);

function addCover() {
    for (i of arrayKeys){
        let img = document.createElement('img');
        img.setAttribute('src', bookCover[i]);
        img.setAttribute('alt', i);
        img.setAttribute('id', i);
        document.getElementById(i).appendChild(img);
    } 
} 

addCover()
