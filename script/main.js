// Animation Timeline
const animationTimeline = () => { 
  // Spit chars that needs to be animated individually
   
  const hbd = document.getElementsByClassName("wish-hbd")[0];
  const reason1Text = document.querySelector(".reason1 p");
  reason1Text.innerHTML = `<span>${reason1Text.innerHTML
    .split("")
    .join("</span><span>")}</span>`;
  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg",
  };

  const tl = new TimelineMax();

  tl.to(".container", 0.1, {
    visibility: "visible",
  })
    .from(".one", 0.7, {
      opacity: 0,
      y: 10,
    })
    .from(".two", 0.4, {
      opacity: 0,
      y: 10,
    })
    .to(".one",0.7,{
        opacity: 0,
        y: 10,
      },
      "+=2.5"
    )
    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "-=1"
    )
    .from(".three", 0.7, {
      opacity: 0,
      y: 10,
      // scale: 0.7
    })
    .to(
      ".three",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=2"
    )
    .from(".four", 0.8, {
      opacity: 0,
      y: -50,
      scale: 0.5,
      ease: Bounce.easeOut,
    })
    .to(".four", 0.5, {
      color: "#ffddd6",
      scale: 1.2,
      opacity: 0,
      delay:2
    }, "+=1")
    
     // Анимация блока reason1
  .from(".reason1", 1, {
    opacity: 0,
    x: -100,
    ease: Power3.easeInOut,
  })
  
  // Печатающийся текст для блока reason1
  .staggerFromTo(
    ".reason1 span", // текст разбит на символы
    0.05, // продолжительность анимации каждого символа
    { opacity: 0 }, // начальные параметры
    { opacity: 1 }, // конечные параметры
    0.05 // задержка между появлением каждого символа
  )

  // Анимация изображения в блоке reason1
  .from(".reason1 .small-img", 1.2, {
    scale: 0.3,
    opacity: 0,
    ease: Back.easeOut.config(1.7), 
  },"-=1.5")
  .to(".reason1 .small-img", 1, {
    scale: 1.1,
    ease: Power2.easeInOut,
  })

  // Удаление блока reason1 после паузы
  .to(".reason1", 1.2, {
    opacity: 0,
    rotation: 360,
    ease: Back.easeInOut,
    delay: 2
  })

  .from(".reason2-text", 0.4, { // Уменьшено время появления текста
    opacity: 0,
    y: -100,
    ease: Power1.easeOut,
  })
  .from(".reason2-img", 0.4, { // Уменьшено время появления изображения
    scale: 0,
    rotation: 360,
    ease: Power1.easeOut,
  }, "-=0.2") // Начинает анимацию изображения чуть раньше
  .to(".reason2-text", 0.1, { // Быстрое удержание текста
    scale: 1,
    color: "#c6b6d6",
    delay:4
  }, "+=2.5") // Удержание текста в статическом состоянии
  .to(".reason2-text", 0.5, { // Быстрое исчезновение текста
    opacity: 0,
    y: 50,
    rotationX: 90,
  }, "+=0.5") // С задержкой перед исчезновением текста
  .to(".reason2-img", 0.5, { // Быстрое исчезновение изображения
    opacity: 0,
    y: 30,
    rotationY: 180,
  }, "-=0.5")

    
  
  .from(".reason3", 0.4, { // Quicker appearance of container
    opacity: 0,
    y: -50,
    ease: Power1.easeOut,
  })
  .from(".reason3-text", 0.4, { // Faster text appearance
    opacity: 0,
    y: -50,
    ease: Power1.easeOut,
  }, "-=0.2") // Start text animation slightly before the previous one ends
  .from(".reason3-img", 0.4, { // Quicker image appearance
    scale: 0,
    rotation: 360,
    ease: Power1.easeOut,
  }, "-=0.2") // Image appears simultaneously with text
  .to(".reason3-text", 0.1, { // Static text hold for 2.5 seconds
    ease: Power1.easeInOut,
    delay: 4, // Hold for reading time
  })
  .to(".reason3-text", 0.5, { // Quicker text disappearance
    opacity: 0,
    y: 50,
    rotationX: 90,
    ease: Power1.easeInOut,
  }, "+=0.2") // Small delay before disappearing
  .to(".reason3-img", 0.5, { // Quicker image disappearance
    opacity: 0,
    y: 30,
    rotationY: 180,
    ease: Power1.easeInOut,
  }, "-=0.4")


  .from(".reason4", 0.8, {
    opacity: 0,
    y: -50,
    ease: Power1.easeOut,
  })
  .from(".reason4-img", 0.5, {  // Faster appearance
    scale: 0,
    rotation: 360,
    ease: Power1.easeOut,
  }, "-=0.6")
  .from(".reason4-text", 0.5, { // Faster appearance for text
    opacity: 0,
    y: -50,
    ease: Power1.easeOut,
  }, "-=0.5")
  .to(".reason4-text", 1.5, {   // Longer display time for reading
    ease: Power1.easeInOut,
    delay: 4,  // Keep text visible longer
  })
  .to(".reason4-text", 0.8, {   // Faster disappearance
    opacity: 0,
    rotation: -90,
    y: 50,
  }, "+=0.5")  // Add a small delay before starting to disappear
  .to(".reason4-img", 0.8, {    // Faster disappearance for image
    opacity: 0,
    y: 30,
    rotationY: 180,
  }, "-=0.5")


 .from(".reason5", 0.8, {
    opacity: 0,
    y: -50,
    ease: Power1.easeOut,
  })
  .from(".reason5-text", 0.5, {  // Faster appearance for text
    opacity: 0,
    y: -80,
    scale: 0.6,
    ease: Power1.easeOut,
  })
  .from(".reason5-img", 0.5, {   // Faster appearance for image
    scale: 0,
    rotation: 360,
    ease: Power1.easeOut,
  }, "-=0.6")
  .to(".reason5-text", 1.5, {    // Longer display time for reading
    delay: 3.5,  // Keep text visible longer
  })
  .to(".reason5-text", 0.8, {     // Faster disappearance for text
    opacity: 0,
    y: 40,
    rotationZ: 180,
  }, "+=0.5")  // Small delay before starting to disappear
  .to(".reason5-img", 0.8, {      // Faster disappearance for image
    opacity: 0,
    y: 30,
    rotationY: 180,
  }, "-=0.5")
    
    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400,
      },
      {
        opacity: 1,
        y: -1000,
      },
      0.2
    )
    .from(
      ".girl-dp",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
      },
      "-=2"
    )
    .from(".hat", 0.5, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0,
    })
    .staggerFrom(
      ".wish-hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.7,
      {
        scale: 1.4,
        rotationY: 150,
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut,
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg",
      },
      "party"
    )
    .staggerTo(
      ".eight svg",
      1.5,
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4,
      },
      0.3
    )
    .to(".six", 0.5, {
      opacity: 0,
      y: 30,
      zIndex: "-1",
    })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
      ".last-smile",
      0.5,
      {
        rotation: 90,
      },
      "+=1"
    );

  // tl.seek("currentStep");
  //tl.timeScale(10);

  // Restart Animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });
};

// Import the data to customize and insert them into page
const fetchData = () => {
  fetch("customize.json")
    .then((data) => data.json())
    .then((data) => {
      Object.keys(data).map((customData) => {
        if (data[customData] !== "") {
          if (customData === "imagePath") {
            document
              .getElementById(customData)
              .setAttribute("src", data[customData]);
          } else {
            document.getElementById(customData).innerText = data[customData];
          }
        }
      });
    });
};

// Run fetch and animation in sequence
const resolveFetch = () => {
  return new Promise((resolve, reject) => {
    fetchData();
    resolve("Fetch done!");
  });
};

resolveFetch().then(animationTimeline());
