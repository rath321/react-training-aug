/* eslint-disable */
import React from 'react';
import CalculatorAssignment from '../2_assignment/CalculatorAssignment';
import ListRoot from '../3_working-with-arrays/ListComponent';
import TodoManager from '../4_todo-assignment/TodoManager';
import ErrorHandler from '../common/ErrorHandler';
import WithoutContext from '../5_context-api/WithoutContext';
import WithContext from '../5_context-api/WithContext';
import MultiContext from '../5_context-api/MultiContext';
import SiblingCommunication from '../6_communication-using-context/SiblingCommunication';
import TodoManagerContext from '../7_todo-assignment-context/TodoManager';
// import ControlledVsUncontrolled from '../1_controlled-vs-uncontrolled/ControlledVsUncontrolled';

const RootComponent = () => {
    return (
        <div className='container'>
            <ErrorHandler>
                {/* <ControlledVsUncontrolled /> */}
                {/* <CalculatorAssignment /> */}
                {/* <ListRoot /> */}
                {/* <TodoManager /> */}
                {/* <WithoutContext /> */}
                {/* <WithContext /> */}
                {/* <MultiContext /> */}
                {/* <SiblingCommunication /> */}
                <TodoManagerContext />
            </ErrorHandler>
        </div>
    );
};

export default RootComponent;