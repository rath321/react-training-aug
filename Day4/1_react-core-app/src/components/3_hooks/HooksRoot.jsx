import React from 'react';
import StateHookDemo from './1_StateHookDemo';
import EffectHookDemo from './2_EffectHookDemo';
import EffectHookAjax from './3_EffectHookAjax';
import CounterAssignmentWithHooks from './4_Assignment';
import ReducerHookDemo from './5_ReducerHookDemo';
import ContextHookDemo from './6_ContextHookDemo';
import CustomHookDemo from './7_CustomHookDemo';
import CounterRoot from './code-structuring/CounterRoot';

const HooksRoot = () => {
    return (
        <>
            {/* <StateHookDemo /> */}
            {/* <EffectHookDemo /> */}
            {/* <EffectHookAjax /> */}
            {/* <CounterAssignmentWithHooks /> */}
            {/* <ReducerHookDemo /> */}
            {/* <ContextHookDemo /> */}
            {/* <CustomHookDemo /> */}
            <CounterRoot />
        </>
    );
};

export default HooksRoot;