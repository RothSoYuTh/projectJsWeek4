//Data Base
    const Student  = {
        Class_01 : [
            {name : "Anha", age : 20, course : ["javascript", "C++", "database"]},
            {name : "Bnha", age : 20, course : ["javascript","database", "C#"]},
            {name : "Cnha", age : 20, course : ["javascript","database", "webDesign"]},
            {name : "Dnha", age : 20, course : ["javascript","database", "C"]}
        ],
        Class_02 : [
            {name : "Panha", age : 20, course : ["javascript", "C", "database"]},
            {name : "Enha", age : 20, course : ["javascript","database", "C#"]},
            {name : "Fnha", age : 20, course : ["javascript","database", "webDesign"]},
            {name : "Cnha", age : 20, course : ["javascript","database", "C++"]}
        ]
    };
   
//Get data - display all students in classes
    const displayData = (room) => {
        const students = Student[room];
        if (students && students.length >0){
            console.log(`\n=== Students in ${room} ===`);
            for (let i = 0; i < students.length; i++){
            console.log(`${i+1}. Name: ${students[i].name}. Age: ${students[i].age}. Course: ${students[i].course}`);
        }
        console.log(`Total Students: ${students.length}\n`)
        } else if (students && students.length === 0){
            console.log(`${room} exists but has no student.`);
        }
    }

    //  displayData("Class_01");
    //  displayData("Class_02");

//Post data - insert new students or add to existing class
    const insertData = (className, studentData) => {
        if(!Student[className]){
            Student[className] = [];
        }
        Student[className].push(...studentData);
    }
//New class
    const Class_03 =  [
            {name : "Panha", age : 20, course : ["javascript", "C++", "database"]},
            {name : "Banha", age : 20, course : ["javascript","database", "C#"]},
            {name : "Aanha", age : 20, course : ["javascript","database", "webDesign"]},
            {name : "Canha", age : 20, course : ["javascript","database", "C"]}
        ];

//New student
    let newStudent = [{name : "Kanha", age : 20, course : ["javascript", "C++", "database", "C"]}];

 //insert new class
    insertData("Class_03", Class_03);
    //displayData("Class_03");

 //insert new student in exist classs
    insertData("Class_03",newStudent);
    //displayData("Class_03");

 //insert new course
    Class_03[1].course.push("Figma");
    displayData("Class_03");


//Delete 
    const deleteData = (className,studentData) => {
        if(!Student[className]){
            console.log("No data to remove.");
        }
        Student[className].pop(studentData);
        console.log('Succeed!');
    } 

//Delete one student  
    deleteData("Class_03",Student);
    displayData("Class_03");


//delete a whole class
    const deleteWholeClass = (className) => {
        if(Student[className]){
            delete Student[className];
            console.log("Delete successfully.")
        }else {
            console.log("No class to delete.")
        }
    }
 //Delete one class
    deleteWholeClass("Class_03");


//Display all data
    displayData("Class_03");
    displayData("Class_01");
    displayData("Class_02");


  



      


      