 function generateTable() {
      let start = document.getElementById('startVal').value;
      let end = document.getElementById('endVal').value;
      start = parseInt(start);
      end = parseInt(end);
      if (isNaN(start) || isNaN(end) || start < 2 || start > 10 || end < 2 || end > 10) {
        alert("Please enter numbers between 2 and 10");
        return;
      }
      let tableHTML = "<table>";
      for (let row = 1; row <= start; row++) {
        tableHTML += "<tr>";
        for (let col = 1; col <= end; col++) {
          tableHTML += "<td>" + (row * col) + "</td>";
        }
        tableHTML += "</tr>";
      }
      tableHTML += "</table>";
      document.getElementById('output').innerHTML = tableHTML;
    }