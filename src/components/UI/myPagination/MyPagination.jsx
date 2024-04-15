import React from 'react';
import { getPagesArray } from '../../../utils/pages';

const MyPagination = ({ totalPages, page, setPage }) => {

    const pagesArray = getPagesArray(totalPages);

    return (
        <div className="page__wrapper">
            {pagesArray.map((p, index) =>
                <span
                    className={p === page ? 'page page__current' : 'page'}
                    key={index}
                    onClick={() => setPage(p)}
                >
                    {p}
                </span>
            )}
        </div>
    );
}

export default MyPagination;
