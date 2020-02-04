import firebase from "../config";

export default class CounterService {
    constructor() {
        this._apiBase = firebase.firestore().collection('numbers');
    }
    getValues = () => {
        return this._apiBase.get()
            .then((res) => {
                return res.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
            })
            .then(res => {
                return res.map(obj => obj.const);
            })
            .catch(err => console.error(err));
    };
    uploadValueToDB = (value) => {
        return this._apiBase.add({
            const: value
        })
            .then(() => console.log('db successfully updated'))
            .catch(err => console.error(err));
    }

}

