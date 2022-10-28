import axios from 'axios';
import {useEffect, useState} from "react";
import CONFIG from "../utils/config";

const useApi = ({
        getMenu,
        getSections,
        getItems
    }) => {

    const [menu, setMenu] = useState({});
    const [sections, setSections] = useState([]);
    const [items, setItems] = useState([]);
    const [itemsData, setItemsData] = useState([]);

    useEffect(() => {
        if (getMenu && getSections) {
            void listMenuItems();
        }
        // eslint-disable-next-line
    }, [getMenu]);

    useEffect(() => {
        if (menu._id && getSections) {
            void listSectionItems(getSections);
        }
        // eslint-disable-next-line
    }, [menu]);

    useEffect(() => {
        if (getItems) {
            void listItems(getItems);
        }
        // eslint-disable-next-line
    }, [getItems]);

    const listMenuItems = async () => {
        try {
            const { data } = await axios.get(`${CONFIG.API_URL}/api/menu`, {});
            setMenu(data);
        } catch (e) {
            setMenu([]);
        }
    };

    const listSectionItems = async () => {
        try {
            const { data } = await axios.get(`${CONFIG.API_URL}/api/sections`, {});
            setSections(data.filter(s => menu.options.find(m => m._ref === s._id)));
        } catch (e) {
            setSections([]);
        }
    };

    const listItems = async ({ options }) => {
        try {
            // No need to hit api every time
            if (itemsData.length) {
                setItems(itemsData.filter(i => options.find(o => o._ref === i._id)));
            }
            else {
                const { data } = await axios.get(`${CONFIG.API_URL}/api/items`, {});
                setItemsData(data);

                setItems(data.filter(i => options.find(o => o._ref === i._id)));
            }
        } catch (e) {
            setItems([]);
        }
    };

    return {
        menu,
        sections,
        items
    }
};

export default useApi;
