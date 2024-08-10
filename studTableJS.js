function checkForm(){
    if (document.StudentInfo.FirstName.value==""){
        alert("First Name can't Null!");
    }
    else if(document.StudentInfo.LastName.value==""){
        alert("Last Name can't Null!");
    }
    else if(document.StudentInfo.NIC.value==""){
        alert("NIC can't Null!");
    }
    else if(document.StudentInfo.Age.value==""){
        alert("Age can't Null!");
    }
    else if(document.StudentInfo.School.value==""){
        alert("School can't Null!");
    }
    else if(document.StudentInfo.ContactNo.value==""){
        alert("ContactNo can't Null!");
    }
    else if(document.StudentInfo.Address.value==""){
        alert("Address can't Null!");
    }
    else if(document.StudentInfo.Gender.value==""){
        alert("Gender can't Null!");
    }
    /*else if(document.StudentInfo.FirstName.value==""||document.StudentInfo.LastName.value==""||document.StudentInfo.NIC.value==""||document.StudentInfo.Age.value==""||document.StudentInfo.School.value==""||document.StudentInfo.ContactNo.value==""||document.StudentInfo.Address.value=="" || document.StudentInfo.Gender.value==""){
        alert("Please fill empty information!");
    }*/
    
}