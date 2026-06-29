
function test() {
    console.log('HEY!');
}


function toggleText(text_ID) {

    var text = document.getElementById(text_ID);

    if (text.style.display === 'block') {
        text.style.display = 'none';
    } else {
        text.style.display = 'block';
    }

}