document.addEventListener("change", displayAge);

function getAge(){  
  //Capture  vales from Date Picker 
  const birthdayDate = document.getElementById("dob").value;
  const birthYearArr= birthdayDate.split("-");
  const birthYear = Number(birthYearArr[0]);
  const birthMonth = Number(birthYearArr[1]);
  const birthDate = Number(birthYearArr[2]);

  // Cuurent Date
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1;
  const currentDate = now.getDate(); 

 return {birthYear, birthMonth, birthDate, currentYear, currentMonth, currentDate};   
}

function calcAge(){ 
  // Storing the date values from getAge()
    const dateValues = getAge(); 
   
    const calAgeYear =  dateValues.currentYear - dateValues.birthYear; 
    const calAgeMonth = Math.abs(dateValues.currentMonth - dateValues.birthMonth); 
    const calAgeDays =  dateValues.currentDate - dateValues.birthDate; 

    return {calAgeYear, calAgeMonth, calAgeDays};
    
}

function displayAge(){
  const calculatedDates = calcAge();
  document.getElementById("years").innerText = calculatedDates.calAgeYear;
  document.getElementById("months").innerText = calculatedDates.calAgeMonth;
  document.getElementById("days").innerText = calculatedDates.calAgeDays; 
  document.querySelector(".error").style.display = "block";
}

