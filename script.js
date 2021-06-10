let selectedRow = null;

const onFormSubmit = () => {
  const formData = readFormData();

  if (selectedRow == null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }
  resetForm();
  alert('User information update')
  document.getElementById("information").style.display = 'none'
};

const readFormData = () => {
  const formData = {};
  formData["name"] = document.getElementById("name").value;
  formData["email"] = document.getElementById("email").value;
  formData["phone"] = document.getElementById("phone").value;
  formData["position"] = document.getElementById("position").value;
  formData["salary"] = document.getElementById("salary").value;
  return formData;
};

//Add User function
const insertNewRecord = (data) => {
  const table = document
    .getElementById("employeeList")
    .getElementsByTagName("tbody")[0];
  const newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.name;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.email;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.phone;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.position;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.salary;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = `<button class="btn btn-warning" 
                     data-toggle="modal" data-target="#popUpModel" 
                     onClick="onEdit(this)">Edit</button>
                     
                     <button class="btn btn-danger"  
                     onClick="onDelete(this)">Delete</button>
                    `;
};

//rest from after submission
const resetForm = () => {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("position").value = "";
  document.getElementById("salary").value = "";
  selectedRow = null;
};

//edit user info function
const onEdit = (td) => {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("name").value = selectedRow.cells[0].innerHTML;
  document.getElementById("email").value = selectedRow.cells[1].innerHTML;
  document.getElementById("phone").value = selectedRow.cells[2].innerHTML;
  document.getElementById("position").value = selectedRow.cells[3].innerHTML;
  document.getElementById("salary").value = selectedRow.cells[4].innerHTML;
};

//update user info after edit
const updateRecord = (formData) => {
  selectedRow.cells[0].innerHTML = formData.name;
  selectedRow.cells[1].innerHTML = formData.email;
  selectedRow.cells[2].innerHTML = formData.phone;
  selectedRow.cells[3].innerHTML = formData.position;
  selectedRow.cells[4].innerHTML = formData.salary;
};

//delete user info function
const onDelete = (td) => {
  console.log(td);
  if (confirm("Are you sure to delete this record ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    resetForm();
  }
};

