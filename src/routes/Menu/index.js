import React from "react";
import MenuBar from '../../components/MenuBar';

const Menu = ({ sections, secId }) => {
    return (
        <MenuBar items={sections} baseUrl={'/'} prop={'_id'} selected={secId} />
    );
};

export default Menu;
