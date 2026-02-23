// Handles PDF selection on the CBSE page and renders clickable links.
document.addEventListener('DOMContentLoaded', () => {
  const uploadInput = document.getElementById('pdfUpload');
  const pdfList = document.getElementById('pdfList');

  if (!uploadInput || !pdfList) {
    return;
  }

  uploadInput.addEventListener('change', (event) => {
    const files = Array.from(event.target.files || []).filter(
      (file) => file.type === 'application/pdf'
    );

    pdfList.innerHTML = '';

    if (files.length === 0) {
      pdfList.innerHTML = '<li class="muted">No PDFs uploaded yet.</li>';
      return;
    }

    files.forEach((file) => {
      const fileUrl = URL.createObjectURL(file);
      const li = document.createElement('li');
      const link = document.createElement('a');

      link.href = fileUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = file.name;

      li.appendChild(link);
      pdfList.appendChild(li);
    });
  });
});
