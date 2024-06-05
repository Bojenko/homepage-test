
export const makeBlub = (
    text = "Payment methods: Skrill, Neteller, webmoney, Bank transfer",
    date = "27.5.2024"
) => {
    if (date === "27.5.2024") {
        let currentDate = new Date();
        date = `${currentDate.getDate()}.${currentDate.getUTCMonth() + 1}.${currentDate.getFullYear()}`;
    }
    const blubWindow = document.getElementsByClassName("blub_window");

    const newBlubElement = document.createElement('div');
    const new_blub_text = document.createElement('div');
    const new_blub_date = document.createElement('div');

    new_blub_text.setAttribute('class', 'blub_text');
    new_blub_date.setAttribute('class', 'blub_date');
    newBlubElement.setAttribute('class', 'blub_element');

    newBlubElement.appendChild(new_blub_text);
    newBlubElement.appendChild(new_blub_date);

    new_blub_date.insertAdjacentText('afterbegin', date);
    new_blub_text.insertAdjacentText('afterbegin', text);

    blubWindow[0].appendChild(newBlubElement);
}

export const makeBlubs = ()=> {
    makeBlub(
        'Microsoft Designer теперь позволяет каждому создавать стикеры',
        '05.06.2024'
    );
    makeBlub(
        'В «Дзене» появился новый вид каналов с возможностью подписки',
        '05.06.2024'
    );
    makeBlub(
        'Google работает над расширением для Spotify для интеграции с Gemini',
        '05.06.2024'
    );
    makeBlub(
        'AMD запустила программу Bug Bounty с вознаграждением до $30 тысяч',
        '05.06.2024'
    );
    makeBlub(
        'Минпромторг заказал разработку аналога интегральной схемы Intel',
        '05.06.2024'
    );
}
