const sessionUrl = 'sessions.json';

let sessionList = [];

function getSessions(){
    return new Promise(function(resolve, reject){
      var oReq = new XMLHttpRequest();
      oReq.onload = function (e) {
        sessionList = e.target.response;
        resolve(sessionList);
      };
      oReq.open('GET',sessionUrl, true);
      oReq.responseType = 'json';
      oReq.send();
    })
  }
/* Named exports (You have to know the name in order to import it) */
export { getSessions };