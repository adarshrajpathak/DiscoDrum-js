var selectedId;
var selectedEle;

window.document.addEventListener('keydown', function(e) {
    var keyPressed = e.key.toLowerCase();

    switch (keyPressed) {
        case 'a':
            selectedId = 'a';
            break;
        case 's':
            selectedId = 's';
            break;
        case 'd':
            selectedId = 'd';
            break;
        case 'f':
            selectedId = 'f';
            break;
        case 'g':
            selectedId = 'g';
            break;
        case 'h':
            selectedId = 'h';
            break;
        case 'j':
            selectedId = 'j';
            break;
        case 'k':
            selectedId = 'k';
            break;
        case 'l':
            selectedId = 'l';
            break;
    }

    selectedEle = document.getElementById(selectedId);
    var audio = document.getElementById(selectedId+'A');
    if (selectedEle) {
        selectedEle.classList.add('keyP');
        audio.play();
    }
});

window.document.addEventListener('keyup', function(e) {
    var keyReleased = e.key.toLowerCase();

    switch (keyReleased) {
        case 'a':
            selectedId = 'a';
            break;
        case 's':
            selectedId = 's';
            break;
        case 'd':
            selectedId = 'd';
            break;
        case 'f':
            selectedId = 'f';
            break;
        case 'g':
            selectedId = 'g';
            break;
        case 'h':
            selectedId = 'h';
            break;
        case 'j':
            selectedId = 'j';
            break;
        case 'k':
            selectedId = 'k';
            break;
        case 'l':
            selectedId = 'l';
            break;
    }

    selectedEle = document.getElementById(selectedId);
    // var audio = document.getElementById(selectedId+'A');
    if (selectedEle) {
        selectedEle.classList.remove('keyP');
        // audio.pause();
    }
});
