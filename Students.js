class Student {
    #averageGrade = 0;
    constructor(id, name, department, courseWithGrades = [], level) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.courseWithGrades = courseWithGrades;
        this.#averageGrade = this.calculateAverageGrade();
        this.level = level;
    }

    addOrUpdateGrade(course, grade) {
        const courseIndex = this.courseWithGrades.findIndex(
            (courseWithGrade) => courseWithGrade.course === course
        );

        if (courseIndex === -1) {
            this.courseWithGrades.push({ course, grade });
        } else {
            this.courseWithGrades[courseIndex].grade = grade;
        }

        this.#averageGrade = this.calculateAverageGrade();
    }

    updateDetails({ name, department, level }) {
        if(name) this.name = name;
        if(department) this.department = department;
        if(level) this.level = level;

    }

    calculateAverageGrade() {
        const totalGrade = this.courseWithGrades.reduce(
            (total, courseWithGrade) => total + courseWithGrade.grade,
            0
        );

        return (totalGrade / this.courseWithGrades.length).toFixed(2);
    }

    displayDetails() {
        let courseDetails = this.courseWithGrades.map((courseWithGrade) => {
            return `${courseWithGrade.course}: ${courseWithGrade.grade}`;
        }).join(", ");
        console.log(
            `
            Student: ${this.name},
            Department: ${this.department},
            Courses: ${courseDetails},
            Average Grade: ${this.#averageGrade},
            `
        );
    }
}

class StudentManagementSystem {
    constructor(){
        this.students = []; // Array to store students objects
    }

    addStudent(student){
        if(this.students.find((s) => s.id === student.id)){
            console.log("Student already exists");
            return;
        } else {
            this.students.push(student);
            console.log(`Student ${student.name} added successfully`);
        }
    }
    
    viewAllStudents(){
        if(this.students.length === 0){
            console.log("No students found");
            return;
        }else{
            console.log("All students:");
            console.log(
                this.students.forEach((student) => student.displayDetails())
                );
        }
    }
    updateStudentDetails(id, details){
        const student = this.students.find((s) => s.id === id);
        if(!student){
            console.log("Student not found");
            return;
        } else {
            student.updateDetails(details);
            console.log(`Student ${id} detail updated successfully`);
        }
    }

    deleteStudent(id){
        const studentIndex = this.students.findIndex((s) => s.id === id);
        if(studentIndex === -1){
            console.log("Student not found");
            return;
        } else {
            this.students.splice(studentIndex, 1);
            console.log(`Student ${id} deleted successfully`);
        }
    }
}

const system = new StudentManagementSystem();

// Create student objects
const student1 = new Student(1, "Bryan Okafor", "Computer Science", [{
    course: "Computer Architecture",
    grade: 65
},
{
    course: "Numerical Methods",
    grade: 40
},
{
    course: "Assembly Language",
    grade: 55
}]

, 300);
const student2 = new Student(2, "Jane Doe", "Computer Science", [{ course: "Mathematics", grade: 60 }, { course: "English", grade: 75 }], 300);

// Add students to the system
system.addStudent(student1);
system.addStudent(student2);


system.viewAllStudents();

// Update details
console.log("\nBefore update:");
console.log(student1.displayDetails());

console.log("\nUpdating student details...");
student1.updateDetails({ name: "Jonathan Doe", age: 19 });

console.log("\nAfter update:");
console.log(student1.displayDetails());
