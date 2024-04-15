import React from 'react';
import MySelect from './UI/select/MySelect';
import MyInput from './UI/input/MyInput';

function PostFilter({ filter, setFilter }: any) {

    return (
        <div>
            <MyInput
                value={filter.search}
                onChange={(e: any) => setFilter({ ...filter, search: e.target.value })}
                placeholder='Filter posts...'
            />
            <MySelect
                value={filter.sort}
                defaultOption='By Default'
                options={[
                    { value: 'title', name: 'By Title' },
                    { value: 'body', name: 'By Content' }
                ]}
                onChange={(selectedSort: string) => setFilter({ ...filter, sort: selectedSort })}
            />
        </div>
    );
}

export default PostFilter;
