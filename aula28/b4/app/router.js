'use strict'

const routes = require('./routes')

window.addEventListener('load', loadHandler)

function loadHandler(){
  window.addEventListener('hashchange', hashChangeHandler)
  hashChangeHandler()    
  const mainContent = document.querySelector("#mainContent")

  //////////////

  let routeData = null;

  const routeManager = {
    setMainContent: function (html) {
      mainContent.innerHTML = html
    },

    changeRoute: function(hash, data) {
      routeData = data
      window.location.hash = hash
    }
  }

  function addRouteData(args) {
    args.push(routeData)
    resetRouteData()
  }

  function resetRouteData() {
    routeData = null;
  }

  function hashChangeHandler(){

      const hash = window.location.hash.substring(1)
      let [state, ...args] = hash.split('/')

      let route = routes[state];

      if(!route) {
        window.location.hash = "home";
        return;
      }
      
      addRouteData(args)
      route
        .controller.apply(null, args)
        .then(data => route.view(data, routeManager))
        .then(()=>resetRouteData())    
  }

}