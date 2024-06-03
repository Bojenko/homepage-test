import {line1, line2, line3} from "./coins.js";

export const orientation = () => {
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    if (screenHeight > screenWidth) {
        desktop = false;
        return "portrait";
    } else {
        desktop = true;
        return "landscape";
    }
}


class Adaptive {
    constructor() {
        this.main_for_desktop = document.getElementById('main');
    }

    toMobile() {
        const main_for_mobile = this.main_for_desktop;
        main_for_mobile.setAttribute('class', 'main_mobile')
        this.main_for_desktop.remove();
        line1.hide();
        line2.hide();
        line3.hide();
        //replacing main
        document.body.appendChild(main_for_mobile);

        document.getElementById('menu')
            ?.remove();

        const lang_icon = document.getElementById('lang_icon');
        lang_icon.setAttribute('height', '50em')
        document.getElementById('lang_value')?.remove();
        document.getElementById('sign_in_button')?.remove();
        document.getElementById('sign_up_button')?.remove();

        const menuButton = document.createElement('div');
        menuButton.setAttribute('class', 'menu_button_mobile');
        menuButton.setAttribute('state', 'inactive');

        const menu_icon = document.createElement('img');
        menu_icon.setAttribute('src', "../public/menu_icon.svg");
        menu_icon.setAttribute('height', '90em')

        const close_icon = document.createElement('img');
        close_icon.setAttribute('src', "../public/close_icon.svg");
        close_icon.setAttribute('height', '90em')

        menuButton.appendChild(menu_icon);
        //menu window
        menuButton.addEventListener('click', function () {
            if (menuButton.getAttribute('state') === 'inactive') {
                menuButton.setAttribute('state', 'active');
                menu_icon.remove();
                menuButton.appendChild(close_icon);

                const popup_menu = document.createElement('div');
                popup_menu.setAttribute('class', 'popup_menu');
                popup_menu.setAttribute('id', 'popup_menu');
                document.getElementById('header').after(popup_menu);

                //creating popup menu
                const menu_items = new Map();
                [
                    'About us',
                    'Grand',
                    'Commissions',
                    'Blub',
                    'Contact us',
                    'Careers'
                ]
                    .forEach((value) => {
                        menu_items
                            .set(value, '#')

                    })
                for (let [key, value] of menu_items) {
                    let menu_element = document.createElement('div');
                    menu_element.setAttribute('class', 'popup_menu_element');
                    let a = document.createElement('a');

                    a.insertAdjacentText('afterbegin', key);
                    a.setAttribute('href', value)
                    menu_element.appendChild(a);
                    popup_menu.appendChild(menu_element);
                }
                const popup_menu_elements = document
                    .getElementsByClassName('popup_menu_element');

                const buttons_on_popup = document
                    .createElement('div');
                buttons_on_popup
                    .setAttribute('class', 'buttons_on_popup');

                popup_menu_elements[popup_menu_elements.length - 1]
                    .after(buttons_on_popup);


                //login button
                const login_button = document
                    .createElement('a');
                login_button
                    .setAttribute('href', '#');
                login_button
                    .setAttribute('class', 'login_button btn-4');
                login_button
                    .setAttribute('id', 'sign_in_button');
                login_button.insertAdjacentText('afterbegin', 'LOG IN');
                buttons_on_popup.appendChild(login_button);

                const sign_button = document
                    .createElement('a');
                sign_button
                    .setAttribute('href', '#');
                sign_button
                    .setAttribute('class', 'signup_button btn-4');
                sign_button
                    .setAttribute('id', 'sign_up_button');
                sign_button.insertAdjacentText('afterbegin', 'SIGN UP');
                buttons_on_popup.appendChild(sign_button);


            } else {
                document.getElementById('popup_menu').remove();
                menuButton.setAttribute('state', 'inactive');
                close_icon.remove();
                menuButton.appendChild(menu_icon);
            }
        })
        document.getElementById('buttons')?.appendChild(menuButton);


    }

    toDesktop() {
        document.getElementById('main_for_mobile')?.remove();
        document.body.appendChild(this.main_for_desktop);
        line1.show();
        line2.show();
        line3.show();
    }
}


export var desktop = orientation() !== 'portrait';


export const _interface = new Adaptive();

window.addEventListener('resize', function (ev) {
    orientation();
    if (desktop) _interface.toDesktop();
    else _interface.toMobile();
})
