const sections = document.querySelectorAll<HTMLElement>("main section[id]");

for (const button of document.querySelectorAll<HTMLButtonElement>("button[data-show]")) {
  button.addEventListener("click", () => {
    for (const section of sections) {
      section.hidden = section.id !== button.dataset.show;
    }
  });
}
