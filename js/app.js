let objects = [
    { id: 1, firstName: "John", lastName: "Doe" },
    { id: 2, firstName: "Jane", lastName: "Doe" },
    { id: 3, firstName: "Alice", lastName: "Smith" },
    { id: 4, firstName: "Bob", lastName: "Johnson" },
    { id: 5, firstName: "Eve", lastName: "Williams" },
    { id: 6, firstName: "Michael", lastName: "Brown" },
    { id: 7, firstName: "Sarah", lastName: "Jones" },
    { id: 8, firstName: "David", lastName: "Garcia" },
    { id: 9, firstName: "Laura", lastName: "Martinez" },
    { id: 10, firstName: "Chris", lastName: "Davis" }
];

// Delete objects with IDs 2, 4, 6, and 8
objects = objects.filter(obj => ![2, 4, 6, 8].includes(obj.id));

// Summon objects with IDs 2, 4, 7, and 9
let summonedObjects = [
    { id: 2, firstName: "Summoned", lastName: "Object 2" },
    { id: 4, firstName: "Summoned", lastName: "Object 4" },
    { id: 7, firstName: "Summoned", lastName: "Object 7" },
    { id: 9, firstName: "Summoned", lastName: "Object 9" }
];

// Replace deleted objects with summoned objects
objects = objects.concat(summonedObjects.filter(obj => ![2, 4].includes(obj.id)));

// List objects that are not deleted
console.log("Undeleted objects:");
console.log(objects);
