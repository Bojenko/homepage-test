
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

export const makeBlubs = (times)=> {
    for (let i = 0; i < times; i++) {
        makeBlub();
    }
}
