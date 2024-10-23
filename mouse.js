const magnifier = document.getElementById("magnifier");
const img = document.getElementById("magnify-img");

img.addEventListener("mousemove", (e) => {
    const { left, top, width, height } = img.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const bgPosX = (x / width) * 100;
    const bgPosY = (y / height) * 100;

    magnifier.style.backgroundImage = `url(${img.src})`;
    magnifier.style.backgroundSize = `${width * 2}px ${height * 2}px`; // Adjust magnification level
    magnifier.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`;
    magnifier.style.left = `${e.clientX - 50}px`; // Center the magnifier
    magnifier.style.top = `${e.clientY - 50}px`;
    magnifier.style.visibility = "visible";
});

img.addEventListener("mouseleave", () => {
    magnifier.style.visibility = "hidden";
});
