import React from "react";
import classes from './style.module.scss';
import { Link } from "react-router-dom";
import CONFIG from "../../utils/config";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const MenuBar = ({
        items,
        baseUrl,
        prop,
        selected
    }) => {
    const selectItem = items.find(i => i._id === selected);
    const value = items.indexOf(selectItem);

    return (
        <Box sx={{ maxWidth: { xs: 320, sm: 650, md: 800, lg: 1200 }, bgcolor: 'background.paper' }}>
            <Tabs
                value={value}
                variant="scrollable"
                scrollButtons="auto"
            >
                {items && items.map(i => {
                    return (
                        <Link to={baseUrl + i[prop]} key={i[prop]}>
                            <Tab
                                label={i.name[CONFIG.LOCALE]}
                                key={i[prop]}
                                icon={<img
                                    className={classes.tabImage}
                                    src={`/images/${i?.image?.asset?._ref}`}
                                    alt={`/images/${i?.image?.asset?._ref}`}
                                />}
                            />
                        </Link>
                    );
                })}
            </Tabs>
        </Box>
    );
};

export default MenuBar;
