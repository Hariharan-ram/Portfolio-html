const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

var downloadBtn = document.getElementById("download");
downloadBtn.addEventListener("click", function() {
    var link = document.createElement("a");
    link.href = "Hariharan_Ram_CV.pdf"; // Replace with the path to your CV file
    link.download = "Hariharan_Ram_CV.pdf";
    link.click();
});