let i = 0;
let speed = 10;
let artContent = document.getElementById('init-art').innerText;
function artTypeWriter() {
  if (i < artContent.length) {
    document.getElementById('init-art').innerText += artContent.charAt(i);
    i++;
    console.log(i);
    setTimeout(artTypeWriter, speed)
  }
}
document.getElementById('init-art').innerText = "";
artTypeWriter();