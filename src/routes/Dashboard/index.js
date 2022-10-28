import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import Items from "../Items";

const Dashboard = () => {
    const { secId } = useParams();
    const [getMenu, setGetMenu] = useState(false);
    const [getSections, setGetSections] = useState(false);

    const {
        sections
    } = useApi({ getMenu, getSections });

    useEffect(() => {
        setGetMenu(true);
        setGetSections(true);
    }, []);

    return (
        <Items {...{sections, secId}} />
    );
};

export default Dashboard;
