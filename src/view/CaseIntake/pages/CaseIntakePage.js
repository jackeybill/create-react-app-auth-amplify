import React, { useEffect, useState } from 'react';
import { CASE_INTAKE_PAGE_TITLE, CASE_INTAKE_TAB } from '../../../config/app';
import Tab from '../../_shared/elements/Tab';
import Layout from '../../_shared/hoc/Layout';
import UploadDocument from '../templates/UploadDocuments';
import IntakeSummary from '../templates/IntakeSummary';
import { connect } from 'react-redux';
import Notification from '../../_shared/elements/Notification';
import { docUploadFormInit } from '../../../store/case-intake/case-intake-action';
import ChildTitleLayout from '../../_shared/hoc/ChildTitleLayout';


const CaseIntakePage = (props) => {

    const [activeTabId, setActiveTabId] = useState(CASE_INTAKE_TAB[0].id);
    const [isLoading, setLoaded] = useState(false);

    useEffect(() => {
        if (!isLoading) {
            props.formInit();
            setLoaded(true);
        }
    }, [props, isLoading]);

    return (
        <Layout coloredBody externalMainLayoutClass='a-mb-30 a-mx-50' {...props}>
            <Notification />
            <ChildTitleLayout title={CASE_INTAKE_PAGE_TITLE}>
                <Tab tabs={CASE_INTAKE_TAB}
                    defaultActiveTabId={CASE_INTAKE_TAB[0].id}
                    tabClicked={(id) => setActiveTabId(id)} />
            </ChildTitleLayout>
            <div className='col-12 px-0'>
                <div className='a-panel a-my-10'>
                    {
                        {
                            [CASE_INTAKE_TAB[0].id]: <UploadDocument />,
                            [CASE_INTAKE_TAB[1].id]: <IntakeSummary />
                        }[activeTabId]
                    }
                </div>
            </div>
        </Layout>
    );
};

const mapStateToProps = state => {
    return {
        error: state.caseIntake.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        formInit: () => dispatch(docUploadFormInit())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CaseIntakePage);