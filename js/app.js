request = superagent;
countries = "https://restcountries.eu/rest/v2/all";

document.querySelectorAll(".country").forEach(function (button) {
  button.addEventListener('click', function (event) { 
    var languages = event.target.value;
    console.log(languages)
    var count = 0;
    
    request.get(countries).then(function (content) {
        const countries = content.body;
        var html = "";
        countries.forEach(function (country) {
          console.log(country)         
          if (languages === country.languages[0].iso639_1) {
            count++;
            html += '<tr>';
              html += '<td>'+ country.name+'</td>'
              html +='<td>'+ country.latlng[0]+'</td>';
              html +='<td>'+country.latlng[1]+'</td>';
              html +='<td><img src="'+ country.flag+'" class="country-flag" /></td>';
            html += ' </tr>';
          }
          if (languages == "all") {
            count++;
            html += "";
              html += '<tr>';
                html += '<td>'+ country.name +'</td>'
                html += '<td>'+ country.latlng[0]+'</td>'
                html += '<td>'+ country.latlng[1]+'</td>'
                html +='<td><img src="'+country.flag +'" class="country-flag" /></td>';
              html += ' </tr>';
          }
        });
          document.querySelector("#country-number").textContent = count;
         document.querySelector("table tbody").innerHTML = html;
      })
  });
});
