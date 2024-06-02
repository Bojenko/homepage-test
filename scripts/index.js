import {makeBlubs, makeBlub} from "./blub.js";
//import {desktop} from "./adaptive";

function makeBrightly(element) {
    const g = element.childNodes;
    const path = g[1].childNodes;

    path[1].setAttribute('fill', "url(#paint0_linear_19178_179)")

}

function makeDarker(element) {
    const g = element.childNodes;
    const path = g[1].childNodes;

    path[1].setAttribute('fill', "#F97247")

}
// function buttonActive(button) {
//     button.style.backgroundColor = "rgba(25, 29, 10, 0.54)";
// }
//
// function buttonInactive(button) {
//     button.style.backgroundColor = "#191D0A";
// }

window.bodyLoading = () => {
    makeBlubs(10);
    // const o = orientation();
    // if (o === "portrait") makeMobile();
    // else makeDesktop();
}
window.makeBlub = makeBlub;
window.makeBrightly = makeBrightly;
window.makeDarker = makeDarker;

// window.addEventListener("resize", (event) => {
//     if (desktop) makeMobile();
//     else makeDesktop()
// })
