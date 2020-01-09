export default class CounterService {
    constructor() {
        this._apiBase = 'http://localhost:3001/numbers';
        this._POST = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        }
    }

    getResource = async (url, options) => {
        const res = await fetch(url, options);
        if (!res.ok) {
            throw {
                status: res.status,
                // status: 345,
                text: new Error(`Could not fetch ${url}, received ${res.status}`)
            };
        }
        return await res.json();
    };

    _checkValueInData = (data, value) => {
        return data.some( number => (number.const || number.saved) === value );
    };

    getValue = async () => {
        const data = await this.getResource(this._apiBase);
        const id = Math.floor(Math.random()*data.length + 1);
        const [ value ] = data.filter(number => number.id === id).map(number => number.const || number.saved);
        return value;
    };
    uploadValueToBD = async (value) => {
        const data = await this.getResource(this._apiBase);
        const saved = value.toString();
        this._checkValueInData(data, saved)
            ? console.error(`"${saved}" is already in the list`)
            : await this.getResource(this._apiBase, {...this._POST, body: JSON.stringify({ saved })})
    }

}

