
function openDoor() {
    document.getElementsByClassName("left")[0].style = "transition: all 0.5s linear; transform: translateX(-100%);";
    document.getElementsByClassName("right")[0].style = "transition: all 0.5s linear; transform: translateX(100%);";
    document.getElementsByClassName("img_middle")[0].style = "transition: all 0.5s linear;display:none";
    document.getElementsByClassName("letter")[0].style = "transition: all 0.5s ease-in-out;height: max-content";
}
