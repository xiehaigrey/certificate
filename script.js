function verifyCertificate() {
    const input = document.getElementById("certificateNumber").value;
    if (input === "M102009195") {
        window.location.href = "certificate.html";
    } else {
        document.getElementById("error-message").classList.remove("hidden");
    }
}
