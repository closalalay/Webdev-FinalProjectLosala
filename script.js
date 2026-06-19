function showSection(id) {
    const sections = document.querySelectorAll(".content");

    sections.forEach(section => {
        section.classList.remove("active");
    });

    const selected = document.getElementById(id);

    if (selected) {
        selected.classList.add("active");
    }
}
