let courses = ['C++', 'Java', 'JS'];
function addCourses(course,m){
    course.push(m);
}

addCourses(courses,'GO');
console.log(courses);

function getFirstElement(course){
    return course[0];
}

var firstElement = getFirstElement(courses);
console.log(firstElement) //output: C++;

function joinArr(course,a){
    return course.join(a);
}

var result1 = joinArr(courses, ",");
var result2 = joinArr(courses, " * ");

console.log(result1); //output: C++,Java,Javascript,Go
console.log(result2); //output: C++ * Java * Javascript * Go