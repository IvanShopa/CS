document.addEventListener("DOMContentLoaded", function() {
  let date1 = new Date();
  let date2 = new Date(2025, 8, 1);
  let date3 = new Date(2025, 11, 31);

  if (date1 >= date2 && date1 <= date3) {
    let date4 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
    let date5 = ((date4 - date2 + 86400000) / 86400000);
    let week = Math.ceil(date5 / 7);

    let text = "Тиждень (Тж): ";

    if (week % 2 !== 0) {
      text += week + "-й, непарний, /.";
    }
    else {
      text += week + "-й, парний, *.";
    }

    document.getElementById("week").innerHTML = text;
  }
});