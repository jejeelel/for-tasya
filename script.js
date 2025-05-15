const iya = document.getElementById("iya");
const tidak = document.getElementById("tidak");
const jawaban = document.getElementById("jawaban");

// Saat klik "Iya"
iya.onclick = () => {
  jawaban.textContent = "Yay! Mulai sekarang kita jadian yaa 😍";
};

// Saat klik "Nggak"
tidak.onmouseover = () => {
  const x = Math.random() * window.innerWidth * 0.8;
  const y = Math.random() * window.innerHeight * 0.8;
  tidak.style.position = "absolute";
  tidak.style.left = x + "px";
  tidak.style.top = y + "px";
};
tidak.onclick = () => {
  alert("Yakin nggak mau? 😢 Coba pikir lagi ya...");
};
