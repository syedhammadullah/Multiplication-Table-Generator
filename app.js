function generateTable() {
  const numberInput = document.getElementById("numberInput");
  const tableContainer = document.getElementById("tableContainer");
  const number = parseInt(numberInput.value);

  // Clear any existing table
  tableContainer.innerHTML = "";

  if (number) {
    const table = document.createElement("table");

    // Create header row
    const headerRow = document.createElement("tr");
    const headerCell1 = document.createElement("th");
    headerCell1.textContent = "X";
    const headerCell2 = document.createElement("th");
    headerCell2.textContent = number;
    headerRow.appendChild(headerCell1);
    headerRow.appendChild(headerCell2);
    table.appendChild(headerRow);

    // Generate table rows
    for (let i = 0; i <= 10; i++) {
      const row = document.createElement("tr");
      const cell1 = document.createElement("td");
      cell1.textContent = i;
      const cell2 = document.createElement("td");
      cell2.textContent = number * i;
      row.appendChild(cell1);
      row.appendChild(cell2);
      table.appendChild(row);
    }

    tableContainer.appendChild(table);
  } else {
    alert("Please enter a number!");
  }
}
