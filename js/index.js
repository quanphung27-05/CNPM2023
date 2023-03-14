// Tạo canvas để vẽ hoa tuyết rơi
const canvas = document.createElement('canvas');
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.pointerEvents = 'none';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

// Tạo mảng lưu trữ các hoa tuyết
const snowflakes = [];

// Hàm tạo đối tượng hoa tuyết
function createSnowflake() {
  const snowflake = {
    x: Math.random() * canvas.width, // tọa độ x
    y: Math.random() * -50, // tọa độ y
    radius: Math.random() * 3 + 1, // bán kính
    speed: Math.random() * 3 + 1, // tốc độ di chuyển
    sides: Math.floor(Math.random() * 4) + 3, // số cạnh
    angle: 0 // góc xoay ban đầu
  };
  return snowflake;
}

// Hàm vẽ hoa tuyết
function drawSnowflake(snowflake) {
  const angle = (Math.PI * 2) / snowflake.sides;
  ctx.beginPath();
  for (let i = 0; i < snowflake.sides; i++) {
    const x = snowflake.x + snowflake.radius * Math.cos(snowflake.angle + angle * i);
    const y = snowflake.y + snowflake.radius * Math.sin(snowflake.angle + angle * i);
    ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.strokeStyle = 'violet';
  ctx.stroke();
}

// Hàm cập nhật vị trí của hoa tuyết
function updateSnowflake(snowflake) {
  snowflake.y += snowflake.speed;
  snowflake.angle += Math.PI / 90;
  if (snowflake.y > canvas.height) {
    snowflake.y = Math.random() * -50;
    snowflake.x = Math.random() * canvas.width;
  }
}

// Hàm vẽ và cập nhật hoa tuyết
function animateSnowflakes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < snowflakes.length; i++) {
    drawSnowflake(snowflakes[i]);
    updateSnowflake(snowflakes[i]);
  }
  requestAnimationFrame(animateSnowflakes);
}

// Khởi tạo mảng hoa tuyết
for (let i = 0; i < 50; i++) {
  snowflakes.push(createSnowflake());
}

// Bắt đầu vẽ hoa tuyết
animateSnowflakes();