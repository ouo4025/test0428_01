$(document).ready(function(){ //실행틀 시작

    $(document).ready(function(){

        var page = $('#fullpage').fullpage({

        // menu에 대한 옵션 설정
        menu : '.gnb',
        anchors : ['menu1', 'menu2', 'menu3', 'menu4'],

        // 네비게이션 보이기
        navigation: true,
        navigationTooltips: ['oneul', 'value', 'menu', 'room'],
        navigationPosition: 'right',
        showActiveTooltip: true,
        autoScrolling: true,

        // 1024 이하 fullpage 스크롤 작동 X
        responsiveWidth: 1000,

        // 마지막 영역 #fp-nav 숨기기
        onLeave :  function(origin, destination, direction, trigger){
            if(destination == 2 || destination == 3 || destination == 4){ //2번째와 4번째 section일때만
              $("header").addClass("active");
              $("header .gnb > li").addClass("active");

      
            }else{
              $("header").removeClass("active");
              $("header .gnb > li").remove("active");
            }

            
      
            //footer에 가면 헤더와 fp-nav가 사라짐
      
            if(destination == 5){
              $("header, #fp-nav").fadeOut();
      
            }else{
              $("header, #fp-nav").fadeIn();
            }
          }
      

        });
        
    });

	
    $(".ham").click(function(){
        $(".mgnb-wrap").animate({"right":"0px"},500,"swing");
    });

    $(".x-button").click(function(){
        $(".mgnb-wrap").animate({"right":"-110%"},500,"swing");
    });






    const room_swiper = new Swiper('.room-swiper', {

        loop: true,

        autoplay: {
            delay: 2000, 
            disableOnInteraction: false,
          },

        slidesPerView: 1, 
        spaceBetween: 20,

        breakpoints: { 
            768: {
              
              slidesPerView: 1.5,
            },

            1000: {
              
                slidesPerView: 2,
              },

            
            1300: {
              
              slidesPerView: 3,
            },
          },
          
  
    });

    const people_swiper = new Swiper('.people-swiper', {

        loop: true,

        autoplay: {
            delay: 2000, 
            disableOnInteraction: false,
          },

        slidesPerView: 2, 
        spaceBetween: 20,

        breakpoints: { 
            900: {
              
              slidesPerView: 3,
            },
            1200: {
              
              slidesPerView: 4,
            },
          },
          
  
    });


 });//실행틀 끝