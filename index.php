<?php
   session_start();
   if(!isset($_SESSION['lang'])){
   $_SESSION['lang'] = 'en';   
   }
   if(isset($_GET['lang']) && strlen($_GET['lang'])==2){
   if($_GET['lang']=='en'){
   $_SESSION['lang'] = 'en'; 
   }else if($_GET['lang']=='cn'){
   $_SESSION['lang'] = 'cn'; 
   }elseif($_GET['lang']=='id'){
   $_SESSION['lang'] = 'id'; 
   }
   }
   require("lang/$_SESSION[lang].php");
      require_once ("config/pagefiles.php");
      if($_GET['skin']!=""){    //7.30
        $_SESSION['skin'] = $_GET['skin'];
      }
      //end for change language
      if(isset($_GET['page'])){
        $PageFile=getPageFile($_GET['page']);
      } else{
         $PageFile="mod/index/index.php";
      }
   ?>
<!DOCTYPE html>
<html>
   <head>
      <title>888 Defender</title>
      <meta name="viewport" content="width=1200">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <!-- <link rel="shortcut icon" href="images/gg.png"> -->
      <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css" type="text/css"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <link rel="stylesheet" href="time/css/normalize.min.css">
      <link rel='stylesheet' href="time/css/css.css">
      <link rel="stylesheet" href="css/style.css" type="text/css"/>
      <link rel="stylesheet" href="css/home.css" type="text/css"/>
      <link rel="stylesheet" href="css/mreset.css" type="text/css"/>
        <script src="js/jquery-3.2.1.min.js"></script>
        <script src="bootstrap/js/bootstrap.min.js"></script>
   </head>
   <body>
        <section class="box_right" style="right: -262px;">
            <div class="box_content_right">
                <ul class="info_country ims-contact">
                    <li><a class="phonecall" href="tel:+855888114312">+855 888 00 0000</a></li>
                    <li><a class="linechat" href="">Live Chat</a></li>
                    <li><a class="wechat" href="">Wechat</a></li>
                    <li><a class="whatapp" href="">+855 888 00 000</a></li>
                    <li><a class="email" href="mailto:support@0000.com">support@0000.com</a></li>
                </ul>
            </div>
            <a href="#" class="close floating-banner-right">
                <div class="title-container">
                    <span class="banner-icon"></span>
                    <p class="vertical-title">Contact us</p>
                </div>
            </a>
        </section>
        <section class="box_left" style="left: -160px;">
            <div class="box_content_left">
                <section class="list_games slotgame">
                    <div class="list_games-row">
                        <dl class="list_games-item mix_all" style="display: inline-block; opacity: 1;">
                            <dt class="list_games-icon">
                                <a href="">
                                    <img src="images/app.jpg" alt="" /><span class="casino_label">APP</span>
                                </a>
                            </dt>
                        </dl>

                        <dl class="list_games-item mix_all" style="display: inline-block; opacity: 1;">
                            <dt class="list_games-icon">
                                <a href="">
                                    <img src="images/ios.jpg" alt="" /><span class="casino_label">IOS</span>
                                </a>
                            </dt>
                        </dl>
                    </div>
                </section>
            </div>
            <a href="#" class="close floating-banner-left">
                <div class="title-container">
                    <span class="banner-icon"></span>
                    <p class="vertical-title">Download</p>
                </div>
            </a>
        </section>
        <div class="main">
            <header id="header" class="">
             <?php include 'config/include/header.php';?>
            </header>
                <?php include $PageFile; ?>
                <?php include 'config/include/footer.php';?>
        </div>
        <script src="time/js/stopExecutionOnTimeout.js"></script> 
        <script src="time/js/vue.min.js"></script> 
        <!-- Counter jackport js -->
        <script type="text/javascript" src="js/counter.js"></script>
        <!-- Custom  js -->
        <script id="rendered-js">
            var clock = new Vue({
                el: "#clock",
                data: {
                    time: "",
                    date: "",
                },
            });
            var week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
            var timerID = setInterval(updateTime, 1000);
            updateTime();
            function updateTime() {
                var cd = new Date();
                clock.time = zeroPadding(cd.getHours(), 2) + ":" + zeroPadding(cd.getMinutes(), 2) + ":" + zeroPadding(cd.getSeconds(), 2);
                clock.date = zeroPadding(cd.getFullYear(), 4) + "-" + zeroPadding(cd.getMonth() + 1, 2) + "-" + zeroPadding(cd.getDate(), 2) + " " + week[cd.getDay()];
            }
            function zeroPadding(num, digit) {
                var zero = "";
                for (var i = 0; i < digit; i++) {
                    zero += "0";
                }
                return (zero + num).slice(-digit);
            }
        </script>
        <script type="text/javascript">
          $('.section01 .tabBox').hide();
          $('.section01 .tabBox').eq(0).show();

          $('.section01 .tabUl li a').hover(function () {
          var ind = $(this).parent('li').index();
          $(this).parent('li').addClass('on').siblings().removeClass('on');
          $('.section01 .tabBox').hide();
          $('.section01 .tabBox:eq(' + ind + ')').show();
          return false;
          });
        </script>
        <script src="js/script.js" type="text/javascript"></script>
        <script src="js/popper.js" type="text/javascript"></script>
  </body>
</html>