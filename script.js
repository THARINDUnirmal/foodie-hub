function openDialer(phoneNumber) {
  window.location.href = "tel:" + phoneNumber;
}// JavaScript Document

function openEmailApp() {
  window.location.href = "mailto:tharindunirmal1111@gmail.com?subject=Hello&body=Type your message here";
}

function openWhatsApp(number) {
  const url = "https://wa.me/" + number;
  window.open(url, '_blank');
}