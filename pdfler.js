const archiveList = document.querySelector("#archive-list");
const archiveCount = document.querySelector("#archive-count");
const searchInput = document.querySelector("#pdf-search");
const yearFilter = document.querySelector("#pdf-year-filter");
const examFilter = document.querySelector("#pdf-exam-filter");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

[...new Set(pdfArchive.map((item) => item.year))]
  .sort((a, b) => b - a)
  .forEach((pdfYear) => {
    const option = document.createElement("option");
    option.value = pdfYear;
    option.textContent = pdfYear;
    yearFilter.appendChild(option);
  });

function getFilteredArchive() {
  const search = searchInput.value.trim().toLocaleLowerCase("tr");
  const selectedYear = yearFilter.value;
  const selectedExam = examFilter.value;

  return pdfArchive.filter((item) => {
    const text = `${item.year} ${item.exam} ${item.language} ${item.title} ${item.description}`.toLocaleLowerCase("tr");
    return (!search || text.includes(search)) && (!selectedYear || String(item.year) === selectedYear) && (!selectedExam || item.exam === selectedExam);
  });
}

function renderArchive() {
  const filtered = getFilteredArchive();
  const grouped = filtered.reduce((groups, item) => {
    groups[item.year] ||= [];
    groups[item.year].push(item);
    return groups;
  }, {});

  archiveList.innerHTML = "";
  Object.keys(grouped).sort((a, b) => b - a).forEach((pdfYear) => {
    const section = document.createElement("section");
    section.className = "archive-year";
    section.innerHTML = `
      <h2>${pdfYear}</h2>
      <div class="pdf-card-grid">
        ${grouped[pdfYear].map((item) => `
          <article class="pdf-card">
            <div>
              <p class="eyebrow">${item.exam}${item.language ? ` • ${item.language}` : ""}</p>
              <h3>${item.title}</h3>
              <p>${item.description}</p>
            </div>
            <div class="pdf-actions">
              <a href="${item.url}" target="_blank" rel="noopener">PDF aç</a>
              <a href="${item.url}" download>İndir</a>
            </div>
          </article>
        `).join("")}
      </div>
    `;
    archiveList.appendChild(section);
  });

  archiveCount.textContent = `${filtered.length} PDF gösteriliyor`;
}

[searchInput, yearFilter, examFilter].forEach((element) => element.addEventListener("input", renderArchive));
renderArchive();
