<template>
  <nav class="nav">
    <div class="logo">
      <!-- <img src="./" alt="logo" /> -->
    </div>
    <!-- 598px以下才顯示 -->
    <ul class="side-bar">
      <i class="fa-solid fa-xmark side-bar-close"></i>
      <li><a href="">關卡任務</a></li>
      <li><a href="">競賽說明</a></li>
    </ul>
    <ul class="nav-bar">
      <li><a href="">關卡任務</a></li>
      <li><a href="">競賽說明</a></li>
      <li><a href="" class="sign-up">立即報名</a></li>
    </ul>
  </nav>

  <div class="cover">
    <div class="cover-mouse">
      <div class="line mousemove"></div>
      <div class="text mousemove">向下滑動</div>
    </div>
    <!-- <div class="cover-left"><img src="/image/jd-left.png" alt="" /></div>
    <div class="cover-right"><img src="/image/jd-right.png" alt="" /></div>
    <div class="cover-top"><img src="/image/jd-up.png" alt="" /></div> -->
  </div>
  <section class="home">
    <div class="content">
      <div class="pic-face">
        <img src="/image/rectangle.png" />
        <div class="text">
          個人獎<span class="money">$3,000</span>團體獎<span class="money">$10,000</span>
        </div>
      </div>
      <div class="pic-task">
        <!-- <img src="/image/tast.svg" alt="" /> -->
      </div>
      <div class="mouse">
        <div class="line mousemove"></div>
        <div class="text mousemove">向下滑動</div>
      </div>
      <div class="content-left">
        <div class="title">
          <h1>THE F2E<span class="th">4th</span></h1>
        </div>
        <p>前端工程師和介面設計師，攜手合作拿獎金</p>
        <p>
          羨慕別人的酷酷網頁動畫？ 滿足不了同事的許願？
          動畫技能樹太雜無從下手？
        </p>
      </div>
      <div class="content-right">
        <p>
          報名總人數 <span class="num">1158</span><span class="unit">人</span>
        </p>
        <p>
          個人賽人數 <span class="num">1052</span><span class="unit">人</span>
        </p>
        <p>
          團體賽人數 <span class="num">41</span><span class="unit">人</span>
        </p>
      </div>
    </div>
  </section>

</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin"

gsap.registerPlugin(ScrollTrigger, TextPlugin);


const mousemoveTimeline = gsap.timeline({ repeat: -1 });
const scrollCover = gsap.timeline({
  scrollTrigger: {
    trigger: ".cover", // 決定scrolltrigger要以哪一個元素作為觸發基準點
    markers: false, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
    pin: true,
    scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
  },
});

// const scrollFace = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".home", // 決定scrolltrigger要以哪一個元素作為觸發基準點
//     markers: false, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
//     pin: true,
//     scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
//   },
// });

mousemoveTimeline
  .to(".mousemove", { y: 15, duration: 1 })
  .to(".mousemove", { y: 0, duration: 1 });

scrollCover
  .to(".cover-top", { yPercent: -30 })
  .to(".pic-face", { yPercent: -70 })
  .to(".cover-mouse", { autoAlpha: 0, ease: "expo" }, "<")
  .to(".cover-right", { yPercent: 100 }, "<")
  .to(".cover-left", { yPercent: 10 }, "<")
  .to(".cover-top", { yPercent: -100 }, "<")
  .to(".cover-left", { yPercent: 100 })
  .to(".pic-face", { yPercent: -110 }, "<")
  .to(".pic-task", { opacity: 1, ease: "expo" })
  .to(".mouse", { opacity: 1, ease: "expo" }, "<");


export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
} */

li {
  display: inline-block;
  margin: 0 10px;
}

/* a {
  color: #42b983;
} */

.nav .side-bar {
  display: none;
}

.cover-top {
  position: absolute;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}

.cover-right {
  position: absolute;
  z-index: 10;
  width: 95.15vw;
  height: 140vh;
  left: 36.09%;
  top: 39.86%;
}

.cover-left {
  position: absolute;
  z-index: 30;
  width: 73.59vw;
  height: 146vh;
  left: -19.37%;
  top: 36.25%;
}

.nav .logo {
  background-image: url("../assets/logo.png");
  background-size: 100% 100%;
  height: 35px;
  width: 145px;
}
</style>
