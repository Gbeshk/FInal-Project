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
async function getAllProducts() {
  try {
    let data = await fetch("https://fakestoreapi.com/products");
    let products = await data.json();
    for (let i = 1; i <= 12; i++) {
      let justimage = document.getElementById("justimage");
      justimage.src = products[0].image;
      let pdiv = document.getElementById("section3pdiv1");
      pdiv.addEventListener("mouseenter", () => {
        justimage.src = products[1].image;
      });
      let pdiv2 = document.getElementById("section3pdiv2");
      pdiv2.addEventListener("mouseenter", () => {
        justimage.src = products[2].image;
      });
      let pdiv3 = document.getElementById("section3pdiv3");
      pdiv3.addEventListener("mouseenter", () => {
        justimage.src = products[3].image;
      });
      let pdiv4 = document.getElementById("section3pdiv4");
      pdiv4.addEventListener("mouseenter", () => {
        justimage.src = products[4].image;
      });
      let pdiv5 = document.getElementById("section3pdiv5");
      pdiv5.addEventListener("mouseenter", () => {
        justimage.src = products[5].image;
      });
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
  } catch (error) {
    console.log(error);
  }
}
getAllProducts();
let dragslider = document.getElementById("mobileslider");
let isDragging = false;
let startX;
let scrollLeft;

dragslider.addEventListener("mousedown", (e) => {
  isDragging = true;
  dragslider.style.cursor = "pointer";
  startX = e.pageX - dragslider.offsetLeft;
  scrollLeft = dragslider.scrollLeft;
});

dragslider.addEventListener("mouseleave", () => {
  isDragging = false;
  dragslider.style.cursor = "pointer";
});

dragslider.addEventListener("mouseup", () => {
  isDragging = false;
  dragslider.style.cursor = "pointer";
});

dragslider.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - dragslider.offsetLeft;
  const walk = (x - startX) * 2;
  dragslider.scrollLeft = scrollLeft - walk;
});
let swiperpaginationactive = document.getElementsByClassName(
  "swiper-pagination-bullet swiper-pagination-bullet-active"
);
let moreworks = document.getElementById("moreworks");
moreworks.addEventListener("click", () => {
  document.documentElement.scrollTo({
    top: 1750,
    behavior: "smooth",
  });
});
let viewworks = document.getElementById("viewworks");
viewworks.addEventListener("click", () => {
  document.documentElement.scrollTo({
    top: 1750,
    behavior: "smooth",
  });
});
let buttonmobile = document.getElementById("buttonmobile");
buttonmobile.addEventListener("click", () => {
  document.documentElement.scrollTo({
    top: 1750,
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
    top: 1750,
    behavior: "smooth",
  });
});
let letswork = document.getElementById("letswork");
letswork.addEventListener("click", () => {
  document.documentElement.scrollTo({
    top: 1750,
    behavior: "smooth",
  });
});
let call = document.getElementById("call");
call.addEventListener("click", () => {
  window.location.href = "tel:+995551537703";
});
let letswork2 = document.getElementById("letswork2");
letswork2.addEventListener("click", () => {
  document.documentElement.scrollTo({
    top: 2000,
    behavior: "smooth",
  });
});
let arrowdown2 = document.getElementById("arrowdown2");
arrowdown2.addEventListener("click", () => {
  document.documentElement.scrollTo({
    top: 2000,
    behavior: "smooth",
  });
});
let menubutton = document.getElementById("menubutton");
menubutton.addEventListener("click", () => {
  let line = document.getElementById("menubuttonline1");
  line.classList.toggle("menubuttonlinee");
  let line2 = document.getElementById("menubuttonline2");
  line2.classList.toggle("menubuttonlinee2");
  let headercontainer = document.getElementById("headercontainer");
  headercontainer.classList.toggle("headercontainerr");
  let hiddendiv = document.getElementById("hiddendiv");
  hiddendiv.classList.toggle("hiddendivv");
  let headerlist = document.getElementById("headerlist");
  headerlist.classList.toggle("headerlistt");
  let headerrightlist = document.getElementById("headerrightlist");
  headerrightlist.classList.toggle("headerrightlistt");
  let positionneuro = document.getElementById("positionneuro");
  positionneuro.classList.toggle("positionneuroo");
  let headermaindiv = document.getElementById("headermaindiv");
  headermaindiv.classList.toggle("headermaindivv");
  let inc = document.getElementById("inc");
  inc.classList.toggle("incc");
  let wor = document.getElementById("wor");
  wor.classList.toggle("worr");
  let menu = document.getElementById("menu");
  menu.classList.toggle("menuu");
  let menubutton = document.getElementById("menubutton");
  menubutton.classList.toggle("menubuttonn");
});
let arrowdown = document.getElementById("arrowdown");
arrowdown.addEventListener("click", () => {
  let bigcontainer = document.getElementById("bigcontainer");
  bigcontainer.style.display = "inline";
  let footer = document.getElementById("footer");
  footer.style.display = "inline";
  document.documentElement.scrollTo({
    top: 1000,
    behavior: "smooth",
  });
});
function Today() {
  let today = new Date();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let dayOfWeek = days[today.getDay()];
  let dayOfMonth = today.getDate().toString().padStart(2, "0");
  let month = months[today.getMonth()];
  return `${dayOfWeek} ${dayOfMonth}.${month.slice(0, 3)}`;
}
let dge = Today();
let dgee = document.getElementById("dge");
dgee.textContent = dge;
let mobilemenu = document.getElementById("mobilemenu");
mobilemenu.addEventListener("click", () => {
  let mobilehiddendiv = document.getElementById("mobilehiddendiv");
  mobilehiddendiv.classList.toggle("mobilehiddendivv");
  let mobilelists = document.getElementById("mobilelists");
  mobilelists.style.transition = "1s";
  mobilelists.classList.toggle("mobilelistss");
  let hiddenmobilelastdiv = document.getElementById("hiddenmobilelastdiv");
  hiddenmobilelastdiv.classList.toggle("hiddenmobilelastdivv");
  let mobileheadergraydiv = document.getElementById("mobileheadergraydiv");
  mobileheadergraydiv.classList.toggle("mobileheadergraydivv");
  let mobilemenuline = document.getElementById("mobilemenuline1");
  mobilemenuline.classList.toggle("mobilemenulinee");
  let mobilemenuline2 = document.getElementById("mobilemenuline2");
  mobilemenuline2.classList.toggle("mobilemenulinee2");
  let mobilemenu = document.getElementById("mobilemenu");
  mobilemenu.classList.toggle("mobilemenuu");
});
let xx = localStorage.getItem("mode");
if (xx % 2 == 1) {
  document.body.classList.toggle("dark-theme");
  let werto = document.getElementById("werto");
  werto.classList.toggle("wertilaa");
  let wertomobile = document.getElementById("wertomobile");
  wertomobile.classList.toggle("wertilaa");
}
let buttondiv = document.getElementById("buttondiv");
buttondiv.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  let werto = document.getElementById("werto");
  werto.classList.toggle("wertilaa");
  xx++;
  localStorage.setItem("mode", xx);
  let wertomobile = document.getElementById("wertomobile");
  wertomobile.classList.toggle("wertilaa");
});
let mobilebuttondiv = document.getElementById("mobilebuttondiv");
mobilebuttondiv.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  let werto = document.getElementById("wertomobile");
  werto.classList.toggle("wertilaa");
  xx++;
  localStorage.setItem("mode", xx);
  let mobilewerto = document.getElementById("werto");
  mobilewerto.classList.toggle("wertilaa");
});
