import React from 'react';

const MySelect = ({ defaultOption, options, onChange }: any): any => {
    return (
        <select onChange={(e) => onChange(e.target.value)}>
            <option disabled value="">{defaultOption}</option>
            {options.map((opt: any) =>
                <option value={opt.value} key={opt.value}>{opt.name}</option>
            )}
        </select>
    );
}

export default MySelect;
