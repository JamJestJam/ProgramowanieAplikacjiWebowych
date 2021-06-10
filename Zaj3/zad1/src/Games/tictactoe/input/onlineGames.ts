import Input from "./input";

class OnlineGames {
    div: HTMLDivElement = document.createElement('div');

    constructor(createFn: () => void) {
        const table = document.createElement('table');
        const header = document.createElement('tr');
        const name = document.createElement('td');
        const start = document.createElement('td');
        const span = document.createElement('span');
        const inputName = new Input("Nazwa servera", "serverName", "text");
        const btn = document.createElement('button');

        span.innerText = "gry online";
        table.id = "table";
        name.innerText = "Nazwa servera";
        start.innerText = "Graj";
        btn.innerText = "Stwórz server";
        btn.addEventListener('click', createFn);

        this.div.appendChild(span);
        this.div.appendChild(table);
        this.div.appendChild(inputName.element);
        this.div.appendChild(btn);
        header.appendChild(name);
        header.appendChild(start);

        table.appendChild(header);
    }
}

export default OnlineGames;