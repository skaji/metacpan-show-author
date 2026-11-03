/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 Shoichi Kaji
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
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
