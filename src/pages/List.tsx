import React, { useState, useEffect, FunctionComponent } from 'react'
import { Typography, Card, CardContent, CardHeader, LinearProgress, ListItem } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom';
import { apiGetAllSurveys } from '../services/news';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import WithHeaderLayout from '../Layouts/WithHeaderLayout';


const List: FunctionComponent<{}> = () => {

    const [loading, setLoading] = useState(true);

    const [list, setList] = useState([]);

    useEffect(() => {
        getAllSurveys();
    }, []);

    const getAllSurveys = () => {
        apiGetAllSurveys()
            .then(res => {
                console.log("result-----", res);
                setList(res.survey_results);
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

    const StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }))(TableCell);

    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);

    return (
        <WithHeaderLayout>
            {loading &&
                <LinearProgress color="secondary" />
            }
            <div className="p-8">
                <div className="mx-auto" style={{ maxWidth: "600px" }}>
                    <div className="w-full ">
                        <div className="w-full text-center">
                            <Typography variant="h3" color="primary">
                                All Surveys
                            </Typography>
                        </div>
                        {list.length !== 0 &&
                            <Card className="mt-12">
                                <div className="">
                                    <CardContent className="">
                                        <TableContainer component={Paper}>
                                            <Table aria-label="customized table">
                                                <TableHead>
                                                    <TableRow>
                                                        <StyledTableCell>Name</StyledTableCell>
                                                        <StyledTableCell align="right">Participant Count</StyledTableCell>
                                                        <StyledTableCell align="right">Response Rate</StyledTableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {list.map(({ name, url, participant_count, response_rate }) => (
                                                        <StyledTableRow key={name}>
                                                            <StyledTableCell component="th" scope="row">
                                                                <Link to={url}>
                                                                    {name}
                                                                </Link>
                                                            </StyledTableCell>
                                                            <StyledTableCell align="center">{participant_count}</StyledTableCell>
                                                            <StyledTableCell align="center">{Number(response_rate).toFixed(2)}</StyledTableCell>
                                                        </StyledTableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </CardContent>
                                </div>
                            </Card>
                        }
                    </div>
                </div>
            </div>
        </WithHeaderLayout>
    )
}

export default List;