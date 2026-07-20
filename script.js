const whatsappNumber = "447944442601";
const message = "Hello, mujhe CHAIBAT ka official download link aur manual id create karne help chahiye.";
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

document.querySelectorAll(".whatsapp-link").forEach(link => {
  link.href = whatsappUrl;
  link.target = "_blank";
});

document.querySelectorAll(".whatsapp-link").forEach(link => {
  link.addEventListener("click", () => {
    console.log("WhatsApp CTA clicked");
  });
});
