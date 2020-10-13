   
  
var AppoinmentFormArray = [];


function loadDataClicked() {
  if (localStorage.BookAppoinment) {
      AppoinmentFormArray = JSON.parse(localStorage.BookAppoinment);
      for (var i = 0; i < AppoinmentFormArray.length; i++) {
          showRow(AppoinmentFormArray[i].DocName1, AppoinmentFormArray[i].Email1, AppoinmentFormArray[i].Fname1,AppoinmentFormArray[i].Lname1,
          AppoinmentFormArray[i].Date1,AppoinmentFormArray[i].Time1)
      }

  }

}


function saveDataClicked() {
     var DocName = document.getElementById("valueInput").value;
    var Email = document.getElementById("keyInput").value;
    var Fname = document.getElementById("valueInput1").value;
     var Lname = document.getElementById("valueInput2").value;
     var Date = document.getElementById("valueInput3").value;
     var Time = document.getElementById("valueInput4").value;
    
    var stuObj = {DocName1: DocName, Email1: Email, Fname1: Fname,Lname1:Lname,Date1:Date,Time1:Time};
    AppoinmentFormArray.push(stuObj);
    localStorage.BookAppoinment = JSON.stringify(AppoinmentFormArray);

    showRow(DocName, Email,Fname,Lname,Date,Time);
    console.log(DocName, Email,Fname,Lname,Date,Time);
    

}
        






function showRow(DocName, Email,Fname,Lname,Date,Time) {
  var keyCell = document.createElement('td');
  keyCell.innerHTML = DocName;
  var valueCell = document.createElement('td');
  valueCell.innerHTML = Email;
     var valueCell1 = document.createElement('td');
  valueCell1.innerHTML = Fname;
    var valueCell2 = document.createElement('td');
  valueCell2.innerHTML = Lname;
  var valueCell3 = document.createElement('td');
  valueCell3.innerHTML = Date;
  var valueCell4 = document.createElement('td');
  valueCell4.innerHTML = Time;
 
  var row = document.createElement('tr');
    var row = document.createElement('tr');
     var row = document.createElement('tr');
     var row = document.createElement('tr');
     var row = document.createElement('tr');
     var row = document.createElement('tr');
  row.appendChild(keyCell);
  row.appendChild(valueCell);
     row.appendChild(valueCell1);
      row.appendChild(valueCell2);
      row.appendChild(valueCell3);
      row.appendChild(valueCell4);
  
 

  document
    .querySelector('.outputTable')
    .appendChild(row);
  return row;
    
     
}
       

document
  .getElementById('saveBtn')
  .addEventListener('click', saveDataClicked);

document
  .getElementById('loadBtn')
  .addEventListener('click', loadDataClicked);
