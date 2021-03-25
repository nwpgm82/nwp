window.addEventListener("keyup", (event) => {
    console.log(event.key);
    if ((event.key == "Enter") && document.querySelector(".start_page").style.display != "none") {
        main_text()
    }else if((event.key == "ArrowLeft" || event.key == "a") && document.querySelector(".start_page").style.display == "none"){
        profile_Lclick_scroll()
    }else if((event.key == "ArrowRight" || event.key == "d") && document.querySelector(".start_page").style.display == "none"){
        profile_Rclick_scroll()
    }else if((event.key == "Backspace") && document.querySelector(".start_page").style.display == "none" && document.querySelector(".profile_page").scrollLeft != 0){
        document.querySelector(".profile_page").scrollLeft = 0
    }else if((event.key == "Backspace") && document.querySelector(".start_page").style.display == "none" && document.querySelector(".profile_page").scrollLeft == 0){
        start_text()
    }
})

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.profile_page');
    let isDown = false;
    let startX;
    let scrollLeft;
    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX);
        if(walk > 150){
            profile_Lclick_scroll()
        }else if(walk < -150){
            profile_Rclick_scroll()
        }
    });
});
const start_text = () => {
    let start_text = document.querySelector(".start_text")
    let topbar = document.querySelector(".topbar")
    let start_page = document.querySelector(".start_page")
    let profile_page = document.querySelector(".profile_page")
    document.querySelector('.profile_page').scrollLeft = 0
    topbar.style.top = "-60px"
    profile_page.style.animation = "profile_page_close 1s"
    setTimeout(() => profile_page.style.display = "", 900)
    setTimeout(() => start_page.style.display = "", 480)
    start_text.style.animation = "start_text_end 1s"
    setTimeout(() => topbar.style.top = "0px", 1500)
}
const main_text = () => {
    let start_text = document.querySelector(".start_text")
    let topbar = document.querySelector(".topbar")
    let profile_page = document.querySelector(".profile_page")
    let start_page = document.querySelector(".start_page")
    topbar.style.transitionDuration = "0.5s"
    topbar.style.top = "-60px"
    setTimeout(() => document.querySelector('.profile_page').scrollLeft = 0, 500)
    start_text.style.animation = "start_text_start 1s"
    setTimeout(() => start_page.style.display = "none", 900)
    setTimeout(() => profile_page.style.display = "grid", 480)
    profile_page.style.animation = "profile_page 1s"
    setTimeout(() => topbar.style.top = "0px", 1500)
}

const profile_text = () => {
    if(document.querySelector('.profile_page').scrollLeft != 1440){
        let start_text = document.querySelector(".start_text")
        let topbar = document.querySelector(".topbar")
        let profile_page = document.querySelector(".profile_page")
        let start_page = document.querySelector(".start_page")
        topbar.style.transitionDuration = "0.5s"
        topbar.style.top = "-60px"
        setTimeout(() => document.querySelector('.profile_page').scrollLeft = 1440, 500)
        start_text.style.animation = "start_text_start 1s"
        setTimeout(() => start_page.style.display = "none", 900)
        setTimeout(() => profile_page.style.display = "grid", 480)
        profile_page.style.animation = "profile_page 1s"
        setTimeout(() => topbar.style.top = "0px", 1500)
    }
}

const profile_scroll = () => {
    if (document.querySelector(".profile_page").scrollLeft > 0) {
        document.querySelector(".Larrow").style.display = "block"
    } else if (document.querySelector(".profile_page").scrollLeft == 0) {
        document.querySelector(".Larrow").style.display = ""
    }
    if (document.querySelector(".profile_page").scrollLeft >= 4320) {
        document.querySelector(".Rarrow").style.display = "none"
    }else{
        document.querySelector(".Rarrow").style.display = ""
    }
    console.log(document.querySelector(".profile_page").scrollLeft);
}

const profile_Lclick_scroll = () => {
    if(document.querySelector(".profile_page").scrollLeft > 4320){
        document.querySelector(".profile_page").scrollLeft = 4320
    }else if(document.querySelector(".profile_page").scrollLeft > 2880){
        document.querySelector(".profile_page").scrollLeft = 2880
    }else if(document.querySelector(".profile_page").scrollLeft > 1440){
        document.querySelector(".profile_page").scrollLeft = 1440
    }else{
        document.querySelector(".profile_page").scrollLeft = 0
    }
}

const profile_Rclick_scroll = () => {
    if(document.querySelector(".profile_page").scrollLeft < 1440){
        document.querySelector(".profile_page").scrollLeft = 1440
    }else if(document.querySelector(".profile_page").scrollLeft < 2880){
        document.querySelector(".profile_page").scrollLeft = 2880
    }else if(document.querySelector(".profile_page").scrollLeft < 4320){
        document.querySelector(".profile_page").scrollLeft = 4320
    }
}

const project_text = () => {
    if(document.querySelector('.profile_page').scrollLeft != 2880){
        let start_text = document.querySelector(".start_text")
        let topbar = document.querySelector(".topbar")
        let profile_page = document.querySelector(".profile_page")
        let start_page = document.querySelector(".start_page")
        topbar.style.transitionDuration = "0.5s"
        topbar.style.top = "-60px"
        setTimeout(() => document.querySelector('.profile_page').scrollLeft = 2880, 500)
        start_text.style.animation = "start_text_start 1s"
        setTimeout(() => start_page.style.display = "none", 900)
        setTimeout(() => profile_page.style.display = "grid", 480)
        profile_page.style.animation = "profile_page 1s"
        setTimeout(() => topbar.style.top = "0px", 1500)
    }
}

const gallery_text = () => {
    if(document.querySelector('.profile_page').scrollLeft != 4320){
        let start_text = document.querySelector(".start_text")
        let topbar = document.querySelector(".topbar")
        let profile_page = document.querySelector(".profile_page")
        let start_page = document.querySelector(".start_page")
        topbar.style.transitionDuration = "0.5s"
        topbar.style.top = "-60px"
        setTimeout(() => document.querySelector('.profile_page').scrollLeft = 4320, 500)
        start_text.style.animation = "start_text_start 1s"
        setTimeout(() => start_page.style.display = "none", 900)
        setTimeout(() => profile_page.style.display = "grid", 480)
        profile_page.style.animation = "profile_page 1s"
        setTimeout(() => topbar.style.top = "0px", 1500)
    }
}