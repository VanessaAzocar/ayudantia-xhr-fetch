const display = document.getElementById('display');
const url = 'https://api.github.com/users/VanessaAzocar';

const getJSON = (url, callaback) => {      
  const request = new XMLHttpRequest();
  request.open('GET', url, true)
  request.onload = function () {
    /*JSON:parse = analisa los datos que te va a traer */
    let users = JSON.parse(request.responseText);
    /*si esta en error que la consola devuelva */
    if (request.readyState == 4 && request.status == "200") {
      console.table(users); 
    } else {
      console.error(users);
    }
  }
  request.send(null);
}

getJSON(url, response => {
  let information = JSON.parse(response);
  console.log(information); 
})

/*Para imprimir algo, crear una funcion, navegar por dentro del JSON y ver si esta listo para sacar la informacion*/

const renderId = dataUser.forEach(element => {
  let listIds = document.createTextNode(user.id);
  console.log(listIds);
  return listIds;
});
