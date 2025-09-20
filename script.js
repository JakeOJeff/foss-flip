const canvas = document.getElementById("memeCanvas");
const ctx = canvas.getContext("2d");

const templates = {
  doge: "https://i.imgflip.com/4t0m5.jpg",
  drake: "https://i.imgflip.com/30b1gx.jpg",
  distracted: "https://i.imgflip.com/1ur9b0.jpg",
};

document.getElementById("generateBtn").addEventListener("click", () => {
  const template = document.getElementById("template").value;
  const topText = document.getElementById("topText").value;
  const bottomText = document.getElementById("bottomText").value;

  const img = new Image();
  img.crossOrigin = "anonymous"; 
  img.src = templates[template];

  img.onload = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.textAlign = "center";
    ctx.lineWidth = 4;
    ctx.font = "40px Impact";

    ctx.fillText(topText.toUpperCase(), canvas.width / 2, 50);
    ctx.strokeText(topText.toUpperCase(), canvas.width / 2, 50);

    ctx.fillText(bottomText.toUpperCase(), canvas.width / 2, canvas.height - 20);
    ctx.strokeText(bottomText.toUpperCase(), canvas.width / 2, canvas.height - 20);
  };
});
