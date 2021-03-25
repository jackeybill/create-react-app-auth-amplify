import React, { useEffect } from 'react';
import Layout from '../../_shared/hoc/Layout';


const ProcessingHistoryPage = (props) => {

    useEffect(() => {
        //props.history.push(APP_ROUTE_PATH.PROCESSING_HISTORY);
    });

    return (
        <Layout coloredBody pageTitle='Processing History'{...props}>
            <strong>Feature is under development!!!</strong>
        </Layout>
    )
}

export default ProcessingHistoryPage;