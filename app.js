function generatePass() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  if (!name || !email || !phone) {
    alert("Please fill all fields!");
    return;
  }

  // Generate unique pass ID
  const passId = "PASS-" + Math.floor(Math.random() * 1000000);

  // Display pass details
  document.getElementById("dispName").innerText = name;
  document.getElementById("passId").innerText = passId;
  document.getElementById("passSection").style.display = "block";

  // Generate QR code
  const qrCanvas = document.getElementById("qrcode");
  QRCode.toCanvas(qrCanvas, passId, function (error) {
    if (error) console.error(error);
  });
}
