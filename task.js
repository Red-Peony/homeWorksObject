function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

let student1 = new Student("Ivan", "male", 31);
let student2 = new Student("Nina", "female", 24);
let student3 = new Student("Dima", "male", 18);


Student.prototype.setSubject = function (subjectName) {
  return this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {
  if (this.marks === undefined) { 
    this.marks = [];
    this.marks.push(mark);        
  } else {
    this.marks.push(mark);       
  }
  return this.marks;   
} 
 
Student.prototype.addMarks = function(...mark) {
  if (this.marks === undefined) { 
    this.marks = [];
    this.marks.push(mark);        
  } else {
    this.marks.push(mark);       
  }
  return this.marks;   
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
  return Student;
   
} 
