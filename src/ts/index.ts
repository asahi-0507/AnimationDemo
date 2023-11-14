'use strict';
import * as $ from 'jquery';



  //------------------------------
  // 1つだけが開くアコーディオン
  //------------------------------
  // タイトルをクリックすると
  $(".accordionTitle").on("click", function (this: any) {
    // クリックしたタイトル以外のopenクラスを外す(－から＋にする)
    $(".accordionTitle").not(this).removeClass("open");
    // クリックしたタイトル以外のコンテンツを閉じる
    $(".accordionTitle").not(this).next().slideUp(300);
    // クリックしたタイトルにopenクラスを付け外しして＋と－を切り替える
    $(this).toggleClass("open");
    // クリックしたタイトルの次の要素(コンテンツ)を開閉
    $(this).next().slideToggle(300);
  });

  // コアバージョンに加えて、ナビゲーションとページネーションを追加する
import Swiper, {
  Navigation,
  SwiperOptions,
} from 'swiper';

// モジュールを使用可能に
Swiper.use([Navigation]);

// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

document.addEventListener('DOMContentLoaded', () => {
  //------------------------------
  // swiper
  //------------------------------
  const sliderParams__parent: SwiperOptions = {
    loop: true,
    autoplay: {
      delay: 1500, // 自動再生のディレイ（ミリ秒単位）
      disableOnInteraction: false, // ユーザーの操作で停止しないようにする
    },
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
    },
  };
  const slider__parent = new Swiper('.swiper', sliderParams__parent);

  //------------------------------
  // ハンバーガーメニューを閉じる
  //------------------------------
  const menuCheckbox = document.getElementById('btnCheck') as HTMLInputElement | null;
  const allLinks = document.querySelectorAll('a[href*="#"]');

  function closeMenu() {
    if (menuCheckbox) {
      menuCheckbox.checked = false;
    }
  }

  //------------------------------
  // headerを考慮してスムーススクロールする
  //------------------------------
  const headerHeight = 150;
  function scrollToSection(targetId: string) {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      const targetSectionTop = targetSection.offsetTop -  headerHeight;

      window.scrollTo({
        top: targetSectionTop,
        behavior: 'smooth',
      });
    }
  }

  allLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href')?.substring(1) || '';
      closeMenu();
      scrollToSection(targetId);
    });
  });



});

  //------------------------------
  // loading
  //------------------------------
  $(window).on('load',function(){
    $("#loading-wrapper").addClass("completed")
  });

  //------------------------------
  // ふわっと出現させる
  //------------------------------
  $(window).scroll(function (){
    $('.fadein').each(function(){
      var elemPos = $(this).offset().top,
      scroll = $(window).scrollTop(),
      windowHeight = $(window).height();

        if (scroll > elemPos - windowHeight + 150){
          $(this).addClass('scrollin');
        }
    });
  });