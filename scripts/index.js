import {makeBlubs, makeBlub} from "./blub.js";

function makeBrightly(element) {
    const g = element.childNodes;
    const path = g[1].childNodes;

    path[1].setAttribute('fill', "url(#paint0_linear_19178_179)")

}

console.log('I am module')

function makeDarker(element) {
    const g = element.childNodes;
    const path = g[1].childNodes;

    path[1].setAttribute('fill', "#F97247")

}


function buttonActive(button) {
    button.style.backgroundColor = "rgba(25, 29, 10, 0.54)";
}

function buttonInactive(button) {
    button.style.backgroundColor = "#191D0A";
}


const bodyLoading = () => {
    makeBlubs(10);
    // const o = orientation();
    // if (o === "portrait") makeMobile();
    // else makeDesktop();
}
window.bodyLoading = bodyLoading;
window.makeBlub = makeBlub;

// window.addEventListener("resize", (event) => {
//     const o = orientation();
//     if (o === "portrait") makeMobile();
//     else makeDesktop()
// })

// function makeMobile() {
//     const menu = document.getElementById("menu");
//     const lang_value = document.getElementById('lang_value');
//     const sign_in_button = document.getElementById('sign_in_button');
//     const sign_up_button = document.getElementById('sign_up_button');
//
//     sign_up_button.remove();
//     sign_in_button.remove();
//     menu.remove();
//     lang_value.remove();
//
//     const buttons = document.getElementById('buttons');
//     const menu_button = document.createElement('a');
//     const menu_icon = document.createElement('img');
//
//     menu_icon.setAttribute('scripts','menu_icon.svg');
//     menu_button.appendChild(menu_icon);
//     buttons.appendChild(menu_button);
//     menu_button.setAttribute('class','btn btn-4');
//     menu_button.setAttribute('href','#');
//
//     const coins = document.getElementById('coins');
//     coins.remove();
// }

// function makeDesktop() {
//     document.getElementById("menu").style.visibility = 'visible';
// }

