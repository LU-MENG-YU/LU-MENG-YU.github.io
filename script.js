// script.js

// -------------- 星海背景 --------------
function startStarfield() {
    const starCanvas = document.getElementById("starfieldCanvas");
    if (!starCanvas) return; // 若沒有此 Canvas 就跳過
  
    // 先顯示星海 Canvas
    starCanvas.style.display = "block";
  
    const ctx = starCanvas.getContext("2d");
  
    let w = (starCanvas.width = window.innerWidth);
    let h = (starCanvas.height = window.innerHeight);
  
    const starCount = 200; 
    const stars = [];
  
    // 建立星星
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        radius: Math.random() * 1.5,
        speed: Math.random() * 0.5 + 0.2,
        color: "rgba(0, 236, 207," + (Math.random() * 0.5 + 0.5) + ")" 
      });
    }
  
    function drawStar(star) {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
      ctx.fillStyle = star.color;
      ctx.fill();
    }
  
    function animate() {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "rgba(10,15,31,0.2)";
      ctx.fillRect(0, 0, w, h);
  
      stars.forEach((star) => {
        drawStar(star);
        star.y += star.speed;
        star.x += (Math.random() - 0.5) * 0.3; 
        if (star.y > h) {
          star.y = 0;
          star.x = Math.random() * w;
        }
      });
  
      requestAnimationFrame(animate);
    }
  
    animate();
  
    // RWD
    window.addEventListener("resize", () => {
      w = starCanvas.width = window.innerWidth;
      h = starCanvas.height = window.innerHeight;
    });
  }
  
  // -------------- 代碼雨 --------------
  function startCodeRain() {
    const codeCanvas = document.getElementById("codeRainCanvas");
    if (!codeCanvas) return;
  
    // 先顯示代碼雨 Canvas
    codeCanvas.style.display = "block";
  
    const ctx = codeCanvas.getContext("2d");
  
    let w = (codeCanvas.width = window.innerWidth);
    let h = (codeCanvas.height = window.innerHeight);
  
    const letters = "0123456789ABCDEF";
    const fontSize = 16;
    const columns = Math.floor(w / fontSize);
    const drops = [];
  
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -50);
    }
  
    function draw() {
      // 用半透明色塊蓋過，製造雨的拖影
      ctx.fillStyle = "rgba(10, 15, 31, 0.4)";
      ctx.fillRect(0, 0, w, h);
  
      ctx.fillStyle = "#00ff00";
      ctx.font = fontSize + "px monospace";
  
      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillText(text, x, y);
  
        drops[i]++;
        if (y > h && Math.random() > 0.975) {
          drops[i] = 0;
        }
      }
      requestAnimationFrame(draw);
    }
  
    draw();
  
    // RWD
    window.addEventListener("resize", () => {
      w = codeCanvas.width = window.innerWidth;
      h = codeCanvas.height = window.innerHeight;
    });
  }
  
  // -------------- 在首頁啟動星海 --------------
  document.addEventListener("DOMContentLoaded", () => {
    // 如果是 index.html，就執行星海
    const starCanvas = document.getElementById("starfieldCanvas");
    if (starCanvas) {
      startStarfield();
    }
  });
  