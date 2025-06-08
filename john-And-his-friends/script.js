/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  arr.map((person) => {
    if (person.profession === "developer") {
      console.log(person);
    }
  });
}

function PrintDeveloperbyForEach() {
  arr.forEach((person) => {
    if (person.profession === "developer") {
      console.log(person);
    }
  });
}

function addData() {
  const newPerson = { id: 4, name: "susan", age: "22", profession: "developer" };
  arr.push(newPerson);
  console.log(arr);
}

function removeAdmin() {
  const filteredArr = arr.filter((person) => person.profession !== "admin");
  console.log(filteredArr);
}

function concatenateArray() {
  const newArr = [
    { id: 5, name: "alice", age: "25", profession: "manager" },
    { id: 6, name: "bob", age: "23", profession: "developer" },
    { id: 7, name: "carol", age: "26", profession: "admin" },
  ];
  const result = arr.concat(newArr);
  console.log(result)
}