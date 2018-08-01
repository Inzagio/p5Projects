let searchUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=';


let userInput;

function setup(){
    noCanvas();
    userInput = select('#userinput');
    userInput.changed(goWiki);
    goWiki();

    function goWiki(){
        let term = userInput.value();
        let url = searchUrl + term;
        loadJSON(url, gotData);
    }

    function gotData(data){
        console.log(data);
    }
}

