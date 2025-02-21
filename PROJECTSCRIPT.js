document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".box");

    boxes.forEach(box => {
        const selection = box.querySelector(".selection"); // Get inner content
        selection.style.display = "none"; // Hide initially

        box.addEventListener("click", function () {
            const isExpanded = this.classList.contains("expanded");

            // Collapse all other boxes before expanding a new one
            boxes.forEach(b => {
                b.classList.remove("expanded");
                b.querySelector(".selection").style.display = "none";
            });

            // Toggle expansion for the clicked box
            if (!isExpanded) {
                this.classList.add("expanded");
                selection.style.display = "block"; // Show inner content
            }
        });
    });

    // Click outside to collapse all
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".box")) {
            boxes.forEach(box => {
                box.classList.remove("expanded");
                box.querySelector(".selection").style.display = "none";
            });
        }
    });
});