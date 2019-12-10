window.addEventListener('load',loadHandler)

function loadHandler(){
    document.body.innerHTML=main
    window.addEventListener('hashchange', hashChangeHandler)
    hashChangeHandler()
}

function hashChangeHandler(){

    const mainContent = document.getElementById('mainContent')

    switch(window.location.hash){
        case '#home' :
            mainContent.innerHTML = home
            break;
        case '#bundles' :
            mainContent.innerHTML = bundles
            bundlesScript()
            break;
        default:
            window.location.hash="#home"
    }


}