import {FlatLine, line1, line2, line3, VerticalLine} from "./coins.js";

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

const coinPaths3 = [
    '../public/coins/coin5.svg',
    '../public/coins/coin10.svg',
    '../public/coins/coin5.svg',
    '../public/coins/coin3.svg',
    '../public/coins/coin11.svg',
    '../public/coins/coin3.svg',
    '../public/coins/coin10.svg',
];
const coinPaths2 = [
    '../public/coins/coin3.svg',
    '../public/coins/coin12.svg',
    '../public/coins/coin1.svg',
    '../public/coins/coin2.svg',
    '../public/coins/coin3.svg',
    '../public/coins/coin1.svg',
]
const coinPaths1 = [
    '../public/coins/coin7.svg',
    '../public/coins/coin6.svg',
    '../public/coins/coin5.svg',
    '../public/coins/coin13.svg',
    '../public/coins/coin7.svg',
    '../public/coins/coin6.svg',
]

class Adaptive {
    constructor() {
        this.main_for_desktop = document.getElementById('main');

        if (
            window.screen.width > 1000
            && window.screen.width < 1300
            && window.screen.height < 800
            && window.screen.height > 600
        ) {
            //1280x720
            // line1.stop()
            // line2.stop()
            // line3.stop()
            document.getElementById('object8').remove();
            document.getElementById('object9').remove();
            document.getElementById('object6').remove();

            document.getElementById('object18').remove();
            document.getElementById('object19').remove();
            document.getElementById('object20').remove();

            document.getElementById('object33').remove();
            document.getElementById('object32').remove();
            document.getElementById('object31').remove();

        }
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

        //making content
        let partner_button = document.getElementsByClassName('partner_button_div');
        partner_button[0].remove();
        partner_button = document.createElement('div');
        partner_button.setAttribute('class', 'partner_button');
        partner_button.insertAdjacentText('afterbegin', 'PARTNER');
        document.getElementsByClassName('sometext')[0].after(partner_button);

        let iterator = 0;
        for (let i = 1; i <= 3; i++) {
            const coins_N = document.createElement('div');
            coins_N.setAttribute('class', `coins${i}`);
            coins_N.setAttribute('id', `coins${i}`);
            partner_button.after(coins_N);

            function returnCoinsNames(i) {
                if (i === 1) return coinPaths1;
                if (i === 2) return coinPaths2;
                if (i === 3) return coinPaths3;
            }

            let coinsPaths = returnCoinsNames(i);

            coinsPaths.forEach((value) => {
                iterator++;
                const img = document.createElement('img');
                img.setAttribute('src', value);
                img.setAttribute('height', '175rem')
                const movingObject = document.createElement('div');
                movingObject.setAttribute('class', 'movingObject');
                movingObject.setAttribute('id', `object${iterator}`);
                movingObject.appendChild(img);
                coins_N.appendChild(movingObject);

            });

        }


        const f_line1 = new FlatLine(
            document.getElementById('coins1'),
            [
                document.getElementById('object1'),
                document.getElementById('object2'),
                document.getElementById('object3'),
                document.getElementById('object4'),
                document.getElementById('object5'),
                document.getElementById('object6'),
            ],
            0.3,
            [-1 * 190, 0, 190, 190 * 2, 190 * 4, 190 * 5],
        )
        const f_line2 = new FlatLine(
            document.getElementById('coins2'),
            [
                document.getElementById('object7'),
                document.getElementById('object8'),
                document.getElementById('object9'),
                document.getElementById('object10'),
                document.getElementById('object11'),
                document.getElementById('object12'),
            ],
            -2,
            [0, 190, 190 * 3, 190 * 4, 190 * 5, 190 * 6],
        );
        const f_line3 = new FlatLine(
            document.getElementById('coins3'),
            [
                document.getElementById('object13'),
                document.getElementById('object14'),
                document.getElementById('object15'),
                document.getElementById('object16'),
                document.getElementById('object17'),
                document.getElementById('object18'),
                document.getElementById('object19'),
            ],
            1,
            [-1 * 190, 0, 190, 190 * 2, 190 * 3, 190 * 4, 190 * 5],
        )

        const footer_container = document.getElementById('footer_container');
        footer_container.remove();
        document.getElementById('right_section').after(footer_container);

        const info_pages_spans = document
            .getElementById('info_pages')
            .querySelectorAll('span');
        for (let i = 0; i < info_pages_spans.length; i++) {
            info_pages_spans[i].remove();

        }
        const info_pages = document.getElementById('info_pages');


        info_pages.insertAdjacentHTML('afterbegin', `<span class="span_i"><a href="#">Brand Guide</a></span>`)
        info_pages.insertAdjacentHTML('afterbegin', `<span class="span_i"><a href="#">Careers</a></span>`)
        info_pages.insertAdjacentHTML('afterbegin', `<span class="span_i"><a href="#">Contacts</a></span>`)
        info_pages.insertAdjacentHTML('afterbegin', `<span class="span_i"><a href="#">Cookies</a></span>`)
        info_pages.insertAdjacentHTML('afterbegin', `<span class="span_i"><a href="#">Terms & Conditions</a></span>`)

        const social_media_area_elements = document
            .getElementById('social_media_area')
            .querySelectorAll('div');
        console.log(social_media_area_elements);
        const newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'media_icons');
        social_media_area_elements[0].after(newDiv);
        for (let i = 1; i < social_media_area_elements.length; i++) {
            let a = social_media_area_elements[i].children[0]
            let svg = a.children[0];
            svg.setAttribute('width', '96');
            svg.setAttribute('height', '96');
            newDiv.appendChild(social_media_area_elements[i]);
        }
        social_media_area_elements[1].insertAdjacentHTML('afterend',
            `<div class="facebook_icon"><a href="#"><img src="../public/facebook_icon.svg" height="96" width="96"></a></div>`
        );
        social_media_area_elements[2].insertAdjacentHTML('beforebegin',
            `<div class="instagram_icon"><a href="#"><img src="../public/instagram_icon.svg" height="96" width="96"></a></div>`
        )

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
