// logs
console.defaultLog = console.log.bind(console);
console.logs = [];
console.log = function(){
    console.defaultLog.apply(console, arguments);
    console.logs.push(Array.from(arguments));
    if(window.checkCode == undefined){
        toVConsole("<div class='vconlog vConUndetect' title='console.log()'>" + Array.from(arguments) + "</div>");
    }else{
        window.checkCode = window.checkCode.replace(/'/g, '"');
        toVConsole("<div class='vconlog vConUndetect' title='"+window.checkCode+"'>" + Array.from(arguments) + "</div>");
        window.checkCode = undefined;
    }
}

// info
console.defaultInfo = console.info.bind(console);
console.infos = [];
console.info = function(){
    console.defaultInfo.apply(console, arguments);
    console.infos.push(Array.from(arguments));
    if(window.checkCode == undefined){
        toVConsole("<div class='vconinfo vConUndetect' title='console.info()'>" + Array.from(arguments) + "</div>");
    }else{
        window.checkCode = window.checkCode.replace(/'/g, '"');
        toVConsole("<div class='vconinfo vConUndetect' title='"+window.checkCode+"'>" + Array.from(arguments) + "</div>");
        window.checkCode = undefined;
    }
}

// error
console.defaultError = console.error.bind(console);
console.errors = [];
console.error = function(){
    console.defaultError.apply(console, arguments);
    console.errors.push(Array.from(arguments));
    if(window.checkCode == undefined){
        toVConsole("<div class='vconerror vConUndetect' title='console.error()'>" + Array.from(arguments) + "</div>");
    }else{
        window.checkCode = window.checkCode.replace(/'/g, '"');
        toVConsole("<div class='vconerror vConUndetect' title='"+window.checkCode+"'>" + Array.from(arguments) + "</div>");
        window.checkCode = undefined;
    }
}

// warn
console.defaultWarn = console.warn.bind(console);
console.warns = [];
console.warn = function(){
    console.defaultWarn.apply(console, arguments);
    console.warns.push(Array.from(arguments));
    if(window.checkCode == undefined){
        toVConsole("<div class='vconwarn vConUndetect' title='console.warn()'>" + Array.from(arguments) + "</div>");
    }else{
        window.checkCode = window.checkCode.replace(/'/g, '"');
        toVConsole("<div class='vconwarn vConUndetect' title='"+window.checkCode+"'>" + Array.from(arguments) + "</div>");
        window.checkCode = undefined;
    }
}

// debug
console.defaultDebug = console.debug.bind(console);
console.debugs = [];
console.debug = function(){
    console.defaultDebug.apply(console, arguments);
    console.debugs.push(Array.from(arguments));
    if(window.checkCode == undefined){
        toVConsole("<div class='vcondebug vConUndetect' title='console.debug()'>" + Array.from(arguments) + "</div>");
    }else{
        window.checkCode = window.checkCode.replace(/'/g, '"');
        toVConsole("<div class='vcondebug vConUndetect' title='"+window.checkCode+"'>" + Array.from(arguments) + "</div>");
        window.checkCode = undefined;
    }
}

// count
window.countNum = 0;
countArray = [];
console.defaultCount = console.count.bind(console);
console.counts = [];
console.count = function(){
    console.defaultCount.apply(console, arguments);
    console.counts.push(Array.from(arguments));
    if(countArray.lastIndexOf(console.counts[console.counts.length-1][0]) > -1){
        window.tempCheck = countArray.lastIndexOf(console.counts[console.counts.length-1][0]) + 1;
        countArray[countArray.length] = console.counts[console.counts.length-1][0];
        window.countNum = countArray[window.tempCheck];
    }else{
        countArray[countArray.length] = console.counts[console.counts.length-1][0];
        window.countNum = 0;
    }
    window.countNum += 1;
    countArray[countArray.length] = window.countNum;
    if(window.checkCode == undefined){
        toVConsole("<div class='vconcount vConUndetect' title='console.count()'>" + Array.from(arguments) + ": "+ window.countNum + "</div>");
    }else{
        window.checkCode = window.checkCode.replace(/'/g, '"');
        toVConsole("<div class='vconcount vConUndetect' title='"+window.checkCode+"'>" + Array.from(arguments) + ": "+ window.countNum + "</div>");
        window.checkCode = undefined;
    }
}

// countReset
console.defaultCountReset = console.countReset.bind(console);
console.countResets = [];
console.countReset = function(){
    console.defaultCountReset.apply(console, arguments);
    console.countResets.push(Array.from(arguments));

    countArray[countArray.length] = console.countResets[console.countResets.length-1][0];
    window.countNum = 0;
    countArray[countArray.length] = window.countNum;
    if(window.checkCode == undefined){
        toVConsole("<div class='vconcountReset vConUndetect' title='console.countReset()'>" + Array.from(arguments) + " counter was cleared" + "</div>");
    }else{
        window.checkCode = window.checkCode.replace(/'/g, '"');
        toVConsole("<div class='vconcountReset vConUndetect' title='"+window.checkCode+"'>" + Array.from(arguments) + " counter was cleared" + "</div>");
        window.checkCode = undefined;
    }
}

// time
timeArray = [];
console.defaultTime = console.time.bind(console);
console.times = [];
console.time = function(){
    window.timeNum  = new Date().getTime();
    console.defaultTime.apply(console, arguments);
    console.times.push(Array.from(arguments));
    var currentdate = new Date();
    getSec = ("0"+currentdate.getSeconds()).slice(-2);
    getMin = ("0"+currentdate.getMinutes()).slice(-2);
    getHrs = ("0"+currentdate.getHours()).slice(-2);
    if(window.checkCode == undefined){
        toVConsole("<div class='vcontime vConUndetect' title='console.time()'>" + Array.from(arguments) + " : started <span>at</span> " + getHrs+":"+getMin+":"+getSec+ "</div>");
    }else{
        window.checkCode = window.checkCode.replace(/'/g, '"');
        toVConsole("<div class='vcontime vConUndetect' title='"+window.checkCode+"'>" + Array.from(arguments) + " : started <span>at</span> " + getHrs+":"+getMin+":"+getSec+ "</div>");
        window.checkCode = undefined;
    }
    timeArray[timeArray.length] = Array.from(arguments)[0];
    timeArray[timeArray.length] = window.timeNum;
}

// timeEnd
console.defaultTimeEnd = console.timeEnd.bind(console);
console.timeEnds = [];
console.timeEnd = function(){
    console.defaultTimeEnd.apply(console, arguments);
    console.timeEnds.push(Array.from(arguments));
    if(timeArray.indexOf(Array.from(arguments)[0]) > -1){
        origTime = timeArray[timeArray.indexOf(Array.from(arguments)[0])+1];
        newTime = new Date().getTime() - origTime;
        if(window.checkCode == undefined){
            toVConsole("<div class='vcontime vConUndetect' title='console.timeEnd()'>" + Array.from(arguments) + " : " + newTime/1000 + "<span> (" + newTime + "ms)</span>" + "</div>");
        }else{
            window.checkCode = window.checkCode.replace(/'/g, '"');
            toVConsole("<div class='vcontime vConUndetect' title='"+window.checkCode+"'>" + Array.from(arguments) + " : " + newTime/1000 + "<span> (" + newTime + "ms)</span>" + "</div>");
            window.checkCode = undefined;
        }
        timeArray[timeArray.indexOf(Array.from(arguments)[0])+1] = '';
        timeArray[timeArray.indexOf(Array.from(arguments)[0])] = '';
    }
}


// clear
console.defaultClear = console.clear.bind(console);
console.clears = [];
console.clear = function(){
    toVConsole("<hr>");
}

// alert
function alert(x){
    if(window.checkCode == undefined){
        toVConsole("<div class='vconalert vConUndetect' title='alert()'>" + x + "</div>");
    }else{
        window.checkCode = window.checkCode.replace(/'/g, '"');
        toVConsole("<div class='vconalert vConUndetect' title='"+window.checkCode+"'>" + x + "</div>");
        window.checkCode = undefined;
    }
}

function toVConsole(y){
    if(y == "<hr>"){
        var currentdate = new Date();
        hrsVar = ("0" + currentdate.getHours()).slice(-2);
        minVar = ("0" + currentdate.getMinutes()).slice(-2);
        document.getElementById("vconsole_"+window.checkTime).getElementsByTagName("details")[document.getElementById("vconsole_"+window.checkTime).getElementsByTagName("details").length-1].open = false;
        document.getElementById("vconsole_"+window.checkTime).getElementsByTagName("summary")[document.getElementById("vconsole_"+window.checkTime).getElementsByTagName("summary").length-1].innerHTML = "Cleared at "+hrsVar+":"+minVar;
        document.getElementById("vconsole_"+window.checkTime).getElementsByTagName("summary")[document.getElementById("vconsole_"+window.checkTime).getElementsByTagName("summary").length-1].style.height = "auto";
        document.getElementById("vconsole_"+window.checkTime).innerHTML += "<details class='vConUndetect' open><summary class='vConUndetect'></summary></details>";
    }else{
        document.getElementById("vconsole_"+window.checkTime).getElementsByTagName("details")[document.getElementById("vconsole_"+window.checkTime).getElementsByTagName("details").length-1].innerHTML += y;
        setTimeout(function(){
            checkForChars();
        }, 50);
    }
    document.getElementById("vconsole_"+window.checkTime).scrollTop = document.getElementById("vconsole_"+window.checkTime).scrollHeight;
}
function checkForChars(){
    var x = document.getElementsByClassName("vconlog");
    var i;
    for (i = 0; i < x.length; i++) {
        if(x[i].innerHTML.slice(0,1) == "%"){
            x[i].innerHTML = x[i].innerHTML.slice(x[i].innerHTML.indexOf(";,")+2,x[i].innerHTML.length);
        }
    }
}
function addConsole(){
    window.chevSvgIcon = '<svg style="width:24px;height:24px;pointer-events:none;" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>';
    window.pickSvgIcon = '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10" /></svg>';
    document.body.innerHTML += "<div id='velements_"+window.checkTime+"' class='vConUndetect'><div class='vConUndetect' style='display:flex;position:sticky;top:0;background-color:#ffffff;border-radius:0;'><a class='tabClass vConUndetect' onclick='vconConsoleFunc();'>Console</a><a class='tabClass vConUndetect tabSelect' onclick='vconElemFunc();'>Elements</a></div><div id='vConsoleElements_"+window.checkTime+"' class='vConUndetect'>Coming Soon...</div></div><div id='vconsole_"+window.checkTime+"' class='vConUndetect'><div style='display:flex;position:sticky;top:0;background-color:#ffffff;border-radius:0;'><a class='tabClass vConUndetect tabSelect' onclick='vconConsoleFunc();'>Console</a><a class='tabClass vConUndetect' onclick='vconElemFunc();'>Elements</a></div><details class='vConUndetect' open><summary class='vConUndetect'></summary></details></div><div class='flexDiv vConUndetect' id='flex_"+window.checkTime+"'><input class='vConUndetect' spellcheck='false' autocapitalize='none' list='historyList' placeholder='Type code here...'></input><datalist id='historyList' class='vConUndetect'></datalist><button id=ibutton_"+window.checkTime+" class='vConUndetect' onclick='iFunc(event);' title='Run code (Enter)'>"+window.chevSvgIcon+"</button><button id=pbutton_"+window.checkTime+" class='vConUndetect' onclick='selectFromPage();' title='Select an element from the page (Ctrl+H)'>"+window.pickSvgIcon+"</button></div><button id='vbutton_"+window.checkTime+"' class='vConUndetect' onclick='toggleConsole();' title='Toggle this panel (~)'>"+window.chevSvgIcon+"</button>";

    //Console CSS
    const ConsoleStyles = s =>(d=>{d.head.appendChild(d.createElement("style")).innerHTML=s})(document);
    ConsoleStyles("#vconsole_"+window.checkTime+"{ position:fixed; font-weight:normal; right:16px; top:16px; width:300px; max-width:50%; height:200px; padding:8px; padding-top:0; overflow:auto; scroll-behavior:smooth; background-color:#ffffff; box-shadow:0 4px 16px 0 rgba(0,0,0,.2); font-family:monospace; border-radius: 8px;transform-origin:center;transition:transform 200ms ease-in-out, opacity 200ms ease-in-out; }"+"#velements_"+window.checkTime+" div{ margin-bottom:4px; padding:8px;}"+"#vConsoleElements_"+window.checkTime+"{ height:150px; overflow: auto; border: 1px solid; color:gray; border-radius:0; }"+"#vConsoleElements_"+window.checkTime+" span{ color:white; background-color:steelblue; }"+"#vconsole_"+window.checkTime+" div{ margin-bottom:4px; padding:8px; border-radius:4px; color:#000000; background-color:#ededed; }"+"#vconsole_"+window.checkTime+" summary:empty ~ div:last-of-type{ animation:slideOver 200ms ease-out; }"+window.checkTime+" summary:empty{ height:0; }"+"#vbutton_"+window.checkTime+"{ position:fixed; right:32px; top:32px; padding:1px; margin:0; opacity:1; width:32px; height:32px; border:none; transform:translate(80%,-80%); outline:none; background-color:skyblue; color:#ffffff; font-weight:bold; border-radius:50%; display: flex; align-items: center; justify-content: center; cursor:pointer; box-shadow:0 4px 8px 0 rgba(0,0,0,.2); } @keyframes slideOver{ 0%{transform: translateX(-100%);} 100%{transform: translateX(0px) sacleY(1);}}"+"#vconsole_"+window.checkTime+" + .flexDiv{ display:flex; align-items:stretch; position:fixed; top:220px; right:16px; width: 300px; padding: 8px; margin-top: 8px; border-radius:8px; box-shadow:0 4px 16px 0 rgba(0,0,0,.2); background-color:#ffffff;transition:opacity 200ms ease-in-out; }"+"#vconsole_"+window.checkTime+" + .flexDiv input{ width:calc(100% - 64px); background-color:#ffffff; border-radius:4px; padding: 8px; border:1px solid #cccccc; outline:none;margin-right:4px; font-size: 16px; -webkit-appearance: none; -moz-appearance: none; appearance: none; }"+"#ibutton_"+window.checkTime+"{ border-radius:4px; border:none; box-shadow:0 0 0 2px skyblue inset; outline:none; background-color:#ffffff; color:#ffffff; padding:1px; margin:0; opacity:1; width:36px; font-weight:bold; display: flex; align-items: center; justify-content: center; cursor:pointer; }"+"#pbutton_"+window.checkTime+"{ border-radius:4px; border:none; outline:none; background-color:#ffffff; color:grey; padding:1px; margin:0; opacity:1; width:36px; font-weight:bold; display: flex; align-items: center; justify-content: center; cursor:pointer;margin-right: 4px; }"+"#vbutton_"+window.checkTime+" svg{ transition:transform 200ms ease-in-out; }"+"#ibutton_"+window.checkTime+" svg{ transform:rotate(-90deg); }"+"#ibutton_"+window.checkTime+" path{ fill:skyblue; }"+"#ibutton_"+window.checkTime+":active, #ibutton_"+window.checkTime+":focus, #vbutton_"+window.checkTime+":active, #vbutton_"+window.checkTime+":focus{ box-shadow: 0 0 0 2px cornflowerblue inset, 0 4px 8px 0 rgba(0,0,0,.2); }"+"#ibutton_"+window.checkTime+":hover, #vbutton_"+window.checkTime+":hover{ filter:brightness(104%); }"+"#pbutton_"+window.checkTime+":hover{ filter:brightness(115%); }"+"#ibutton_"+window.checkTime+":focus path, #vbutton_"+window.checkTime+":focus path{ fill:cornflowerblue; }"+"#pbutton_"+window.checkTime+":focus{ color:#ffffff; background-color:grey; }"+"#vbutton_"+window.checkTime+" svg, #ibutton_"+window.checkTime+" svg, #pbutton_"+window.checkTime+" svg{ pointer-events:none; }")

    //Elements CSS
    const ElementsStyles = s =>(d=>{d.head.appendChild(d.createElement("style")).innerHTML=s})(document);
    ElementsStyles("#velements_"+window.checkTime+"{ position:fixed; font-weight:normal; right:16px; top:16px; width:300px; max-width:50%; height:200px; padding:8px; padding-top:0; overflow:auto; scroll-behavior:smooth; background-color:#ffffff; box-shadow:0 4px 16px 0 rgba(0,0,0,.2); font-family:monospace; border-radius: 8px;transform-origin:center;transform:translateX(100%); opacity:0; pointer-events:none; transition:transform 200ms ease-in-out, opacity 200ms ease-in-out; }")

    //Console CSS - Mobile
    const mobileStyles = s =>(d=>{d.head.appendChild(d.createElement("style")).innerHTML=s})(document);
    mobileStyles("@media only screen and (max-width: 990px) {#vconsole_"+window.checkTime+", #velements_"+window.checkTime+"{ width:calc(100% - 48px); max-width:calc(100% - 48px); } "+"#vbutton"+window.checkTime+"{ right:20px; top:20px; }"+"#vconsole_"+window.checkTime+" + .flexDiv{ width:calc(100% - 48px); }"+"}")

    //Links CSS
    const LinkStyles = s =>(d=>{d.head.appendChild(d.createElement("style")).innerHTML=s})(document);
    LinkStyles("#vconsole_"+window.checkTime+" .tabClass, "+"#velements_"+window.checkTime+" .tabClass{ filter:none; background-color:#ffffff; color:#999999; font-weight:normal; padding: 0 4px; border-bottom:none; flex-grow:1; margin-right:8px;cursor:pointer; }"+"#vconsole_"+window.checkTime+" .tabClass:hover{ opacity:.8; }")

    //Links Select CSS
    const LinkSStyles = s =>(d=>{d.head.appendChild(d.createElement("style")).innerHTML=s})(document);
    LinkSStyles("#vconsole_"+window.checkTime+" .tabSelect, "+"#velements_"+window.checkTime+" .tabSelect{ color:#333333; font-weight:bold; border-bottom:2px solid; }")

    //Logs CSS
    const LogStyles = s =>(d=>{d.head.appendChild(d.createElement("style")).innerHTML=s})(document);
    LogStyles(".vconlog{ border-bottom:2px solid skyblue; }")

    //Infos CSS
    const InfoStyles = s =>(d=>{d.head.appendChild(d.createElement("style")).innerHTML=s})(document);
    InfoStyles(".vconinfo{ border-bottom:2px solid cornflowerBlue; }")

    //Time CSS
    const TimeStyles = s =>(d=>{d.head.appendChild(d.createElement("style")).innerHTML=s})(document);
    TimeStyles(".vcontime{ border-bottom:2px solid darkorchid; } .vcontime span{ opacity:0.4; }")
    
    //Errors CSS
    const ErrorStyles = s =>(d=>{d.head.appendChild(d.createElement("style")).innerHTML=s})(document);
    ErrorStyles(".vconerror{ border-bottom:2px solid red; }")

    //Warn CSS
    const WarnStyles = s =>(d=>{d.head.appendChild(d.createElement("style")).innerHTML=s})(document);
    WarnStyles(".vconwarn{ border-bottom:2px solid gold; }")

    //Debug CSS
    const DebugStyles = s =>(d=>{d.head.appendChild(d.createElement("style")).innerHTML=s})(document);
    DebugStyles(".vcondebug{ border-bottom:2px solid orange; }")

    //Count CSS
    const CountStyles = s =>(d=>{d.head.appendChild(d.createElement("style")).innerHTML=s})(document);
    CountStyles(".vconcount{ border-bottom:2px solid darkseagreen; }")

    //CountReset CSS
    const CountResetStyles = s =>(d=>{d.head.appendChild(d.createElement("style")).innerHTML=s})(document);
    CountResetStyles(".vconcountReset{ border-bottom:2px solid seagreen; }")

    //Alert CSS
    const AlertStyles = s =>(d=>{d.head.appendChild(d.createElement("style")).innerHTML=s})(document);
    AlertStyles(".vconalert{ border-bottom:2px solid pink; }")

    //Summary CSS
    const SumStyles = s =>(d=>{d.head.appendChild(d.createElement("style")).innerHTML=s})(document);
    SumStyles("#vconsole_"+window.checkTime+" summary::marker {  font-size: 0; } "+"#vconsole_"+window.checkTime+" summary::-webkit-details-marker {  display: none; }"+"#vconsole_"+window.checkTime+" details {  margin-bottom: 16px; }"+"#vconsole_"+window.checkTime+" details:last-of-type {  margin-bottom: 0; }"+"#vconsole_"+window.checkTime+" summary {  margin-bottom:4px; color:#333333; cursor:pointer; height:0; }"+"#vconsole_"+window.checkTime+" details[open] summary { color:#bbbbbb; }"+"#vconsole_"+window.checkTime+" summary:focus {  outline:none; }"+"#vconsole_"+window.checkTime+" summary:hover { opacity:0.8; }")
}
function toggleConsole(){
    if(window.hideConsole != true){
        if(document.getElementsByClassName('tabSelect')[1].innerText == "Elements"){
            document.getElementById('velements_'+window.checkTime).style.transform = "translateX(0) scaleY(0)";
            document.getElementById('velements_'+window.checkTime).style.opacity = 0;
            document.getElementById('velements_'+window.checkTime).style.pointerEvents = "none";
            document.getElementById('velements_'+window.checkTime).style.overflow = "hidden";
        }else{
            document.getElementById('vconsole_'+window.checkTime).style.transform = " translateX(0)scaleY(0)";
            document.getElementById('vconsole_'+window.checkTime).style.opacity = 0;
            document.getElementById('vconsole_'+window.checkTime).style.pointerEvents = "none";
            document.getElementById('vconsole_'+window.checkTime).style.overflow = "hidden";
        }
        document.getElementById('flex_'+window.checkTime).style.opacity = 0;
        document.getElementById('flex_'+window.checkTime).style.pointerEvents = "none";
        document.getElementById('vbutton_'+window.checkTime).getElementsByTagName("svg")[0].style.transform = "rotate(-90deg)";
        window.hideConsole = true;
    }else{
        if(document.getElementsByClassName('tabSelect')[1].innerText == "Elements"){
            document.getElementById('velements_'+window.checkTime).style.transform = "translateX(0) scaleY(1)";
            document.getElementById('velements_'+window.checkTime).style.opacity = 1;
            document.getElementById('velements_'+window.checkTime).style.pointerEvents = "all";
        }else{
            document.getElementById('vconsole_'+window.checkTime).style.transform = "translateX(0) scaleY(1)";
            document.getElementById('vconsole_'+window.checkTime).style.opacity = 1;
            document.getElementById('vconsole_'+window.checkTime).style.pointerEvents = "all";
        }
        document.getElementById('flex_'+window.checkTime).style.opacity = 1;
        document.getElementById('flex_'+window.checkTime).style.pointerEvents = "all";
        document.getElementById('vbutton_'+window.checkTime).getElementsByTagName("svg")[0].style.transform = "rotate(0deg)";
        window.hideConsole = false;
        setTimeout(function(){ 
            document.getElementById('vconsole_'+window.checkTime).style.overflow = "auto";
            setTimeout(function(){ 
                document.getElementById("vconsole_"+window.checkTime).scrollTop = document.getElementById("vconsole_"+window.checkTime).scrollHeight;
            }, 200);
        }, 100);
    }
}
function runCode(r){
    if(r !== ''){
        window.checkCode = r;
        document.getElementById("flex_"+window.checkTime).getElementsByTagName("input")[0].placeholder = 'Running...';
        setTimeout(function(){ document.getElementById("flex_"+window.checkTime).getElementsByTagName("input")[0].placeholder = 'Type code here...'; }, 400);
        document.getElementById("flex_"+window.checkTime).getElementsByTagName("input")[0].value = '';
        eval(r);
        var node = document.createElement("option");
        node.value = r;
        document.getElementById("historyList").appendChild(node);
    }
}

window.addEventListener("keydown", function (event) {
    if(event.keyCode === 17){
        window.ctrlDown = 1;
    }
    if (event.keyCode === 13) {
        event.preventDefault();
        runCode(document.getElementById("flex_"+window.checkTime).getElementsByTagName("input")[0].value);
    }
    if (event.keyCode === 192) {
        event.preventDefault();
        toggleConsole();
    }
    if (event.keyCode === 72) {
        if(window.ctrlDown == 1){
            event.preventDefault();
            selectFromPage();
        }
    }
});
window.addEventListener("keyup", function (event) {
    if(event.keyCode === 17){
        window.ctrlDown = 0;
    }
});

function iFunc(e){
    if(e.target.parentNode.getElementsByTagName('input')[0].value !== ''){
        runCode(e.target.parentNode.getElementsByTagName('input')[0].value);
    }
}

function selectFromPage(){
    //Selects an Element from Page by Clicking it.
    if(window.stopSelecting == 1){
        document.getElementById("pbutton_"+window.checkTime).style.color = "grey";
        document.getElementById("pbutton_"+window.checkTime).style.backgroundColor = "#ffffff";
        window.stopSelecting = 0;
    }else{
        window.stopSelecting = 1;
        document.getElementById("pbutton_"+window.checkTime).style.color = "#ffffff";
        document.getElementById("pbutton_"+window.checkTime).style.backgroundColor = "grey";
        document.addEventListener("click", function(e) {
            if(e.target.className.indexOf("vConUndetect") < 0){
                if(document.getElementById("flex_"+window.checkTime).getElementsByTagName("input")[0].value.slice(-10) !== 'nSelection' && window.stopSelecting == 1){
                    window.vConSelection = e.target;
                    vcon = e.target;
                    if(document.getElementById("flex_"+window.checkTime).getElementsByTagName("input")[0].value.slice(-4) !== 'vcon'){
                        document.getElementById("flex_"+window.checkTime).getElementsByTagName("input")[0].value += 'vcon';
                    }
                    window.stopSelecting = 0;
                    if(document.getElementById("velements_"+window.checkTime).style.opacity == 1){
                    }else{
                        document.getElementById("flex_"+window.checkTime).getElementsByTagName("input")[0].focus();
                    }
                    tempShade = window.getComputedStyle(vcon).boxShadow;
                    if(tempShade == 'none'){
                        vcon.style.boxShadow = '0 0 0 2px blue';
                    }else{
                        vcon.style.boxShadow = '0 0 0 2px blue,' + tempShade;
                    }
                    setTimeout(function(){ 
                        vcon.style.boxShadow = tempShade;
                        document.getElementById("pbutton_"+window.checkTime).style.color = "grey";
                        document.getElementById("pbutton_"+window.checkTime).style.backgroundColor = "#ffffff";
                        searchForCode();
                    }, 300);
                }
            }
        });
    }
    //document.styleSheets - to show all the styles on selected object.
}
function vconElemFunc(){
    document.getElementById("velements_"+window.checkTime).style.transform = "translateX(0) scaleY(1)";
    document.getElementById("velements_"+window.checkTime).style.opacity = 1;
    document.getElementById("velements_"+window.checkTime).style.pointerEvents = "all";
    document.getElementById("vconsole_"+window.checkTime).style.transform = "translateX(-100%) scaleY(1)";
    document.getElementById("vconsole_"+window.checkTime).style.opacity = 0;
    document.getElementById("vconsole_"+window.checkTime).style.pointerEvents = "none";
    document.getElementById("velements_"+window.checkTime).getElementsByClassName("tabClass")[0].className = "tabClass";
    document.getElementById("velements_"+window.checkTime).getElementsByClassName("tabClass")[1].className = "tabClass tabSelect";
    document.getElementById("vconsole_"+window.checkTime).getElementsByClassName("tabClass")[0].className = "tabClass";
    document.getElementById("vconsole_"+window.checkTime).getElementsByClassName("tabClass")[1].className = "tabClass tabSelect";
}
function vconConsoleFunc(){
    document.getElementById("velements_"+window.checkTime).style.transform = "translateX(100%) scaleY(1)";
    document.getElementById("velements_"+window.checkTime).style.opacity = 0;
    document.getElementById("velements_"+window.checkTime).style.pointerEvents = "none";
    document.getElementById("vconsole_"+window.checkTime).style.transform = "translateX(0) scaleY(1)";
    document.getElementById("vconsole_"+window.checkTime).style.opacity = 1;
    document.getElementById("vconsole_"+window.checkTime).style.pointerEvents = "all";
    document.getElementById("velements_"+window.checkTime).getElementsByClassName("tabClass")[1].className = "tabClass";
    document.getElementById("velements_"+window.checkTime).getElementsByClassName("tabClass")[0].className = "tabClass tabSelect";
    document.getElementById("vconsole_"+window.checkTime).getElementsByClassName("tabClass")[1].className = "tabClass";
    document.getElementById("vconsole_"+window.checkTime).getElementsByClassName("tabClass")[0].className = "tabClass tabSelect";
}
function updateCodeInElements(){
    window.origCodeAtLoad = document.body.innerHTML;
}
function searchForCode(){
    // updateCodeInElements();
    window.origPageSource = window.origCodeAtLoad;
    
    window.newPageSource = window.origPageSource.slice(0,window.origPageSource.indexOf(vcon.innerHTML));
    window.newPageSource += "<selected-text-start-please>";
    window.newPageSource += vcon.innerHTML.toString();
    window.newPageSource += "<selected-text-end-please>";
    window.newPageSource += window.origPageSource.slice(window.origPageSource.indexOf(vcon.innerHTML)+vcon.innerHTML.length, window.origPageSource.length);

    document.getElementById("vConsoleElements_"+window.checkTime).innerText = window.newPageSource;
    document.getElementById("vConsoleElements_"+window.checkTime).innerHTML = document.getElementById("vConsoleElements_"+window.checkTime).innerHTML.replace(/&lt;selected-text-start-please&gt;/g, "<span title='vcon variable'>");
    document.getElementById("vConsoleElements_"+window.checkTime).innerHTML = document.getElementById("vConsoleElements_"+window.checkTime).innerHTML.replace(/&lt;selected-text-end-please&gt;/g, "</span>");
    document.getElementById("vConsoleElements_"+window.checkTime).scrollTop = document.getElementById("vConsoleElements_"+window.checkTime).getElementsByTagName("span")[0].offsetTop-100;
    
}
window.checkTime = new Date().valueOf();

// window.onload = function() {
//     updateCodeInElements();
//     addConsole();
//     console.log('Hello World!');
//     document.getElementById("vConsoleElements_"+window.checkTime).innerText = window.origCodeAtLoad;
//   }