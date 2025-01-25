# Student Management System

This project is a simple student management system implemented in JavaScript. It demonstrates the principles of object-oriented programming, including encapsulation, inheritance, polymorphism, and abstraction.

## Features

- Add or update student grades
- Update student details
- Calculate average grade for a student

## Classes

### Student

The `Student` class represents a student with the following properties:

- `id`: The student's ID
- `name`: The student's name
- `department`: The student's department
- `courseWithGrades`: An array of courses with their respective grades
- `level`: The student's level
- `#averageGrade`: The student's average grade (private field)

#### Methods

- `constructor(id, name, department, courseWithGrades, level)`: Initializes a new student object.
- `addOrUpdateGrade(course, grade)`: Adds or updates the grade for a specific course.
- `updateDetails({ name, department, level })`: Updates the student's details.
- `calculateAverageGrade()`: Calculates and returns the student's average grade.
