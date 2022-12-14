function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

let student1 = new Student("Ivan", "male", 31);
let student2 = new Student("Nina", "female", 24);
let student3 = new Student("Dima", "male", 18);


Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {
  if (this.marks === undefined) { 
    this.marks = [];
  }  
  this.marks.push(mark);       
} 
 
Student.prototype.addMarks = function(...mark) {
  if (this.marks === undefined) { 
    this.marks = [];      
  } 
  this.marks.push(...mark);      
} 

Student.prototype.getAverage = function() {
  return this.marks.reduce((acc, item, index, arr) => {
    acc += item;
    if (index === arr.length-1) {
      return acc/arr.length;
    }
      return acc;
  }, 0);
} 

Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
} 


student1.setSubject("Algebra");
student1.addMark(5);
student1.addMarks(4, 6);
student1.addMarks(2, 3, 2);
console.log(student1);