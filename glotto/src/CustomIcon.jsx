// src/CustomIcon.jsx
import React from 'react';
import Icon from '@material-ui/core/Icon';
import { getPlatform } from './platformUtils';
import { iconNames } from './iconConfig';

const CustomIcon = ({ name }) => {
    const platform = getPlatform();
    const iconName = iconNames[name] ? iconNames[name][platform] : "default_icon";

    return <Icon>{iconName}</Icon>;
};

export default CustomIcon;
