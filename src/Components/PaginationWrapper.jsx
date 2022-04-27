import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetIndex, setIndex } from "../Actions/indexActions";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pagination from "react-bootstrap/Pagination";
import { getCurrentIndex } from "../Selectors";



const PaginationWrapper = () => {

    const dispatch = useDispatch();
    const index = useSelector(getCurrentIndex);
    const [paginationItems, setPaginationItems] = useState([]);


    const passPageNumber = e => {
        const pageNumber = Number(e.target.textContent);
        // dispatch(usersActions.willSetUsers(pageNumber));
        dispatch(setIndex(pageNumber));
    };


    useEffect(() => {
        const items = [];
        for( let i=index; i<index+5; i++ ) {
            items.push(<Pagination.Item key={i} onClick={passPageNumber}>{i}</Pagination.Item>);
        }
        setPaginationItems(items);
    }, [index]);


    const add5 = useCallback( e => {
        const items = [];
        dispatch(setIndex(index+5));
    }, [index]);

    const subtract5 = useCallback( e => {
        const items = [];
        if( index >= 6 ) {
            dispatch(setIndex(index-5));
        } else {
            dispatch(resetIndex())
        }
    }, [index]);


    return (
        <Row>
            <Col xs="12">
                <Pagination className="justify-content-center fixed-bottom bg-light mb-0">
                    <Pagination.Prev onClick={subtract5}/>
                    {paginationItems}
                    <Pagination.Next onClick={add5}/>
                </Pagination>            
            </Col>
        </Row>
    );
};


export default PaginationWrapper;