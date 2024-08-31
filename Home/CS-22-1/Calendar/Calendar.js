document.addEventListener("DOMContentLoaded", function() {
  let Date1 = new Date();
  let Date2 = new Date(2024, 8, 2);
  let Date3 = new Date(2024, 11, 31);

  let resultText = "<span style='color:#03fa6e;'>Тиждень: </span>";

  if (Date1 >= Date2 && Date1 <= Date3) {
    let Date4 = new Date(Date1.getFullYear(), Date1.getMonth(), Date1.getDate());
    let Date5 = ((Date4 - Date2 + 86400000) / 86400000);
    let Date6 = Math.ceil(Date5 / 7);

    if (Date6 % 2 !== 0) {
      resultText += Date6 + "-й, непарний, /.";
    }
    else {
      resultText += Date6 + "-й, парний. *.";
    }
  }
  else {
    resultText += "—";
  }
  document.getElementById("weekResult").innerHTML = resultText;
});
