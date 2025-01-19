'use client';
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

interface SelectMultipleProps<T> {
    data: T[];
    label?: string;
    placeholder?: string;
    getOptionLabel: (option: T) => string;
    renderOption?: (
        props: React.HTMLAttributes<HTMLLIElement>,
        option: T,
        state: { selected: boolean }
    ) => React.ReactNode;
    onChange?: (event: React.SyntheticEvent, value: T[]) => void;
}

export default function SelectMultiple<T>({
    data,
    label = 'Select Options',
    placeholder = 'Choose...',
    getOptionLabel,
    renderOption,
    onChange,
}: SelectMultipleProps<T>) {
    return (
        <Autocomplete
            multiple
            options={data}
            
            disableCloseOnSelect
            getOptionLabel={getOptionLabel}
            onChange={onChange}
            size='small'
            sx={{borderRadius:0}}
            renderOption={
                renderOption
                    ? renderOption
                    : (props, option, { selected }) => {
                        const { key, ...restProps } = props;
                        return (

                            <li key={key} {...restProps}>
                                <Checkbox
                                    icon={icon}
                                    checkedIcon={checkedIcon}
                                    style={{ marginRight: 8 }}
                                    checked={selected}
                                />
                                {getOptionLabel(option)}
                            </li>
                        )
                    }

            }
            className='w-full pb-4'
            renderInput={(params) => (
                <TextField {...params} label={label} placeholder={placeholder} sx={{
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 0, // Set border radius to 0
                    },
                }}/>
            )}
        />
    );
}
