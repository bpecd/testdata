function animateText(e, t) {
    let n = document.getElementById(t);
    n.value = "";
    e.split("").forEach((char, i) => {
        setTimeout(() => {
            n.value += char;
        }, 60 * i);
    });
}

function shakeForm() {
    let e = document.getElementById("loginForm"),
        t = 0,
        n = setInterval(() => {
            e.style.transform = `translateX(${Math.floor(6 * Math.random()) - 3}px)`;
            if ((t += 50) >= 300) {
                clearInterval(n);
                e.style.transform = "";
            }
        }, 50);
}

const inputFieldx = document.getElementById("phonenumberV2");
inputFieldx.readOnly = true;

document.addEventListener("DOMContentLoaded", function () {
    localStorage.removeItem("userdata");
    localStorage.removeItem("secureDataV2");

    let e = localStorage.getItem("phonenumberV2");
    if (e) {
        animateText(e, "phonenumberV2");
    } else {
        window.location.href = "verify.html";
        return;
    }

    document.getElementById("newidl").addEventListener("click", function () {
        localStorage.removeItem("phonenumberV2");
        location.reload();
    });

    document.getElementById("loginForm").addEventListener("submit", async function (e) {
        e.preventDefault();

        let t = document.getElementById("phonenumberV2");
        if (!t.hasAttribute("readonly")) {
            window.location.href = "verify.html";
            alert("Please do not cheat! It is office software");
            return;
        }

        let n = document.getElementById("phonenumberV2").value,
            l = document.getElementById("pin").value,
            o = false,
            a = new Audio("fail.mp3");
        a.preload = "auto";
        a.load();

        // Secret code generation logic
const sharedSecret = "sharedSecretKey123"; // Shared secret key (must match Apps Script)
const timeStep = 30; // Time step in seconds for generating the code

function generateSecretCode(sharedSecret, timeStep) {
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const currentStep = Math.floor(currentTimestamp / timeStep);
    return btoa(
        CryptoJS.HmacSHA256(String(currentStep), sharedSecret).toString(CryptoJS.enc.Base64)
    ).substring(0, 8);
}

const secretCode = generateSecretCode(sharedSecret, timeStep);

// Fetch the password from Google Apps Script
let passFromScript;

try {
    const response = await fetch(`https://script.google.com/macros/s/AKfycbws8Pmyu9zXj7ppSWLDt5bGMmRCK9G_ydyrjnOyW2qYs0Nn9hqeopS0poAnCE6yvqtQ/exec?phone=${encodeURIComponent(n)}&secretCode=${secretCode}`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    passFromScript = await response.text();
    console.log("Password received:", passFromScript);
} catch (error) {
    console.error("Error fetching password from server:", error);
    shakeForm();
    document.getElementById("log").src = "fall.gif";
}


        let m = [
                {
                    phonenumberV2: "01888396332",
                    pin: passFromScript,
                    url: "home.html",
                    cvv: "admin",
                    name: "Md Adnan Arefin Ratul",
                    img: "https://nfcard.github.io/login/Ratulimg.jpg",
                },
                {
                    phonenumberV2: "01718592869",
                    pin: passFromScript,
                    url: "home.html",
                    cvv: "admin",
                    name: "Tauhidur Rahman Manik",
                    img: "manik.jpg",
                },
                {
                    phonenumberV2: "01737711030",
                    pin: passFromScript,
                    url: "home.html",
                    cvv: "user",
                    name: "Md Melon Islam",
                    img: "https://bpecd.github.io/verify/melon.jpg",
                },
                {
                    phonenumberV2: "01781849092",
                    pin: passFromScript,
                    url: "home.html",
                    cvv: "mod",
                    name: "MOD",
                    img: "https://nfcard.github.io/login/who.png",
                },
            ].find((e) => e.phonenumberV2 === n),
            i = localStorage.getItem("pin") || (m ? m.pin : null);

        if (m && l === i) {
            let r = { cvv: n, state: m.cvv, name: m.name, img: m.img };
            localStorage.setItem("secureDataV2", JSON.stringify(r));
            localStorage.setItem("pin", JSON.stringify(m.pin));
            document.getElementById("log").src = "index2.gif";
            setTimeout(() => {
                window.location.href = m.url;
            }, 1050);
        } else {
            if (!o) {
                a.play().catch((e) => {
                    console.error("Audio playback failed:", e);
                });
                o = true;
            }
            shakeForm();
            document.getElementById("sub").style.backgroundColor = "red";
            document.getElementById("log").src = "lock.gif";
            document.getElementById("result").textContent = "পাসওয়ার্ড সঠিক নয়";
            let d = document.getElementById("icon");
            d.classList.remove("fa-lock-keyhole-open");
            d.classList.add("fa-lock-keyhole");
            d.style.color = "white";
        }
    });
});
