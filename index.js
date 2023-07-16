const contentLetterSrart_actived = "Quà của An" //Lời mở đầu cho bức thư
const mainContentLetter = "Chúc Thảo sinh nhật vui vẻ, tuổi mới xinh lại thêm xinh, duyên lại càng thêm duyên và yêu đời nhé!" //Nội dung của bức thư

// Gắn 1 đường link ảnh bất kì
let imgStart = document.querySelector(".myAI"); //Hình ảnh xuất hiện trong lời mở đầu của bức thư
imgStart.src = "./img/cute-young-boy-kid-wearing-vest-and-hat-free-png.png";

// Gắn 1 link ảnh bất kì
let imgLetter = document.querySelector(".img");
imgLetter.src = "./img/b4bbdb54b7152338d7143cb444a77f09.png"; //Hình ảnh xuất hiện trong nội dung của bức thư sau khi bức thư được viết ra hết

const splitContentLetterSrart_actived = contentLetterSrart_actived.split("");

let isContentLetterAnimated = false; // Biến đánh dấu xem hiệu ứng gõ chữ của mở đầu bức thư đã hoàn thành hay chưa

document.querySelector(".sticker").addEventListener("click", function () { 
    document.querySelector(".contentLetter").innerHTML = "";
    document.querySelector(".startLetter").classList.add("active");
    setTimeout(() => {
        splitContentLetterSrart_actived.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".contentLetter").innerHTML += val;
                if (index == contentLetterSrart_actived.length - 1) {
                    setTimeout(() => {
                        document.querySelector(".recieve").setAttribute("style", "opacity: 1; transition: .5s") 
                        isContentLetterAnimated = true; // Đánh dấu hiệu ứng đã hoàn thành
                    }, 1000);
                }
            }, 50 * index);
        });
    }, 1000);
});

document.querySelector(".recieve").addEventListener("click", () => {
    // Kiểm tra nếu hiệu ứng gõ chữ của mở đầu bức thư chưa hoàn thành
    if (!isContentLetterAnimated) {
        return;
    }
    
    document.querySelector(".startLetter").classList.add("close");
    setTimeout(() => {
        document.querySelector(".startForm").classList.add("close");
        setTimeout(() => {
            document.querySelector(".startForm").setAttribute("style", "bottom: 100%");
            
            let getTypeDevice = document.documentElement.clientWidth;
            if (getTypeDevice <= 768) {
                createFireworks(20);
            } else {
                createFireworks(40);
            }
        }, 500);
    }, 500);
});

let isMainContentAnimated = false; // Biến đánh dấu xem hiệu ứng gõ chữ của phần nội dung bức thư đã hoàn thành hay chưa

document.querySelector("#mess").addEventListener("change", function () {
    if (this.checked == true) {
        document.querySelector(".content").classList.add("actived");
        const splitMainContentLetter = mainContentLetter.split("");

        splitMainContentLetter.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".mainContent").innerHTML += val;
                if (index == mainContentLetter.length - 1) {
                    document.querySelector(".img1").setAttribute("style", "opacity: 1; transition: .5s");
                    isMainContentAnimated = true; // Đánh dấu hiệu ứng đã hoàn thành
                    // Tự động chạy mainContent sau khi hiệu ứng contentLetterSrart_actived hoàn thành
                    setTimeout(() => {
                        document.querySelector(".recieve").click();
                    }, 3000); // Đặt thời gian chờ là 3000ms (tức là 3 giây)
                }
            }, 50 * index);
        });
    } else {
        document.querySelector(".content").classList.remove("actived");
        document.querySelector(".img1").setAttribute("style", "opacity: 0; transition: .5s");
        document.querySelector(".mainContent").innerHTML = "";
    }
});

document.querySelector(".recieve").addEventListener("click", () => {
    // Kiểm tra nếu hiệu ứng gõ chữ của phần nội dung bức thư chưa hoàn thành
    if (!isMainContentAnimated) {
        return;
    }
    
    document.querySelector(".startLetter").classList.add("close");
    setTimeout(() => {
        document.querySelector(".startForm").classList.add("close");
        setTimeout(() => {
            document.querySelector(".startForm").setAttribute("style", "bottom: 100%");
            
            let getTypeDevice = document.documentElement.clientWidth;
            if (getTypeDevice <= 768) {
                createFireworks(20);
            } else {
                createFireworks(40);
            }
        }, 500);
    }, 500);
});

// Animation Drop light _ Tạo hiệu ứng kim tuyến rơi
//Bạn có thể thiết kế lại để trông chân thật hơn nhé, thiết kế của mình hơi bị cứng và thiếu sự tự nhiên
const getBackground = document.querySelector(".backgroundParty");
const width = getBackground.offsetWidth;
const height = getBackground.offsetHeight;

function createFireworks(a) {
    const container = document.querySelector(".backgroundParty");
    const count = 50;
    const allDefaultColor = ["red", "lime", "yellow", "orange", "blue"];
  
    for (let i = 0; i < count; i++) {
      const randomLeft = Math.floor(Math.random() * width);
      const randomTop = Math.floor(Math.random() * height / 2);
      const widthEle = Math.floor(Math.random() * 10) + 5;
      const moveTime = Math.floor(Math.random() * 6) + 2;
  
      const div = document.createElement("div");
      div.classList.add("firework");
      div.style.position = "absolute";
      div.style.backgroundColor = allDefaultColor[Math.floor(Math.random() * allDefaultColor.length)];
      div.style.borderRadius = "50%";
      div.style.opacity = "0.8";
      div.style.pointerEvents = "none";
  
      div.style.height = `${widthEle}px`;
      div.style.width = `${widthEle}px`;
      div.style.marginLeft = `${randomLeft}px`;
      div.style.marginTop = `${randomTop}px`;
      div.style.animation = `explode ${moveTime}s ease-in-out`;
  
      container.appendChild(div);
      setTimeout(() => {
        container.removeChild(div);
      }, moveTime * 1000);
    }
  }
  createFireworks();
  
  setInterval(() => {
    createFireworks();
  }, 5000);