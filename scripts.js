
function test() {
    console.log('HEY!');
}


function toggleText(base_ID,text_ID) {

    var base = document.getElementById(base_ID);
    var text = document.getElementById(text_ID);

    // toggle text
    if (text.style.opacity === '1') {
        text.style.opacity = '0';
    } else {
        text.style.opacity = '1';
    }

    // toggle text abse
    if (base.style.opacity === '0.8') {
        base.style.opacity = '0';
    } else {
        base.style.opacity = '0.8';
    }

}