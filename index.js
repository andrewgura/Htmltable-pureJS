var table_data = [{
  first_name: 'Rose',
  last_name: 'Tyler',
  home: 'Earth'
}, {
  first_name: 'Zoe',
  last_name: 'Heriot',
  home: 'Space Station W3'
}, {
  first_name: 'Jo',
  last_name: 'Grant',
  home: 'Earth'
}, {
  first_name: 'Leela',
  last_name: null,
  home: 'Unspecified'
}, {
  first_name: 'Romana',
  last_name: null,
  home: 'Gallifrey'
}, {
  first_name: 'Clara',
  last_name: 'Oswald',
  home: 'Earth'
}, {
  first_name: 'Adric',
  last_name: null,
  home: 'Alzarius'
}, {
  first_name: 'Susan',
  last_name: 'Foreman',
  home: 'Gallifrey'
}];

function display(data) {
  //creating the table element
  var table = document.createElement("table");
  //creating table headers
  var headFirst = document.createElement("th");
  var headLast = document.createElement("th");
  var headHome = document.createElement("th");
  //table headers text
  headFirst.textContent = "First Name";
  headLast.textContent = "Last Name";
  headHome.textContent = "Home";
  //adding table headers to table
  table.appendChild(headFirst)
  table.appendChild(headLast)
  table.appendChild(headHome)

  //foreach looping over the input data(table_data) array for each object inside the array, assigns "value" to current value of data
  data.forEach(function(value) {
    //creates a tbody element
    var tbody = document.createElement("tbody");
    //creates a tr element
    var tr = document.createElement("tr");
    //each of these creates a td element for each object value of first_name, last_name, and home
    var tdFirst = document.createElement("td");
    var tdLast = document.createElement("td");
    var tdHome = document.createElement("td");

    //assigning the object value of current value to a variable
    first = value.first_name;
    last = value.last_name;
    home = value.home;

    //getting only textcontent of the object value
    tdFirst.textContent = first;
    tdLast.textContent = last;
    tdHome.textContent = home;

    //appending tbody to table
    table.appendChild(tbody)
    //appending tr to tbody
    tbody.appendChild(tr)
    //appenidng tds to tr
    tr.appendChild(tdFirst)
    tr.appendChild(tdLast)
    tr.appendChild(tdHome)
    //writing the table to document
    document.body.appendChild(table);
  })
}

display(table_data);
