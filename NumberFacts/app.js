let favoriteNumber = 7;
let baseURL = "http://numbersapi.com";

async function part1(){
    let data = await $.getJSON(`${baseURL}/${favoriteNumber}?json`);
    console.log(data);
}
part1();

const favoriteNumbers = [4, 27, 64];
async function part2(){
    let data = await $.getJSON(`${baseURL}/${favoriteNumbers}`);
    console.log(data);
}
part2();

async function part3(){
    let facts = await Promise.all(
        Array.from({ length: 4}, () => $.getJSON(`${baseURL}/${favoriteNumber}?json`))
    );
    facts.forEach(data => {
        $('body').append(`<p>${data.text}<p>`);
    });
}
part3();