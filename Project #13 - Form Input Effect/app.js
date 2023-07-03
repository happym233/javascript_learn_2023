const labels = document.querySelectorAll(".form-control label")

labels.forEach((label) => { 
    label.innerHTML = label.innerText.split("").map((l, i) => 
        `<span style="transition-delay: ${i * 50}ms">${l}</span>`
    ).join("")
});