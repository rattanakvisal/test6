<?php
session_start();
function getPageFile($PageName) {
	$pagefile="config/include/home.php";
	switch($PageName){
		case "register":
			$pagefile="mod/games/register.php";break;
		case "sport":
			$pagefile="mod/games/sport.php";break;
		case "casino":
			$pagefile="mod/games/casino.php";break;
		case "number":
			$pagefile="mod/games/number.php";break;
		case "lottery":
			$pagefile="mod/games/lottery.php";break;
		case "slot":
			$pagefile="mod/games/slot.php";break;
		case "poker":
			$pagefile="mod/games/poker.php";break;
		case "promotion":
			$pagefile="mod/games/promotion.php";break;
		case "cockfight":
			$pagefile="mod/games/cockfight.php";break;
		case "forex":
			$pagefile="mod/games/forex.php";break;
		case "promotion":
			$pagefile="mod/games/promotion.php";break;
		case "deposit":
			$pagefile="mod/games/deposit.php";break;
		default:
            $pagefile="mod/games/index.php";break;	    			
	} 
	return $pagefile;
}