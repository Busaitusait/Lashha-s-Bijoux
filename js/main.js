function scrollLeft(button) {
    const container = button.nextElementSibling; // The container div
    container.scrollBy({
        left: -container.clientWidth / 2, // Scroll by half the width of the container
        behavior: 'smooth'
    });
}

function scrollRight(button) {
    const container = button.previousElementSibling; // The container div
    container.scrollBy({
        left: container.clientWidth / 2, // Scroll by half the width of the container
        behavior: 'smooth'
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const divs = document.querySelectorAll('.image-div');

    divs.forEach(div => {
        const scrollAmount = div.clientWidth / 2; // Scroll amount
        const scrollInterval = 3000; // Auto-scroll interval in milliseconds

        // Auto-scrolling function
        function startAutoScroll() {
            setInterval(() => {
                if (div.scrollLeft + div.clientWidth >= div.scrollWidth) {
                    div.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    div.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }
            }, scrollInterval);
        }

        // Start auto-scrolling on page load
        startAutoScroll();
    });

})


document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.getElementById("e");
  const scrollLeftButton = document.getElementById("c");
  const scrollRightButton = document.getElementById("g");
  const scrollAmount = 100; // Adjust as needed
  const autoScrollInterval = 3000; // Time in ms between scrolls

  // Function to scroll right
  function scrollRight() {
    gallery.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  }

  // Scroll buttons functionality
  scrollLeftButton.addEventListener("click", () => {
    gallery.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  });

  scrollRightButton.addEventListener("click", () => {
    scrollRight();
  });

  // Auto-scroll functionality
  setInterval(() => {
    scrollRight();
  }, autoScrollInterval);
});