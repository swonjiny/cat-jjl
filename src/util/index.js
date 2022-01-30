const jsonLocalStorage = {
    setItem: (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    },
    getItem: (key) => {
        return JSON.parse(localStorage.getItem(key));
    },
};

const includesHangul = (text) => (/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text));

export {jsonLocalStorage , includesHangul}
