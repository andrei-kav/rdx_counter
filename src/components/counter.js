import React from "react";
import { connect } from 'react-redux';
// import { bindActionCreators } from "redux";

import CounterService from "../services/counterService";
import * as actions from "../actions";
import Spinner from "./spinner";

const Counter = ({ counter, inc, dec, rst, downloadValue, uploadValue, isWaiting, toggleIsWaiting }) => {

    const spinner = isWaiting ? <Spinner /> : null;
    counter = !isWaiting ? counter : null;

    const counterService = new CounterService();

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
                                counterService.getValue()
                                    .then( value => {
                                        toggleIsWaiting(false);
                                        downloadValue(value);
                                    })
                                }}
                                className="btn btn-dwnld"> </button>
                        <button onClick={ () => {
                                    toggleIsWaiting(true);
                                    counterService.uploadValueToBD(counter)
                                        .then(() => {
                                            toggleIsWaiting(false);
                                            uploadValue();
                                        })
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
        counter: state.number,
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
