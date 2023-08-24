import React from 'react';
import StateHookDemo from './1_StateHookDemo';
import EffectHookDemo from './2_EffectHookDemo';
import EffectHookAjax from './3_EffectHookAjax';

const HooksRoot = () => {
    return (
        <>
            {/* <StateHookDemo /> */}
            {/* <EffectHookDemo /> */}
            <EffectHookAjax />
        </>
    );
};

export default HooksRoot;