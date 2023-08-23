/* eslint-disable */
import React from 'react';
import CalculatorAssignment from '../2_assignment/CalculatorAssignment';
import ListRoot from '../3_working-with-arrays/ListComponent';
import TodoManager from '../4_todo-assignment/TodoManager';
// import ControlledVsUncontrolled from '../1_controlled-vs-uncontrolled/ControlledVsUncontrolled';

const RootComponent = () => {
    return (
        <div className='container'>
            {/* <ControlledVsUncontrolled /> */}
            {/* <CalculatorAssignment /> */}
            {/* <ListRoot /> */}
            <TodoManager />
        </div>
    );
};

export default RootComponent;