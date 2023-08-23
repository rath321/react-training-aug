/* eslint-disable */
import React from 'react';
import CalculatorAssignment from '../2_assignment/CalculatorAssignment';
import ListRoot from '../3_working-with-arrays/ListComponent';
import TodoManager from '../4_todo-assignment/TodoManager';
import ErrorHandler from '../common/ErrorHandler';
// import ControlledVsUncontrolled from '../1_controlled-vs-uncontrolled/ControlledVsUncontrolled';

const RootComponent = () => {
    return (
        <div className='container'>
            <ErrorHandler>
                {/* <ControlledVsUncontrolled /> */}
                {/* <CalculatorAssignment /> */}
                <ListRoot />
                {/* <TodoManager /> */}
            </ErrorHandler>
        </div>
    );
};

export default RootComponent;