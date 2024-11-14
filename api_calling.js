async function apiCall() {
  let data = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (response) => {
      return response.json();
    }
  );

  var list = document.getElementById('dynamic-list');
  
 for(x = 0; x < data.length;x++ ){
  var newItem = document.createElement('li');
  newItem.textContent = data[x].body;
  list.appendChild(newItem);
 }


  console.log(data[0].body);
}

console.log('====================================');
console.log("This is executing.");
console.log('====================================');
apiCall();