let currentPage = 1;
const totalPages = 5; // You can set this dynamically based on your data

function renderPageNumbers() {
  const pageNumbersElement = document.getElementById('page-numbers');
  pageNumbersElement.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.onclick = () => goToPage(i);
    if (i === currentPage) {
      button.style.fontWeight = 'bold';
    }
    pageNumbersElement.appendChild(button);
  }
}

function goToPage(pageNumber) {
  currentPage = pageNumber;
  renderPageNumbers();
}

function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    renderPageNumbers();
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    renderPageNumbers();
  }
}

// Initial rendering
renderPageNumbers();
