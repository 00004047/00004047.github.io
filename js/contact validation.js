
function formSubmit(){
        //Validation function
        //We create variables to the elements in the form 
    var name = document.contact__form.email.value;
    var email = document.contact__form.company.value;
    var phone = document.contact__form.subject.value;    
    var message = document.contact__form.message.value;
        //the pattern in reg exp of email to validate
    var regEmail =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; 
        // if name null or empty the message will be delivered
    if (name==null|| name == ""){
            window.alert("Please do not leave name empty");
            //return false;
       }
    if (message==null|| message == ""){
            window.alert("Please do not leave message empty");
            return false;
        }
        //there is method test() that matches reg exp patterns with input and 
        //returns True if the input matched to the pattern
    if(regEmail.test(email)){
            return true;
        }
    else {
        window.alert("Please enter valid email address"); 
    }
}
// =============================
function find(){
      function Country(countryName, cityName, adress, phone){
          this.coN = countryName;
          this.ciN = cityName;
          this.a = adress;
          this.p = phone;
      }

      var countries = [];

      // arr.push(new Person("Voris", "Fayzullaev", "Vfayzullaev", "bla"));
      // arr.push(new Person("mike","mike","mike", "blabla"));


    countries.push(new Country("France", "Paris", "31 RUE CAMBON 75001,Paris", "+33 1 44 50 66 00"));
    countries.push(new Country("France", "Paris", "17 PLACE VENDOME 75001,Paris", "+33 1 43 16 30 60"));
    countries.push(new Country("USA", "New York", "5 EAST 57TH STREET 10022, NEW YORK", "+1 212-355-5050"));
    countries.push(new Country("USA", "New York", "754 5TH AVENUE 10019, NEW YORK, NEW YORK", "+1 800-558-1855"));
    countries.push(new Country("UAE", "Dubai", "FASHION AVENUE - GROUND FLOOR THE DUBAI MALL DOWNTOWN 125187, DUBAI", "+971 4382 71 06"));
    countries.push(new Country("UAE", "Dubai", "DUBAI INTERNATIONAL AIRPORT, CONCOURSE A 54345, DUBAI", "+971 4382 26 39"));
    countries.push(new Country("Uzbekistan", "Tashkent", "Qoratosh str. Smarqand Darvoza 100021,Tashkent", "+998 71 242 90 80"));
    countries.push(new Country("Turkey", "Istanbul", "NIŞANTAŞI GROUND FLOOR ABDI IPEKCI 34367, ISTANBUL", "+90 212 368 63 00"));
    countries.push(new Country("Turkey", "Ankara", "KENTPARK AVM. ESKIŞEHIR YOLU 164/97 YENIMAHALLE, ANKARA", "+90 213 368 97 00"));
    countries.push(new Country("Uzbekistan", "Tashkent", "Qoratosh str. Smarqand Darvoza 100021,Tashkent", "+998 71 242 90 80"));
    countries.push(new Country("Uzbekistan", "Tashkent", "Qoratosh str. Smarqand Darvoza 100021,Tashkent", "+998 71 242 90 80"));
    countries.push(new Country("Uzbekistan", "Tashkent", "Qoratosh str. Smarqand Darvoza 100021,Tashkent", "+998 71 242 90 80"));
    countries.push(new Country("Uzbekistan", "Tashkent", "Qoratosh str. Smarqand Darvoza 100021,Tashkent", "+998 71 242 90 80"));
    countries.push(new Country("Uzbekistan", "Tashkent", "Qoratosh str. Smarqand Darvoza 100021,Tashkent", "+998 71 242 90 80"));
    countries.push(new Country("Uzbekistan", "Tashkent", "Qoratosh str. Smarqand Darvoza 100021,Tashkent", "+998 71 242 90 80"));





      
      var table = document.getElementById('table');
      
      for (var i = 0; i < countries.length; i++) {
        
          var newRow = table.insertRow(i + 1);
          
          var cel1 = newRow.insertCell(0);
          var cel2 = newRow.insertCell(1);
          var cel3 = newRow.insertCell(2);
          var cel4 = newRow.insertCell(3);
          
          cel1.innerHTML = countries[i].coN;
          cel2.innerHTML = countries[i].ciN;
          cel3.innerHTML = countries[i].a;
          cel4.innerHTML = countries[i].p;            
      

      }

      
}