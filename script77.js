let progress = 0;

const bar = document.getElementById("progress");

let loading = setInterval(() => {

    progress++;

    bar.style.width = progress + "%";

    if(progress >= 100){

        clearInterval(loading);

        document.getElementById("loading-screen").style.display = "none";

        document.getElementById("main-content").style.display = "flex";

        startTyping();
    }

},40);

const message = `

Mummaaaa ❤️

Ye website kisi template se nahi bani...

Ye meri yaadon se bani hai...

Har page...

Har line...

Har animation...

Sirf tumhare liye.

`;

let i = 0;

function startTyping(){

    const typingBox = document.getElementById("typing");

    function type(){

        if(i < message.length){

            typingBox.innerHTML += message.charAt(i);

            i++;

            setTimeout(type,50);

        }
        else{

            document.getElementById("startBtn").style.display = "inline-block";

        }

    }

    type();
}

document.getElementById("startBtn").addEventListener("click",()=>{

    document.getElementById("main-content").style.display="none";

    document.getElementById("scene2").style.display="flex";
    document.getElementById("scene2").classList.add("scene-transition");
    updateChapter("Chapter 1 🌸 First Memory");
    document.getElementById("scene2").classList.add("scene-fade");

    createStars();

    startScene2();

});
function createStars(){

    const scene2 = document.getElementById("scene2");
    

    for(let i=0;i<120;i++){

        let star = document.createElement("div");

        star.classList.add("star");

        let size = Math.random()*3;

        star.style.width = size + "px";
        star.style.height = size + "px";

        star.style.left = Math.random()*100 + "%";
        star.style.top = Math.random()*100 + "%";

        scene2.appendChild(star);
    }
}

function startScene2(){

    const text = `
Sab kuch shuru hone se pehle...

Ek yaad hai jo sirf mujhe yaad hai.

 gaon ka kirtan...

Bahut saare log...

Aur phir...

Maine tumhe dekha.

Green dress me. 🌸


Lekin pata nahi kyun...

Main tumhe bhool nahi paya. ❤️
`;

    let i = 0;

    const box = document.getElementById("scene2Text");

    function type(){

        if(i < text.length){

            box.innerHTML += text.charAt(i);

            i++;

            setTimeout(type,40);

        }else{

            document.getElementById("nextSceneBtn").style.display = "inline-block";

        }
    }

    type();
}
document.getElementById("nextSceneBtn").addEventListener("click",()=>{

    document.getElementById("scene2").style.display="none";

    document.getElementById("scene3").style.display="flex";
    document.getElementById("scene3").classList.add("scene-transition");
    updateChapter("Chapter 2 💬 First Chat");

    startScene3();

});
function startScene3(){

    const msg1 = document.getElementById("msg1");
    const msg2 = document.getElementById("msg2");

    setTimeout(()=>{

        msg1.style.opacity="1";

    },1000);

    setTimeout(()=>{

        msg2.style.opacity="1";

    },2500);

    setTimeout(()=>{

        typeScene3Text();

    },4000);

}
function typeScene3Text(){

const text = `

19 June 2022 ❤️

Ek simple sa "Hey"

Aur ek cute sa

"Hello Bhhiya 😋"

Kaun jaanta tha...

Ki ye chhoti si chat

meri zindagi ki sabse khoobsurat kahani ban jayegi.

`;

let i = 0;

const box = document.getElementById("scene3Text");

function type(){

    if(i < text.length){

        box.innerHTML += text.charAt(i);

        i++;

        setTimeout(type,40);

    }else{

        document.getElementById("scene3Btn").style.display="inline-block";

    }

}

type();

}
document.getElementById("scene3Btn").addEventListener("click",()=>{

    document.getElementById("scene3").style.display="none";

    document.getElementById("scene4").style.display="flex";
    document.getElementById("scene4").classList.add("scene-transition");
    updateChapter("Chapter 3 🇮🇳 First Meeting");

    startScene4();

});
function startScene4(){

const text = `

15 August 2022 🇮🇳

Hum dono milne wale the.

Sach bolu...

Main bahut nervous tha. 😭

Chat me toh sab easy lagta tha...

Lekin tum mere saamne thi.

Aur pata nahi kyun...

Saare words gayab ho gaye.

Sabse funny baat?

Sirf main hi nervous nahi tha.

Tum bhi utni hi nervous thi. 😂❤️

Hum dono ek dusre ko dekh rahe the...

Lekin baat koi nahi kar raha tha.

Na tum kuch bol paayi...

Na main kuch bol paya...

Aur shayad isi wajah se...

Woh moment itna special ban gaya.

Aaj bhi yaad karta hu...

Toh hasi bhi aati hai...

Aur pyaar bhi. ❤️

`;

let i = 0;

const box = document.getElementById("scene4Text");

function type(){

    if(i < text.length){

        box.innerHTML += text.charAt(i);

        i++;

        setTimeout(type,40);

    }
    else{

        document.getElementById("scene4Btn").style.display="inline-block";

    }

}

type();

}
document.getElementById("scene4Btn").addEventListener("click",()=>{

    document.getElementById("scene4").style.display="none";
    updateChapter("Chapter 3 🇮🇳 First Meeting");

    document.getElementById("scene5").style.display="flex";
    document.getElementById("scene5").classList.add("scene-transition");
    updateChapter("Chapter 4 📞 First Call");

    startScene5();

});
function startScene5(){

const text = `

3 October 2022 ❤️

Ek normal din tha...

Lekin mere liye bahut special ban gaya.

kiyuki aaj humara call pe baat hua...

Us call ki sabse yaadgaar baat?

Tumne kaha...

"Ek gana sunao..." 🎵

Us waqt shayad tumhe andaza bhi nahi tha...

Ki main kitna nervous tha. 😂

Main gana ga raha tha...

Lekin dil ki dhadkan usse zyada tez chal rahi thi.

Woh sirf ek call nahi thi...

Woh ek memory thi.

Ek aisi memory...

Jo aaj bhi yaad aati hai toh smile aa jati hai. ❤️

`;

let i = 0;

const box = document.getElementById("scene5Text");

function type(){

    if(i < text.length){

        box.innerHTML += text.charAt(i);

        i++;

        setTimeout(type,40);

    }else{

        document.getElementById("scene5Btn").style.display="inline-block";

    }

}

type();

}
document.getElementById("scene5Btn").addEventListener("click",()=>{

    document.getElementById("scene5").style.display="none";

    document.getElementById("scene6").style.display="flex";
    document.getElementById("scene6").classList.add("scene-transition");
    updateChapter("Chapter 5 📸 First Photo");

    startScene6();

});
function startScene6(){

const text = `

26 January 2023 ❤️

Saraswati Puja.

Aur phir...

Hamari pehli photo saath me.

Logon ke liye shayad ye sirf ek photo ho.

Lekin mere liye...

Ye ek memory hai.

Ek aisi memory jise main kabhi bhool nahi sakta.

Jab bhi main is photo ko dekhta hu...

Mujhe sirf ek tasveer nahi dikhti.

Mujhe woh din yaad aata hai.

Woh feeling yaad aati hai.

Aur woh smile yaad aati hai...

Jo aaj bhi mere dil me basi hui hai. 🌸❤️

`;

let i = 0;

const box = document.getElementById("scene6Text");

function type(){

    if(i < text.length){

        box.innerHTML += text.charAt(i);

        i++;

        setTimeout(type,40);

    }else{

        document.getElementById("scene6Btn").style.display="inline-block";

    }

}

type();

}

document.getElementById("scene6Btn").addEventListener("click",()=>{

    document.getElementById("scene6").style.display="none";

    document.getElementById("scene7").style.display="flex";
    document.getElementById("scene7").classList.add("scene-transition");
    updateChapter("Chapter 6 🎁 First Gift");

});
document.getElementById("giftBox").addEventListener("click",()=>{

document.getElementById("giftText").innerHTML=`

<h2>🍫 First Chocolate</h2>

<p>

Mujhe yaad hai...

Tumhara pehla gift.

Chocolate shayad chhoti thi...

Lekin uske peeche jo feeling thi...

Woh bahut badi thi.

Aur shayad isi liye...

Main aaj bhi us memory ko sambhal kar rakha hu. ❤️

</p>

`;

document.getElementById("scene7Btn").style.display="inline-block";

});
document.getElementById("scene7Btn").addEventListener("click",()=>{

    document.getElementById("scene7").style.display="none";

    document.getElementById("scene8").style.display="flex";
    document.getElementById("scene8").classList.add("scene-transition");
    updateChapter("Chapter 7 ❤️ Confession");

    startScene8();

});
function startScene8(){

const text = `

Mujhe exact date yaad nahi...

Lekin mujhe woh feeling yaad hai. ❤️

Bahut himmat karke...

Maine tumhe pehli baar

"I Love You"

bola tha.

Us waqt mujhe nahi pata tha...

Tum kya jawab dogi.

Main bas itna jaanta tha...

Ki jo feel karta hu...

Woh sach hai.

Aur phir...

Ek din woh hua...

Jiski maine sirf umeed ki thi.

Tum mere saamne thi.

Aur phir tumne kaha...

"I Love You" ❤️

Sach kahu...

Main us moment ke liye ready hi nahi tha.

Main sharma gaya tha. 😂

Bilkul chup.

Aur phir maine dheere se kaha...

"I Love You Too" ❤️

Us moment ke baad...

Sab kuch pehle jaisa tha.

Lekin phir bhi...

Sab kuch badal chuka tha.

`;

let i = 0;

const box = document.getElementById("scene8Text");

function type(){

    if(i < text.length){

        box.innerHTML += text.charAt(i);

        i++;

        setTimeout(type,3);

    }
    else{

        document.getElementById("scene8Btn").style.display="inline-block";

    }

}

type();

}
document.getElementById("scene8Btn").addEventListener("click",()=>{

    document.getElementById("scene8").style.display="none";

    document.getElementById("scene9").style.display="flex";
    document.getElementById("scene9").classList.add("scene-transition");
    updateChapter("Chapter 8 💌 Why I Love You");

});
const cards = document.querySelectorAll(".love-card");

cards.forEach(card=>{

    card.addEventListener("click",()=>{

        document.getElementById("reasonBox").innerHTML =
        card.dataset.text;

        document.getElementById("scene9Btn").style.display =
        "inline-block";

    });

});
document.getElementById("scene9Btn").addEventListener("click",()=>{

    document.getElementById("scene9").style.display="none";

    document.getElementById("scene10").style.display="flex";
    document.getElementById("scene10").classList.add("scene-transition");
    updateChapter("Chapter 9 🌙 What If");

    startScene10();

});
function startScene10(){

const text = `

Ek second ke liye socho...

Agar hum kabhi mile hi na hote...

Na woh Instagram message hota...

Na woh pehli call hoti...

Na woh 15 August wali nervous meeting...

Na woh Saraswati Puja wali photo...

Na woh chocolate...

Na woh memories...

Aur shayad...

Meri zindagi ka sabse khoobsurat hissa bhi na hota.

...

Lekin phir mujhe yaad aata hai...

Ye sab sirf ek imagination hai.

Kyuki hum mile the. ❤️

Aur meri zindagi us din se pehle jaisi nahi rahi.

Thankfully...

Ye hamari story nahi hai. 🌸❤️

`;

let i = 0;

const box = document.getElementById("scene10Text");

function type(){

    if(i < text.length){

        box.innerHTML += text.charAt(i);

        i++;

        setTimeout(type,40);

    }else{

        document.getElementById("scene10Btn").style.display="inline-block";

    }

}

type();

}
document.getElementById("scene10Btn")
.addEventListener("click",()=>{

    document.getElementById("scene10")
    .style.display="none";

    document.getElementById("memorySky")
    .style.display="block";
    document.getElementById("memorySky").classList.add("scene-transition");
    updateChapter("Chapter 10 🌌 Memories Sky");

});


const stars = document.querySelectorAll(".memory-star");

let openedStars = 0;

stars.forEach(star=>{

    star.addEventListener("click",()=>{

        document.getElementById("memoryText")
        .innerHTML = star.dataset.memory;

        if(!star.classList.contains("opened")){

            star.classList.add("opened");

            openedStars++;

        }

        if(openedStars === 10){

            document.getElementById("goldenStar")
            .style.display = "block";
            updateChapter("Final Chapter ❤️ Forever");

        }

    });

});
document.getElementById("goldenStar")
.addEventListener("click",()=>{

document.getElementById("memoryText")
.innerHTML = `

🌟 Secret Memory 🌟

Agar mujhe dobara zindagi mile...

Aur lakhon logon me se
sirf ek ko choose karna ho...

Toh main phir se tumhe hi choose karunga. ❤️

`;

document.getElementById("memorySkyBtn")
.style.display = "inline-block";

});
document.getElementById("memorySkyBtn")
.addEventListener("click",()=>{

    document.getElementById("memorySky")
    .style.display="none";

    document.getElementById("finalScene")
    .style.display="block";
document.getElementById("finalScene").classList.add("scene-transition");
});
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click",()=>{

    if(music.paused){

        music.play();
        musicBtn.innerHTML="⏸ Pause Music";

    }
    else{

        music.pause();
        musicBtn.innerHTML="🎵 Play Music";

    }

});
function createHearts(){

    setInterval(()=>{

        let heart=document.createElement("div");

        heart.className="floating-heart";

        heart.innerHTML="❤️";

        heart.style.left=Math.random()*100+"%";

        heart.style.animationDuration=
        (5+Math.random()*5)+"s";

        document.body.appendChild(heart);


        setTimeout(()=>{

            heart.remove();

        },8000);


    },800);

}

createHearts();
const chapter=document.getElementById("chapter");

function updateChapter(text){

    chapter.innerHTML=text;
    chapter.style.display="block";

}
function startLetterTyping(){

const text = `

Mummaaaa ❤️

Pata hai...

Main perfect nahi hu.

Lekin ek cheez kabhi fake nahi thi...

Aur woh hai mera pyaar.

Tum meri favourite memory ho.

Meri favourite person ho.

Aur meri zindagi ki sabse khoobsurat kahani ho. ❤️


Forever Yours,
Karan 🌸

`;

let i=0;

const box=document.getElementById("letterText");

function type(){

    if(i < text.length){

        box.innerHTML += text.charAt(i);

        i++;

        setTimeout(type,40);

    }

}

type();

}
startLetterTyping();
document.getElementById("galleryOpenBtn")
.addEventListener("click",()=>{

    document.getElementById("finalScene")
    .style.display="none";

    document.getElementById("photoGallery")
    .style.display="block";

});