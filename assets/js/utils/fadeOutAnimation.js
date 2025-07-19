const fadeOutAnimation = () => {
  const body = document.body;
  const links = document.querySelectorAll("a");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const href = link.getAttribute("href");
      body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = href;
      }, 400);
    });
  });
};

export default fadeOutAnimation;
