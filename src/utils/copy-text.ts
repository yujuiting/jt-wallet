export default function copyText(text: string) {
  const elem = document.createElement("input");
  elem.value = text;
  document.body.appendChild(elem);
  elem.select();
  elem.setSelectionRange(0, 99999);
  document.execCommand("copy");
  elem.remove();
}
