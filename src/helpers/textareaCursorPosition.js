export default function getPosition(textarea) {
  let start = textarea.selectionStart;
  let end = textarea.selectionEnd;
  let tempElement = createTempElement(textarea);
  let range = document.createRange();

  range.setStart(tempElement.firstChild, start);
  range.setEnd(tempElement.firstChild, end);

  let rect = range.getBoundingClientRect();
  document.body.removeChild(tempElement);
  textarea.selectionStart = start;
  textarea.selectionEnd = end;
  textarea.focus();

  return {
    x: rect.left - textarea.scrollLeft + 20,
    y: rect.top - textarea.scrollTop + 10,
  };
}

function createTempElement(textarea) {
  let div = document.createElement("div");
  let style = getComputedStyle(textarea);

  div.textContent = textarea.value;

  div.style.fontSize = style.fontSize;
  div.style.whiteSpace = style.whiteSpace;
  div.style.overflow = "auto";
  div.style.width = textarea.offsetWidth + "px";
  div.style.height = textarea.offsetHeight + "px";
  div.style.position = "absolute";
  div.style.left = textarea.offsetLeft + "px";
  div.style.top = textarea.offsetTop + "px";

  document.body.appendChild(div);
  return div;
}
