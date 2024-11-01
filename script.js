const heading = document.querySelector("#heading");
const endOf2024 = dayjs("2024-01-31");
const now = dayjs();

if (now.isAfter(endOf2024)) {
  heading.textContent = "Je.";
} else {
  heading.textContent = "Není.";
}