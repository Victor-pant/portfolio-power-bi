function scrollToPortfolio() {
    const target = document.getElementById("portfolio");

    if (target) {
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    const tabButtons = document.querySelectorAll(".tab-btn");
    const projectCards = document.querySelectorAll(".projeto");
    const emptyState = document.querySelector(".empty-state");

    navLinks.forEach((anchor) => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    function filterProjects(selectedCategory) {
        let visibleProjects = 0;

        projectCards.forEach((card) => {
            const categories = card.dataset.categories ? card.dataset.categories.split(" ") : [];
            const shouldShow = selectedCategory === "todos" || categories.includes(selectedCategory);

            card.classList.toggle("hidden", !shouldShow);

            if (shouldShow) {
                visibleProjects += 1;
            }
        });

        if (emptyState) {
            emptyState.hidden = visibleProjects > 0;
        }
    }

    tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const selectedCategory = button.dataset.filter;

            tabButtons.forEach((item) => {
                item.classList.remove("active");
                item.setAttribute("aria-selected", "false");
            });

            button.classList.add("active");
            button.setAttribute("aria-selected", "true");

            filterProjects(selectedCategory);
        });
    });
});
