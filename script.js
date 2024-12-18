let buttonsection1 = document.getElementById("buttonsection1");
let hiddenbuttonsection1 = document.getElementById("hiddenbuttonsection1");
let hiddensection1p = document.getElementById("hiddensection1p");

buttonsection1.addEventListener("click", () => {
  hiddensection1p.style.maxHeight = "500px";
  buttonsection1.style.display = "none";
  hiddenbuttonsection1.style.display = "block";
});
hiddenbuttonsection1.addEventListener("click", () => {
  hiddensection1p.style.maxHeight = "0px";
  buttonsection1.style.display = "block";
  hiddenbuttonsection1.style.display = "none";
});
let section3div = document.getElementById("divsection3_1");
section3div.addEventListener("mouseover", () => {
  let divp1section3 = document.getElementById("divp1section3_1");
  divp1section3.style.color = " var(--NeuYellow, #E5E548)";
  let divp2section3 = document.getElementById("divp2section3_1");
  divp2section3.style.color = " var(--NeuYellow, #E5E548)";
  let divlinesection3 = document.getElementById("divlinesection3_1");
  divlinesection3.style.backgroundColor = " var(--NeuYellow, #E5E548)";
});
section3div.addEventListener("mouseleave", () => {
  let divp1section3 = document.getElementById("divp1section3_1");
  divp1section3.style.color = "white";
  let divp2section3 = document.getElementById("divp2section3_1");
  divp2section3.style.color = "white";
  let divlinesection3 = document.getElementById("divlinesection3_1");
  divlinesection3.style.backgroundColor = " rgba(255, 255, 255, 0.2)";
});
let section3div2 = document.getElementById("divsection3_2");
section3div2.addEventListener("mouseover", () => {
  let divp1section3 = document.getElementById("divp1section3_2");
  divp1section3.style.color = " var(--NeuYellow, #E5E548)";
  let divp2section3 = document.getElementById("divp2section3_2");
  divp2section3.style.color = " var(--NeuYellow, #E5E548)";
  let divlinesection3 = document.getElementById("divlinesection3_2");
  divlinesection3.style.backgroundColor = " var(--NeuYellow, #E5E548)";
});
section3div2.addEventListener("mouseleave", () => {
  let divp1section3 = document.getElementById("divp1section3_2");
  divp1section3.style.color = "white";
  let divp2section3 = document.getElementById("divp2section3_2");
  divp2section3.style.color = "white";
  let divlinesection3 = document.getElementById("divlinesection3_2");
  divlinesection3.style.backgroundColor = " rgba(255, 255, 255, 0.2)";
});
let section3div3 = document.getElementById("divsection3_3");
section3div3.addEventListener("mouseover", () => {
  let divp1section3 = document.getElementById("divp1section3_3");
  divp1section3.style.color = " var(--NeuYellow, #E5E548)";
  let divp2section3 = document.getElementById("divp2section3_3");
  divp2section3.style.color = " var(--NeuYellow, #E5E548)";
  let divlinesection3 = document.getElementById("divlinesection3_3");
  divlinesection3.style.backgroundColor = " var(--NeuYellow, #E5E548)";
});
section3div3.addEventListener("mouseleave", () => {
  let divp1section3 = document.getElementById("divp1section3_3");
  divp1section3.style.color = "white";
  let divp2section3 = document.getElementById("divp2section3_3");
  divp2section3.style.color = "white";
  let divlinesection3 = document.getElementById("divlinesection3_3");
  divlinesection3.style.backgroundColor = " rgba(255, 255, 255, 0.2)";
});
let section3div4 = document.getElementById("divsection3_4");
section3div4.addEventListener("mouseover", () => {
  let divp1section3 = document.getElementById("divp1section3_4");
  divp1section3.style.color = " var(--NeuYellow, #E5E548)";
  let divp2section3 = document.getElementById("divp2section3_4");
  divp2section3.style.color = " var(--NeuYellow, #E5E548)";
  let divlinesection3 = document.getElementById("divlinesection3_4");
  divlinesection3.style.backgroundColor = " var(--NeuYellow, #E5E548)";
});
section3div4.addEventListener("mouseleave", () => {
  let divp1section3 = document.getElementById("divp1section3_4");
  divp1section3.style.color = "white";
  let divp2section3 = document.getElementById("divp2section3_4");
  divp2section3.style.color = "white";
  let divlinesection3 = document.getElementById("divlinesection3_4");
  divlinesection3.style.backgroundColor = " rgba(255, 255, 255, 0.2)";
});
let section3div5 = document.getElementById("divsection3_5");
section3div5.addEventListener("mouseover", () => {
  let divp1section3 = document.getElementById("divp1section3_5");
  divp1section3.style.color = " var(--NeuYellow, #E5E548)";
  let divp2section3 = document.getElementById("divp2section3_5");
  divp2section3.style.color = " var(--NeuYellow, #E5E548)";
  let divlinesection3 = document.getElementById("divlinesection3_5");
  divlinesection3.style.backgroundColor = " var(--NeuYellow, #E5E548)";
});
section3div5.addEventListener("mouseleave", () => {
  let divp1section3 = document.getElementById("divp1section3_5");
  divp1section3.style.color = "white";
  let divp2section3 = document.getElementById("divp2section3_5");
  divp2section3.style.color = "white";
  let divlinesection3 = document.getElementById("divlinesection3_5");
  divlinesection3.style.backgroundColor = " rgba(255, 255, 255, 0.2)";
});
let foto;
async function getAllProducts() {
  try {
    let data = await fetch("https://fakestoreapi.com/products");
    let products = await data.json();
    foto = products[0].image;
    for (let i = 1; i <= 12; i++) {
      let mobilesliderp = document.getElementById(`mobilesliperp${i}`);
      let mobilesliderpp = document.getElementById(`mobilesliperpp${i}`);
      let mobilesliderppp = document.getElementById(`mobilesliperppp${i}`);
      let mobilesliderpppp = document.getElementById(`mobilesliperpppp${i}`);
      mobilesliderp.textContent = products[i].category;
      mobilesliderpp.textContent = products[i].description;
      mobilesliderpp.textContent = mobilesliderpp.textContent.slice(0, 80);
      mobilesliderppp.textContent = products[i].title;
      mobilesliderppp.textContent = mobilesliderppp.textContent.slice(0, 20);
      mobilesliderpppp.textContent = products[i].price;
      let mobileuppimgdiv = document.getElementById(
        `mobileuppersliderimgdiv${i}`
      );
      mobileuppimgdiv.addEventListener("mouseover", () => {
        let mobilehover = document.getElementById(`mobilehoverdiv${i}`);
        mobilehover.style.transition = "2s";
        mobilehover.style.opacity = 1;
      });
      mobileuppimgdiv.addEventListener("mouseleave", () => {
        let mobilehover = document.getElementById(`mobilehoverdiv${i}`);
        mobilehover.style.transition = "2s";
        mobilehover.style.opacity = 0;
      });

      let fetchimg = document.getElementById(`fetchimg${i}`);
      let imagehoversmall = document.getElementById(`imagehoversmall${i}`);
      let imagehover = document.getElementById(`imagehover${i}`);
      let arrow = document.getElementById(`arrow${i}`);
      arrow.addEventListener("mouseover", () => {
        imagehover.style.opacity = 1;
        imagehoversmall.style.opacity = 0.3;
        arrow.style.opacity = 1;
      });
      arrow.addEventListener("mouseleave", () => {
        imagehover.style.opacity = 0;
        imagehoversmall.style.opacity = 0;
        arrow.style.opacity = 0;
      });
      imagehoversmall.addEventListener("mouseover", () => {
        imagehover.style.opacity = 1;
        imagehoversmall.style.opacity = 0.3;
        arrow.style.opacity = 1;
      });
      imagehoversmall.addEventListener("mouseleave", () => {
        imagehover.style.opacity = 0;
        imagehoversmall.style.opacity = 0;
        arrow.style.opacity = 0;
      });
      imagehover.addEventListener("mouseover", () => {
        imagehover.style.opacity = 1;
        imagehoversmall.style.opacity = 0.3;
        arrow.style.opacity = 1;
      });
      imagehover.addEventListener("mouseleave", () => {
        imagehover.style.opacity = 0;
        imagehoversmall.style.opacity = 0;
        arrow.style.opacity = 0;
      });
      fetchimg.addEventListener("mouseover", () => {
        imagehover.style.opacity = 1;
        imagehoversmall.style.opacity = 0.3;
        arrow.style.opacity = 1;
      });
      fetchimg.addEventListener("mouseleave", () => {
        imagehover.style.opacity = 0;
        imagehoversmall.style.opacity = 0;
        arrow.style.opacity = 0;
      });
      let number = document.createElement("p");
      number.textContent = `0${i}`;
      number.className = "numberpos";
    }
    for (let i = 1; i <= 12; i++) {
      let fetchfirstp = document.getElementById(`fetchp${i}`);
      fetchfirstp.textContent = products[i].title;
      fetchfirstp.textContent = fetchfirstp.textContent.slice(0, 20);
      let fetchsecondp = document.getElementById(`fetchsecondp${i}`);
      fetchsecondp.textContent = products[i].description;
      fetchsecondp.textContent = fetchsecondp.textContent.slice(0, 100);
      let fetchthirdp = document.getElementById(`fetchthirdp${i}`);
      fetchthirdp.textContent = products[i - 1].id;
      let fetchfourthp = document.getElementById(`fetchfourthp${i}`);
      fetchfourthp.textContent = products[i].category;
    }
    for (let i = 1; i <= 3; i++) {
      let secondswiperp = document.getElementById(`secondswiperp_${i}`);
      secondswiperp.textContent = products[i].description;
      secondswiperp.textContent = secondswiperp.textContent.slice(0, 50);
      let secondswiperpp = document.getElementById(`secondswiperpp_${i}`);
      secondswiperpp.textContent = products[i].title;
      secondswiperpp.textContent = secondswiperpp.textContent.slice(0, 50);
      let secondswiperppp = document.getElementById(`secondswiperppp_${i}`);
      secondswiperppp.textContent = products[i].price;
      secondswiperppp.textContent = secondswiperppp.textContent.slice(0, 50);
    }
    let justimage = document.getElementById("justimage");
    justimage.src = "./images/image.jpg";

    for (let i = 1; i <= 5; i++) {
      let pdiv = document.getElementById(`section3pdiv${i}`);
      pdiv.addEventListener("mouseover", () => {
        justimage.src = products[i].image;
      });
      pdiv.addEventListener("mouseleave", () => {
        justimage.src = "./images/image.jpg";
      });
    }
  } catch (error) {
    console.log(error);
  }
}
getAllProducts();
let swiperpaginationactive = document.getElementsByClassName(
  "swiper-pagination-bullet swiper-pagination-bullet-active"
);
let moreworks = document.getElementById("moreworks");
moreworks.addEventListener("click", () => {
  document.documentElement.scrollTo({
    top: 884,
    behavior: "smooth",
  });
});
let viewworks = document.getElementById("viewworks");
viewworks.addEventListener("click", () => {
  document.documentElement.scrollTo({
    top: 884,
    behavior: "smooth",
  });
});
let buttonmobile = document.getElementById("buttonmobile");
buttonmobile.addEventListener("click", () => {
  document.documentElement.scrollTo({
    top: 700,
    behavior: "smooth",
  });
});
buttonmobile.style.transition = "2s";
buttonmobile.addEventListener("mouseover", () => {
  buttonmobile.style.color = "black";
  buttonmobile.style.backgroundColor = "white";
});
buttonmobile.addEventListener("mouseleave", () => {
  buttonmobile.style.color = "white";
  buttonmobile.style.backgroundColor = "black";
});
let morestories = document.getElementById("morestories");
morestories.addEventListener("click", () => {
  document.documentElement.scrollTo({
    top: 884,
    behavior: "smooth",
  });
});

let call = document.getElementById("call");
call.addEventListener("click", () => {
  window.location.href = "tel:+995551537703";
});
