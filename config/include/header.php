<div class="header-top">
    <div class="wrapper">
        <ul class="top-nav top-nav-right">
            <li id="clock" class="board">
                <span class="date">{{ date }}</span>&nbsp; / &nbsp;<span class="time">{{ time }}</span> / 
            </li>
            <li class="language" select-language="">
                <span title="简体中文" data-language="zh-CN" class="ng-scope"></span>
                <span title="繁体中文" data-language="zh-TW" class="ng-scope"></span>
                <span title="English" data-language="en-US" class="ng-scope"></span>
                <span title="ภาษาไทย" data-language="th" class="ng-scope"></span>
            </li>
        </ul>
    </div>
</div>
<div class="header-middle">
    <nav id="nav">
        <div id="logo-bg">
            <a href="index.php"><img src="images/logo.png"></a>
        </div>
        <ul class="ng-scope">
            <li class="home">
                <a href="index.php">Home</a>
            </li>
            <li class="hot sport">
                <a href="index.php?page=sport">SPORTS</a>
                <div class="subnav col12 sport">
                    <ol id="sport">
                        <li game-box="afb">AFB Sports</li>
                        <li game-box="afb2">AFB2 Sports</li>
                        <li game-box="sbo">SBO Sports</li>
                        <li game-box="ibc">IBC Sports</li>
                        <li game-box="tf">TF E-SPORTS</li>
                        <li game-box="hr">HORSE RACING</li>                
                    </ol>
                </div>
            </li>
            <li class="live">
                <a href="index.php?page=casino">Casino</a>
                <div class="subnav live col3">
                    <ol id="live1">
                        <li game-box="gd">GD CASINO</li>
                        <li game-box="dg99">DG99 CASINO</li>
                        <li game-box="wm">WM CASINO</li>
                        <li game-box="sexy">SEXY CASINO</li>
                        <li game-box="ag">AG CASINO</li>
                        <li game-box="allbet">ALLBET CASINO</li>
                        <li game-box="w88">W88 CASINO</li>
                        <li game-box="sa">SA CASINO</li>
                    </ol>
                    <ol class="last-ol" id="live2">
                        <li game-box="gold">GOLD CASINO</li>
                        <li game-box="evo">EVO CASINO</li>
                        <li game-box="hbo">HONGBO CASINO</li>
                        <li game-box="hg">HG CASINO</li>
                        <li game-box="miki">MIKI CASINO</li>
                        <li game-box="n2">N2live CASINO</li>
                        <li game-box="tga">TGA CASINO</li>
                    </ol>
                </div>
            </li>
            <li class="hot slot">
                <a href="index.php?page=slot">Slots</a>
                <div class="subnav col3 slot">
                    <ol id="slot1">
                        <li game-box="fishing" >FISHING</li>
                        <li game-box="bg">BG SLOTS</li>
                        <li game-box="pt">PT SLOTS</li>
                        <li game-box="mg">MG SLOTS</li>
                        <li game-box="haba">HABA SLOTS</li>
                        <li game-box="w88">W88 SLOTS</li>
                        <li game-box="gold">GOLD SLOTS</li>
                        <li game-box="joker123">JOKER123 SLOTS</li>
                        <li game-box="sa">SA GAMING</li>
                        <li game-box="netent">NETENT SLOTS</li>
                    </ol>
                    <ol class="last-ol" id="slot2">
                        <li game-box="pplay">PPLAY STOTS</li>
                        <li game-box="playstar">PLAYSTAR SLOTS</li>
                        <li game-box="mega">MEGA888 SLOTS</li>
                        <li game-box="dragon">DRAGON SLOTS</li>
                        <li game-box="pg">PG SLOTS</li>
                        <li game-box="bs">BESTSOFT SLOTS</li>
                        <li game-box="bbin">BBIN SLOTS</li>
                        <li game-box="nextgen">NEXTGEN SLOTS</li>
                        <li game-box="cq9">CQ9 SLOTS</li>
                        <li game-box="icg">ICG SLOTS</li>
                    </ol>
                </div>
            </li>
            <li class="lottery">
                <a href="index.php?page=lottery">Lottery</a>
                <ol class="subnav lottery" id="lottery">
                    <li game-box="lottery">LOTTERY</li>
                    <li game-box="thai">THAI LOTTERY</li>
                    <li game-box="vn">VN LOTTERY</li>
                </ol>
            </li>
            <li class="number">
                <a href="index.php?page=number">Number</a>
                <ol class="subnav number" id="number">
                    <li game-box="num">Number</li>
                    <li game-box="live_num">Live Number</li>
                    <li game-box="keno">Keno</li>
                    <li game-box="new_keno">New Keno</li>
                </ol>
            </li>
            <li class="cockfight">
                <a href="index.php?page=cockfight">Cockfight</a>
                <ol class="subnav cockfight" id="cockfight">
                    <li game-box="cock">COCKFIGHT</li>
                    <li game-box="cocksv">COCKFIGHT(SV388)</li>
                </ol>
            </li>
            <li class="poker">
                <a href="index.php?page=poker">Poker</a>
                <ol class="subnav poker" id="poker">
                    <li game-box="ongdo">ONGDO</li>
                    <li game-box="poke">POKE</li>
                    <li game-box="ham">HAM</li>
                    <li game-box="tienlen">TIENLEN</li>
                    <li game-box="klaklouk">KLAKLOUK</li>
                    <li game-box="sikuthai">SIKUTHAI</li>
                    <li game-box="kate">KATE</li>
                    <li game-box="apoung">APOUNG</li>
                    <li game-box="ky">kaiyuan</li>
                    <li game-box="we1">We1poker</li>
                </ol>
            </li>
            <li class="forex">
                <a href="index.php?page=forex">Forex</a>
            </li>
            <li class="hot promotion">
                <a href="index.php">Promotion</a>
            </li>
        </ul>
    </nav>
</div>
<div class="header-bottom">
    <div class="wrapper">
        <div id="account-box">
           <!--  <div class="slogan"></div> -->
            <form class="ng-scope ng-invalid ng-invalid-required ng-dirty" onsubmit="return false">
                <div class="input-wrapper input-account">
                    <input id="loginUsername" type="text" placeholder="Username" required="" autofocus="" class="ng-dirty ng-valid ng-valid-required" />
                </div>
                <div class="input-wrapper input-password">
                    <input id="loginUserpwd" type="password" placeholder="Password" required="" class="ng-dirty ng-valid ng-valid-required" />
                </div>
                <div id="check-code-wrapper" class="input-wrapper input-captcha">
                    <input id="loginUsercode" type="text" placeholder="Code"/>
                     <div class="code-numb">12345</div>
                </div>
                <div class="input-wrapper input-login">
                    <button id="login-box" class="btn-login ng-binding">Login</button>
                    <a href="" class="btn-reg" type="button">Register</a>
                </div>
            </form>
        </div>
    </div>
</div>
<div class="free_reg"><a href=""></a></div>
<div class="new"><a href=""></a></div>

