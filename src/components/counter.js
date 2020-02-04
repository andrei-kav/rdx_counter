import React, { useEffect } from "react";
import { connect } from 'react-redux';
// import { bindActionCreators } from "redux";

import CounterService from "../services/counterService";
import * as actions from "../actions";
import Spinner from "./spinner";

const Counter = ({ allNumbers, counter, isUpdating, downloadAllValues, inc, dec, rst, downloadValue, isWaiting, toggleIsUpdating, toggleIsWaiting }) => {

    const spinner = isWaiting ? <Spinner /> : null;

    counter = !isWaiting ? counter : null;

    const counterService = new CounterService();

    useEffect( () => {
        if (isUpdating) {
            counterService.getValues()
                .then(res => {
                    toggleIsUpdating(false);
                    downloadAllValues(res);
                })
        }
    });

    return (
        <div className="d-flex align-items-center">
            <div className="container">
                <div className="counter-container d-flex align-items-center justify-content-center">
                    <div className="counter">{spinner}{counter}</div>
                </div>
                <div className="btn-container">
                    <div className="btn-counter d-flex justify-content-between">
                        <button onClick={inc} className="btn btn-inc"> </button>
                        <button onClick={dec} className="btn btn-dec"> </button>
                        <button onClick={rst} className="btn btn-rst"> </button>
                    </div>
                    <div className="btn-load d-flex justify-content-between">
                        <button onClick={ () => {
                                    toggleIsWaiting(true);
                                    const id = Math.floor(Math.random()*allNumbers.length);
                                    downloadValue(id);
                                    toggleIsWaiting(false);
                                }}
                                className="btn btn-dwnld"> </button>
                        <button onClick={ () => {
                                    if (counter === 0) {
                                        console.log('you can not add 0 to db');
                                        alert('you can not add 0 to db');
                                    } else if (allNumbers.some(num => num === counter)) {
                                        console.log('this number already exists in the list');
                                        alert('this number already exists in the list');
                                    } else {
                                        toggleIsWaiting(true);
                                        counterService.uploadValueToDB(counter)
                                            .then(() => {
                                                toggleIsWaiting(false);
                                                toggleIsUpdating(true);
                                            })
                                    }
                                }}
                                className="btn btn-upld"> </button>
                    </div>
                </div>
            </div>
        </div>
    )
};
const mapStateToProps = (state) => {
    return {
        allNumbers: state.allNumbers,
        counter: state.number,
        isUpdating: state.isUpdating,
        isWaiting: state.isWaiting
    }
};

// const bindActionCreator = (creator, dispatch) => (...args) => {
//     dispatch( creator(...args));
// };

// const mapDispatchToProps = (dispatch) => {
//     const { inc, dec, rst } = bindActionCreators(actions, dispatch);
//     return { inc, dec, rst };
// };
export default connect(mapStateToProps, actions)(Counter);