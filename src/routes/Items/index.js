import React, { useState, useEffect } from "react";
import classes from './style.module.scss';
import useApi from "../../hooks/useApi";
import Card from "../../components/Card";
import CONFIG from "../../utils/config";
import Menu from "../Menu";
import Grid from "@mui/material/Grid/Grid";

const Items = ({
       sections,
       secId
    }) => {

    const [getItems, setGetItems] = useState(false);
    const selectedSection = sections.find(s => secId === s._id);

    const { items } = useApi({ getItems });

    useEffect(() => {
        if (selectedSection) {
            setGetItems(selectedSection);
        }
    }, [selectedSection]);

    return (
        <>
            <Menu {...{ sections, secId }} />
            <div className={classes.items}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {items && items.map((i, idx) =>
                        <Grid item xs={2} sm={4} md={4} key={`item_${i._id}_${idx}`}>
                            <Card
                                name={i.name[CONFIG.LOCALE]}
                                imgUrl={`/images/${i?.image?.asset?._ref}`}
                            />
                        </Grid>
                    )}
                </Grid>

            </div>
        </>
    );
};

export default Items;
