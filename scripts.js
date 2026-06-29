
function test() {
    console.log('HEY!');
}


function toggleText(text_ID) {

    console.log('toggle');

    var text = document.getElementById(text_ID);
    console.log(text.style.display);


    if (text.style.display === 'block') {
        text.style.display = 'none';
    } else {
        text.style.display = 'block';
    }

    console.log(text.style.display);

}