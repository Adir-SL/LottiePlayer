function init() {
    window.count = 0;
    document.getElementById('fileInput').addEventListener('change', handleFileSelect, false);
}

function handleFileSelect(event) {
    const reader = new FileReader()
    reader.onload = handleFileLoad;
    reader.readAsText(event.target.files[0])
}

function handleFileLoad(event) {
    console.log(event);
    document.getElementById('fileContent').textContent = event.target.result;

    loadAnim();

}

function loadAnim() {
    let button = document.createElement("button");
    button.num = window.count;
    button.paused = 0;
    document.getElementById('lottie').append(button);

    // document.getElementById('lottie').innerHTML = '';
    const animationData = JSON.parse(document.getElementById('fileContent').textContent);
    document.getElementById('lottie').getElementsByTagName("button")[window.count].bodyAnim = bodymovin.loadAnimation({
        container: document.getElementById('lottie').getElementsByTagName("button")[document.getElementById('lottie').getElementsByTagName("button").length - 1],
        animationData: animationData,
        renderer: 'svg',
        loop: true,
        autoplay: true,
    });

    document.getElementById('lottie').getElementsByTagName('button')[window.count].addEventListener('click', playPause, false);
    window.count += 1;

    window.lastFocus = document.getElementById('lottie').getElementsByTagName("button")[document.getElementById('lottie').getElementsByTagName("button").length - 1];
    focusHover();
}

function playPause() {
    window.lastFocus = document.activeElement;
    if (document.activeElement.paused !== 1) {
        document.activeElement.bodyAnim.pause();
        document.activeElement.paused = 1;
    } else {
        document.activeElement.bodyAnim.play();
        document.activeElement.paused = 0;
    }
    focusHover();
}

function devTools(){
    mainWindow.webContents.openDevTools();
}

function focusHover(){
    var x = document.getElementById("lottie").getElementsByTagName("button");
    var i;
    for (i = 0; i < x.length; i++) {
        if(x[i].num == window.lastFocus.num){
            x[i].classList.add("focused");
        }else{
            x[i].classList.remove("focused");
        }
    }
}

function closeClick(){
    var x = document.getElementById("lottie").getElementsByTagName("button");
    var i;
    for (i = 0; i < x.length; i++) {
        if(x[i].num == window.lastFocus.num){
            x[i].innerText = '';
        }
    }
    document.getElementById("fileInput").value = '';
}

function fullScreenClick(){
  if(window.fullScreened !== 1){
    var x = document.getElementById("lottie").getElementsByTagName("button");
    var i;
    for (i = 0; i < x.length; i++) {
        if(x[i].num == window.lastFocus.num){
            x[i].classList.add('bigger');
        }else{
            x[i].classList.remove('bigger');
        }
    }
    window.fullScreened = 1;
    document.getElementById("fullScreenButton").classList.add('minimize');
  }else{
    var x = document.getElementById("lottie").getElementsByTagName("button");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].classList.remove('bigger');
    }
    window.fullScreened = 0;
    document.getElementById("fullScreenButton").classList.remove('minimize');
  }
}

function playAll(){
    var x = document.getElementById("lottie").getElementsByTagName("button");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].bodyAnim.play();
        x[i].paused = 0;
    }
}