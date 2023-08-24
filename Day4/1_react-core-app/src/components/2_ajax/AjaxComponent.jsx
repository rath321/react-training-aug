import React, { Component } from 'react';
import postApiClient from '../../services/post-api-client';
import LoaderAnimation from '../common/LoaderAnimation';
import DataTable from '../common/DataTable';

class AjaxComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [], message: "Loading Data, please wait...", flag: false
        };
    }

    // componentDidMount() {
    //     // postApiClient.getAllPostsUsingCB((data) => {
    //     //     console.log("AjaxComponent: ", data);
    //     // }, (eMsg) => {
    //     //     console.error(eMsg);
    //     // });

    //     postApiClient.getAllPosts().then((data) => {
    //         this.setState({posts: [...data], message: "", flag: true});
    //     }).catch((eMsg) => {
    //         this.setState({posts: [], message: eMsg, flag: true});
    //     });
    // }

    async componentDidMount() {
        try {
            var data = await postApiClient.getAllPosts();
            this.setState({ posts: [...data], message: "", flag: true });
        } catch (eMsg) {
            this.setState({ posts: [], message: eMsg, flag: true });
        }
    }

    render() {
        return (
            <>
                <div className="row mt-5">
                    <h4 className="text-warning text-center text-uppercase font-weight-bold">{this.state.message}</h4>
                </div>

                {
                    !this.state.flag ? <LoaderAnimation /> : null
                }

                <DataTable items={this.state.posts}>
                    <h4 className="text-primary text-uppercase font-weight-bold">Posts Table</h4>
                </DataTable>
            </>
        );
    }
}

export default AjaxComponent;