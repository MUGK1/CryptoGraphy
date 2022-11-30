document.getElementById("btnBeforeTheNextPg").addEventListener("click", () => {
  setTimeout(() => {
    anime({
      targets: ".body",
      easing: "easeInOutBack",
      backgroundColor: "#1B1464",
      duration: 1000,
    });

    let tl2 = anime.timeline({
      easing: "easeInOutBack",
      duration: 700,
    });

    tl2.add({
      targets: ".circlesWraper span",
      translateX: 4,
      duration: 1000,
      opacity: 1,
      delay: anime.stagger(190),
      easing: "easeInOutSine",
    });

    tl2.add({
      targets: ".circlesWraper span",
      delay: anime.stagger(50),
      width: "27rem",
      height: "27rem",
      duration: 1000,
    });

    tl2.add({
      targets: ".LogoWrapper__LogoP2Top",
      easing: "spring(2, 80, 10, 0)",
      opacity: 1,
      duration: 500,
    });

    anime({
      targets: ".LogoWrapper__LogoP2Down",
      easing: "easeOutSine",
      duration: 800,
      delay: 3500,
      opacity: 1,
    });

    ////////////////////////////////////////////////
    // Animation For btns Encrypt Or Decrypt

    const btnEncrypt = document.querySelector(".btnEncrypt");
    const btnDecrypt = document.querySelector(".btnDecrypt");

    anime({
      targets: ".btnEncrypt",
      duration: 4000,
      borderRadius: ["100%", "50%"],
      opacity: 1,
      translateX: [0, 110],
      delay: 3000,
    });

    anime({
      targets: ".btnDecrypt",
      duration: 5000,
      borderRadius: ["100%", "50%"],
      opacity: 1,
      translateX: 410,
      delay: 3000,
    });

    btnEncrypt.addEventListener("click", () => {
      document.querySelector(".h1").classList.remove("disNone");
      document.querySelector(".input1").classList.remove("disNone");
      document.querySelector(".kInput1").classList.remove("disNone");
      document.querySelector(".btnG1").classList.remove("disNone");

      setTimeout(() => {
        document.getElementById("EncImg").classList.add("disNone");
        document.getElementById("DecImg").classList.remove("disNone");

        anime({
          targets: ".EncImg",
          opacity: 0,
          easing: "easeInOutSine",
          duration: 900,
        });

        anime({
          targets: "#DecImg",
          opacity: 1,
          easing: "easeInOutSine",
          duration: 900,
        });
      }, 900);

      anime({
        targets: ".btnEncrypt",
        translateX: 110,
        translateY: 400,
        scale: 12,
        rotate: 380,
        borderRadius: ["50%", "25%"],
        duration: 1000,
        delay: 950,
        // direction: "alternate",
      });

      anime({
        targets: ".h1, .input1, .kInput1, .btnG1",
        translateY: 5,
        easing: "easeInOutSine",
        opacity: 1,
        delay: 900,
        duration: 300,
      });

      anime({
        targets: ".btnDecrypt",
        translateX: 415,
        translateY: -1,
        scale: 1,
        rotate: -360,
        borderRadius: ["25%", "25%"],
        duration: 1500,
        delay: 500,
        // direction: "alternate",
      });

      anime({
        targets: ".h2, .input2, .kInput2, .btnG2",
        translateY: -5,
        easing: "easeInOutSine",
        opacity: 0,
        duration: 300,
      });

      setTimeout(() => {
        document.querySelector(".h2").classList.add("disNone");
        document.querySelector(".input2").classList.add("disNone");
        document.querySelector(".kInput2").classList.add("disNone");
        document.querySelector(".btnG2").classList.add("disNone");
      }, 1000);
    });

    btnDecrypt.addEventListener("click", () => {
      document.querySelector(".h2").classList.remove("disNone");
      document.querySelector(".input2").classList.remove("disNone");
      document.querySelector(".kInput2").classList.remove("disNone");
      document.querySelector(".btnG2").classList.remove("disNone");

      setTimeout(() => {
        document.getElementById("EncImg").classList.remove("disNone");
        document.getElementById("DecImg").classList.add("disNone");

        anime({
          targets: ".EncImg",
          opacity: 1,
          easing: "easeInOutSine",
          duration: 500,
        });

        anime({
          targets: "#DecImg",
          opacity: 0,
          easing: "easeInOutSine",
          duration: 500,
        });
      }, 400);

      anime({
        targets: ".btnEncrypt",
        translateX: 110,
        translateY: -1,
        scale: 1,
        rotate: -360,
        borderRadius: ["25%", "25%"],
        duration: 1500,
        delay: 500,
        // direction: "alternate",
      });

      anime({
        targets: ".h1, .input1, .kInput1, .btnG1",
        translateY: -5,
        easing: "easeInOutSine",
        opacity: 0,
        duration: 300,
      });

      anime({
        targets: ".btnDecrypt",
        translateX: 110,
        translateY: 350,
        scale: 12,
        rotate: 380,
        borderRadius: ["50%", "25%"],
        duration: 1500,
        delay: 950,
        // direction: "alternate",
      });

      anime({
        targets: ".h2, .input2, .kInput2, .btnG2",
        translateY: 5,
        easing: "easeInOutSine",
        opacity: 1,
        delay: 900,
        duration: 300,
      });

      setTimeout(() => {
        document.querySelector(".h1").classList.add("disNone");
        document.querySelector(".input1").classList.add("disNone");
        document.querySelector(".kInput1").classList.add("disNone");
        document.querySelector(".btnG1").classList.add("disNone");
      }, 1000);
    });

    /////////////////////////////////////////////
    // Result

    const btnEncGenerate = document.getElementById("btnEncGen");
    const btnDecGenerate = document.getElementById("btnDecGen");

    btnEncGenerate.addEventListener("click", () => {
      document.querySelector(".result").classList.remove("disNone");
      document.querySelector(".answer").classList.remove("disNone");
      document.querySelector(".showingAnswer").classList.remove("disNone");
      document.querySelector(".reset").classList.remove("disNone");
      setTimeout(() => {
        anime({
          targets: ".btnEncrypt",
          translateX: 110,
          translateY: -1,
          scale: 1,
          rotate: -360,
          borderRadius: ["25%", "25%"],
          duration: 1500,
          delay: 500,
          // direction: "alternate",
        });

        anime({
          targets: ".h1, .input1, .kInput1, .btnG1",
          translateY: -5,
          easing: "easeInOutSine",
          opacity: 0,
          duration: 300,
        });
      }, 2500);

      setTimeout(() => {
        anime({
          targets: ".result",
          scale: 14,
          easing: "easeOutBack",
          opacity: 1,
          delay: 500,
        });

        anime({
          targets: ".answer",
          opacity: 1,
          easing: "easeOutSine",
          delay: 800,
          duration: 800,
        });

        anime({
          targets: ".showingAnswer",
          opacity: 1,
          easing: "easeOutSine",
          delay: 1300,
          duration: 800,
        });

        anime({
          targets: ".reset",
          opacity: 1,
          easing: "easeOutSine",
          delay: 1400,
          duration: 800,
        });
      }, 2650);
    });

    btnDecGenerate.addEventListener("click", () => {
      document.querySelector(".result").classList.remove("disNone");
      document.querySelector(".answer").classList.remove("disNone");
      document.querySelector(".showingAnswer").classList.remove("disNone");
      document.querySelector(".reset").classList.remove("disNone");
      setTimeout(() => {
        anime({
          targets: ".btnDecrypt",
          translateX: 415,
          translateY: -1,
          scale: 1,
          rotate: -360,
          borderRadius: ["25%", "25%"],
          duration: 1500,
          delay: 500,
          // direction: "alternate",
        });

        anime({
          targets: ".h2, .input2, .kInput2, .btnG2",
          translateY: -5,
          easing: "easeInOutSine",
          opacity: 0,
          duration: 300,
        });
      }, 2500);

      setTimeout(() => {
        anime({
          targets: ".result",
          scale: 14,
          easing: "easeOutBack",
          opacity: 1,
          delay: 500,
        });

        anime({
          targets: ".answer",
          opacity: 1,
          easing: "easeOutSine",
          delay: 800,
          duration: 800,
        });

        anime({
          targets: ".showingAnswer",
          opacity: 1,
          easing: "easeOutSine",
          delay: 1300,
          duration: 800,
        });

        anime({
          targets: ".reset",
          opacity: 1,
          easing: "easeOutSine",
          delay: 1400,
          duration: 800,
        });
      }, 2650);
    });
  }, 2600);
});
