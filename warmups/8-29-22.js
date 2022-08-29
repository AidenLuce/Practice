// / / Write a function, calculateTotalStudents, that returns the total number of students recorded in the classes array.
let classes = [
    {class: "6th grade history", students: 18},
    {class: "7th grade history", students: 20},
    {class: "8th grade history", students: 22}
];
// let totalStudents = 0
// classes.forEach(calculateTotalStudents)
//
// function calculateTotalStudents(num){
//  totalStudents += num;
//  return (totalStudents)
// }
function calculateTotalStudents(array){
    let total = 0;

    for(let i = 0; i < array.length; i++){
        total += array[i].students;
    }
    return total;
}
console.log(calculateTotalStudents(classes))


