import { createStore } from "redux";

const url = 'http://localhost:3001/numbers';

const reducer = (state = 0, action) => {
    switch (action.type) {
        case  'INC':
            return +state + 1;
        case 'DEC':
            return state - 1;
        case 'RST':
            return state = 0;
        case 'DWNLD':
            return state = action.value;
        default:
            return state;
    }
};

const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const rnd = () => ({type: 'RST'});
const dwnld = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw {
            status: response.status,
            text: new Error(`Could not fetch ${url}, received ${response.status}`)
        }
    }
    const data = await response.json();
    const id = Math.floor(Math.random()*data.length + 1);
    console.log(id);
    const value = data.filter(number => number.id === id).map(number => number.const || number.saved);
    return {
        type: 'DWNLD',
        value
    }
};

const upld = async (url) => {
    const saved = document.getElementById('counter').textContent;
    if (+saved === 0) return console.error('counter can not be 0');
    const obj = {
        saved
    };
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(obj)
    });
    if (!response.ok) {
        throw {
            status: response.status,
            text: new Error(`Could not fetch ${url}, received ${response.status}`)
        }
    }
};

const store = createStore(reducer);

document.getElementById('inc').addEventListener('click', () => {
    store.dispatch(inc());
});
document.getElementById('dec').addEventListener('click', () => {
    store.dispatch(dec());
});
document.getElementById('rst').addEventListener('click', () => {
    store.dispatch(rnd());
});
document.getElementById('dwnld').addEventListener('click',async () => {
    store.dispatch(await dwnld(url));
});
document.getElementById('upld').addEventListener('click',  () => {
     upld(url);
});

const update = () => {
    document.getElementById('counter').textContent = store.getState();
};

store.subscribe(update);

