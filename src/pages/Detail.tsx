import React, { useState, useEffect, FunctionComponent } from 'react'
import WithHeaderLayout from '../Layouts/WithHeaderLayout';
import { Typography, Card, CardHeader, CardContent, LinearProgress } from '@material-ui/core';
import { apiGetSurveyById } from '../services/news';
import LinearRating from '../Components/LinearRating';
import { RouteComponentProps } from 'react-router';
import DetailItem from '../Components/DetailItem';

interface RouteInfo extends RouteComponentProps {
    id: string;
}

const Detail = ({ match }: RouteComponentProps<RouteInfo>) => {

    const [loading, setLoading] = useState(true);

    // const [detail, setDetail] = useState({name: "", response_rate: "", themes: []});
    const [detail, setDetail] = useState({});

    useEffect(() => {
        getSurveyById(match.params.id);
    }, []);

    const getSurveyById = id => {
        apiGetSurveyById(id)
            .then(res => {
                console.log("res-----", res);
                setDetail(res.survey_result_detail);
                setLoading(false);
            })
            .catch(function (error) {
                // Handle Errors here.
                setLoading(false);
                console.log('===== error: ', error);
                setLoading(false);
                // ...
            });
    }


    return (
        <WithHeaderLayout>
            {loading &&
                <LinearProgress color="secondary" />
            }
            <div className="p-8">
                <div className="mx-auto" style={{ maxWidth: "600px" }}>
                    <div className="w-full">
                        {detail !== {} && <DetailItem detail={detail} />}
                    </div>
                </div>
            </div>
        </WithHeaderLayout >
    )
}

export default Detail;