document.querySelectorAll("td.name").forEach((td) => {
  const release = td.querySelector("a[title]");
  const abstract = td.nextElementSibling;
  if (!release || !abstract) return;

  const title = release.getAttribute("title");
  const separator = title.indexOf("/");
  if (separator <= 0) return;

  const author = title.slice(0, separator);
  const link = document.createElement("a");
  link.href = `https://metacpan.org/author/${encodeURIComponent(author)}`;
  link.textContent = author;
  abstract.prepend(link, " - ");
});
