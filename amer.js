let steudent=[
    {
        namex:"amer",
       age:"24",
        idnumper:"2000275711"
    }
    ];
    let coourses = [
        {
            name: "node js",
            duraition: "60",
            dataofstring: "15-4-2026"
        },
        {
            name: "c++",
            duraition: "70",
            dataofstring: "15-4-2025"
        },
        {
            name: "js",
            duraition: "80",
            dataofstring: "15-4-2024"
        }
    ];
    
        function search(name1) {
            let coursefind = coourses.find(c => c.name === name1);
            if (coursefind){
              console.log(`The course name is ${coursefind.name}, duration is ${coursefind.duraition}, and date is ${coursefind.dataofstring}`);
            }
             else{
            console.log("Course not found");}
            
        }
            
    
    
    
    function addcourse(namecourse,duraitioncourse,dataofstringcourse){
    coourses.push({
        name:namecourse,
        duraition:duraitioncourse,
        dataofstring:dataofstringcourse,
    
    })
    }
  
    
    
    function ask(name2,course1){
        console.log(`hellow ${name2} the course ${course1} has been added successfully`)
    }
    //for test 
    //search("c++")
    //addcourse("php","15","15-2-2025");
    //console.log(coourses);
    ask("khaled","c++")