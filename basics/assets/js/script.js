var select = document.getElementById('key');
var btn = document.querySelector('#find');
var rowContainer = document.querySelector('#row-container');
var options = document.querySelectorAll('option');

var person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 37,
  occupation: 'Web Developer',
  vehicle: 'Ferrari'
};

var displayedInfo = JSON.parse(localStorage.getItem('pairs')) || [];
displayCurrentPairs();
// console.log(person.firstName + ' ' + person['lastName']);

btn.addEventListener('click', onClickFindKey);

function onClickFindKey(event) {
  event.preventDefault();
 // get current value of select
 var key = select.value;
 // use that value to accesss object
 var val = person[key];
 var keyText = getTextFromKey(key);
 displayInfoOnPage(keyText, val)
 displayedInfo.push({
   key: keyText,
   value: val
 })
 storeDisplayedInfo();
}

function displayInfoOnPage(key, value) {
  var newRow = document.createElement('tr');
  var tdKey = document.createElement('td');
  tdKey.textContent = key;
  var tdVal = document.createElement('td');
  tdVal.textContent = value;
  newRow.append(tdKey, tdVal);
  // rowContainer.textContent = '';
  rowContainer.append(newRow)
}

function getTextFromKey(key) {
  var selectedOptionText;
  for (var i = 0; i < options.length; i++) {
    var currentOptionValue = options[i].value;
    var currentOptionText = options[i].textContent;
    if (currentOptionValue === key) {
      selectedOptionText = currentOptionText;
    }
  }
  return selectedOptionText;
}

function displayCurrentPairs() {
  for (var i = 0; i < displayedInfo.length; i++) {
    displayInfoOnPage(displayedInfo[i].key, displayedInfo[i].value);
  }
}

function storeDisplayedInfo() {
  localStorage.setItem('pairs', JSON.stringify(displayedInfo))
}