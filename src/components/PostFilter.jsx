import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/MySelect/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Search"
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Sort By"
                options={[
                    {value: 'fn', name: 'Fist Name'},
                    {value: 'ln', name: 'Last Name'},
                    {value: 'country', name: 'Country'},
                    {value: 'city', name: 'City'},
                ]}
            />
        </div>
    );
};

export default PostFilter;
