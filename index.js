let input = document.getElementById('theday');
flatpickr("#theday", {
  dateFormat: "Y-m-d",  
});

function calcEdd() {
   let input = document.getElementById('theday');
  if (input.value !== "") {
    let input = document.getElementById('theday');
    let d = new Date(input.value);
    // Gestational age calculation
    let firstdate = new Date(d.getFullYear(), 0, 0);
    let diff = d - firstdate;
    const oneday = 1000 * 60 * 60 * 24;
    const daynumber = Math.floor(diff / oneday);

    let presentdate = new Date();
    let present = presentdate - firstdate;
    let presentnumber = Math.floor(present / oneday);

    let gestationalage = presentnumber - daynumber;
    let actual = gestationalage / 7;
    let gaNumber = Math.floor(actual);
    let remainder = gestationalage % 7;

    // Estimated delivery date calculation
    d.setMonth(d.getMonth() + 9);
    d.setDate(d.getDate() + 7);
    let alter = d.toISOString().split('T')[0];

    // Display result
    let result = document.createElement("p");
    result.textContent = `Your estimated delivery Date is ${alter} with an expected gestational age of ${gaNumber} weeks and ${remainder} days. Note that the format of this result is Year/Month/day.`;
    result.setAttribute("id", "result");
    
    let main = document.getElementById("main");
    main.appendChild(result);

    // Highlight the estimated delivery date
    let word = `<span style="font-weight:800;padding:0px 10px;font-size:1.5rem;">${alter}</span>`;
    let newsentence = result.textContent.replace(alter, word);
    result.innerHTML = newsentence;
  } else {
    alert('Input your LMP');
  }
}

function popup() {
  let secondbtn = document.getElementById('secondbtn');
  let overlay = document.getElementById('overlay');
  overlay.classList.toggle('active');
}
