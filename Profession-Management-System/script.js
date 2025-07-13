let employees = JSON.parse(localStorage.getItem("employees")) || [];

// Save to localStorage
function saveEmployees() {
  localStorage.setItem("employees", JSON.stringify(employees));
}

function getInputs() {
    return {
    name: document.getElementById('name').value.trim(),
    profession: document.getElementById('profession').value.trim(),
    age: document.getElementById('age').value.trim()
    };
}

function displayMessage(text, isError = false) {
    const msg = document.getElementById('message');
    msg.textContent = text;
    msg.className = isError ? 'error' : 'success';
}

function updateCount() {
    document.getElementById('count').textContent = employees.length;
}

function addEmployee() {
    const { name, profession, age } = getInputs();

    if (!name || !profession || !age) {
    displayMessage('Error : Please Make sure All the fields are filled before adding in an employee !', true);
    return;
    }

    employees.push({ name, profession, age });
    displayMessage('Success: Employee added!', false);
    saveEmployees();
    showEmployees();


    document.getElementById('name').value = '';
    document.getElementById('profession').value = '';
    document.getElementById('age').value = '';
}

function showEmployees() {
    const container = document.getElementById('employeeList');
    container.innerHTML = '';

    if (employees.length == 0) {
        container.innerHTML = 'You have 0 Employees.';
    }

    employees.forEach((emp, index) => {
    const div = document.createElement('div');
    div.className = 'employee-list';
    div.id = `emp-${index}`;
    div.innerHTML = `
        <div class="dataBody">
            <p>${index + 1}.</p>
            <p>Name: ${emp.name}</p>
            <p>Profession: ${emp.profession}</p>
            <p>Age: ${emp.age}</p>
        </div>
        <div class="action">
            <button onclick="deleteEmployee(${index})">Delete User</button>
        </div>
    `;
    container.appendChild(div);
    });

    updateCount();
}

function deleteEmployee(index) {
    employees.splice(index, 1);
    displayMessage('Employee removed.', false);
    saveEmployees();
    showEmployees();
}

showEmployees();