import React, { useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Breadcrumb from '../Breadcrumb';
import Files from '../Files';

import { getRoute } from '../../route/route';
import { changeRoute } from '../../redux/actions/';

import './style/style.scss';

const Main = () => {

    const [correctPath, setCorrectPath] = useState(false);
    const route = useSelector((state) => state.route);
    const dispatch = useDispatch();

    useEffect(() => {
        const pathFromURL = getRoute();
        if (route !== pathFromURL) {
            dispatch(changeRoute(pathFromURL));
        } 

        setCorrectPath(true);
    }, []);

    return (
        <div className="App">
            <div className="content-container">
                <h1 id="your-personal-library" className="title">Your personal library</h1>
                <Breadcrumb />
                        
                { correctPath && <Files key={route} />}
            </div>
        </div>
    );
};

export default Main;