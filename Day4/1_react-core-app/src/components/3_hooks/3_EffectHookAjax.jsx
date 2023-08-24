import React, { useEffect, useState } from 'react';
import postApiClient from '../../services/post-api-client';
import LoaderAnimation from '../common/LoaderAnimation';
import DataTable from '../common/DataTable';

const EffectHookAjax = () => {
    const [cState, setcState] = useState({ posts: [], message: "Loading Data, please wait...", flag: false });

    useEffect(() => {
        postApiClient.getAllPosts().then((data) => {
            setcState({ posts: [...data], message: "", flag: true });
        }).catch((eMsg) => {
            setcState({ posts: [], message: eMsg, flag: true });
        });
    }, []);

    return (
        <>
            <div className="row mt-5">
                <h4 className="text-warning text-center text-uppercase font-weight-bold">{cState.message}</h4>
            </div>

            {
                !cState.flag ? <LoaderAnimation /> : null
            }

            <DataTable items={cState.posts}>
                <h4 className="text-primary text-uppercase font-weight-bold">Posts Table</h4>
            </DataTable>
        </>
    );
};

export default EffectHookAjax;