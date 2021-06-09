function onFormSubmit() {

    var formData = readFormData();
    insertNewRecord(formData);

}


function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["email"] = document.getElementById("email").value;
    formData["phone"] = document.getElementById("phone").value;
    formData["position"] = document.getElementById("position").value;
    formData["salary"] = document.getElementById("salary").value;
    return formData;
}


function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
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
    cell6.innerHTML = `<button class="btn btn-warning">Edit</button>
                       <button class="btn btn-danger">Delete</button>`;
}

