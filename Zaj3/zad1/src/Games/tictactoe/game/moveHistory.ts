import Field from "./field";

const storageName = "moveHistory"

class MoveHistory {
    constructor() {
        this.clear();
    }

    clear() {
        sessionStorage.setItem(storageName, JSON.stringify([]))
    }

    saveMove(field: Field) {
        const storage: Field[] = JSON.parse(sessionStorage.getItem(storageName) || "[]");
        storage.push(field);
        sessionStorage.setItem(storageName, JSON.stringify(storage));
    }

    popLastMove() {
        const storage: Field[] = JSON.parse(sessionStorage.getItem(storageName) || "[]");
        const pop = storage.pop();
        sessionStorage.setItem(storageName, JSON.stringify(storage));

        return pop;
    }
}

export default MoveHistory;