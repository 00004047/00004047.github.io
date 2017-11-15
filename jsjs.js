function find(){
      function Country(countryName, cityName, adress, phone){
          this.coN = countryName;
          this.ciN = cityName;
          this.a = adress;
          this.p = phone;
      }

      var countries = [];
    countries.push(new Country("Alabama", "Tuscaloosa", "1800 McFarland Blvd East  Ste 100  Tuscaloosa AL 35404", "+33 1 44 50 66 00"));
    countries.push(new Country("Alabama", "Tuscaloosa", "6200 Grand River Blvd  EAST #542  Leeds AL 35094", "+33 1 43 16 30 60"));
    countries.push(new Country("USA", "New York", "5 EAST 57TH STREET 10022, NEW YORK", "+1 212-355-5050"));
    countries.push(new Country("USA", "New York", "11201 Bass Pro Prkwy Suite #E119  Little Rock AR 72210", "+1 800-558-1855"));
    countries.push(new Country("Uzbekistan", "Tashkent", "Qoratosh str. Smarqand Darvoza 100021,Tashkent", "+998 71 242 90 80"));
    countries.push(new Country("Turkey", "Istanbul", "NIŞANTAŞI GROUND FLOOR ABDI IPEKCI 34367, ISTANBUL", "+90 212 368 63 00"));      
      
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
// ====================================================
      <script> 
       $('#addSmth').on('click', function(){ 
        $('.items').append("<p>" + $('#inputField').val() + "</p>"); 
       }); 
      </script> 
            <script> 
       $('#addSmth1').on('click', function(){ 
        $('.items').append("<p>" + $('#inputField1').val() + "</p>");
       }); 
      </script>