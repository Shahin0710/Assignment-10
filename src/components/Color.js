import { MenuItem, Select } from '@mui/material';
import * as React from 'react';

const Color = function () {

    const [colorTheme, setColorTheme] = React.useState("light");
    const handleColorThemeChange = (event) => {
        setColorTheme(event.target.value);
    };

    return (
        <Select
            variant="standard"
            value={colorTheme}
            onChange={handleColorThemeChange}
            autoWidth
            disableUnderline
            sx={{
                mr: 2,
                color: 'inherit',
                fontSize: '14px',
                '& .MuiSelect-icon': {
                    color: 'inherit',
                    right: '8px',
                    fontSize: '20px',
                },
            }}
        >
            <MenuItem dense value="light">
                Light
            </MenuItem>
            <MenuItem dense value="dark">
                Dark
            </MenuItem>
        </Select>
    );
};

export default Color;
