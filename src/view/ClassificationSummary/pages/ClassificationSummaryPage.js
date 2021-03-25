import React, { useEffect } from 'react';
import Layout from '../../_shared/hoc/Layout';


const ClassificationSummaryPage = (props) => {

    useEffect(() => {
        //props.history.push(APP_ROUTE_PATH.CLASSIFICATION_SUMMARY);
    });

    return (
        <Layout coloredBody pageTitle='Classification Summary' {...props}>
            <strong>Feature is under development!!!</strong>
        </Layout>
    )
}

export default ClassificationSummaryPage;