import React, { FC, useState } from 'react';
import s from './Paginator.module.css';

type Props = {
    totalItemsCount: number;
    pageSize: number;
    onPageChanged: (pageNumber: number) => void;
    currentPage: number;
    portionSize: number;
};

export const Paginator: FC<Props> = ({
                                         totalItemsCount,
                                         pageSize,
                                         onPageChanged,
                                         currentPage,
                                         portionSize,
                                     }) => {
    let pagesCount: number = Math.ceil(totalItemsCount / pageSize);

    let pages: number[] = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState<number>(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    const filteredPages = pages.filter(
        (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
    );


  const  onPaginatorBackClickHandler = () => {
      onPageChanged((portionNumber - 1) * portionSize === 0 ? portionSize : (portionNumber - 1) * portionSize)
      setPortionNumber(portionNumber - 1)
  }
  const  onPaginatorNextClickHandler = () => {
      onPageChanged(((portionNumber + 1) * portionSize) - (portionSize - 1))
      setPortionNumber(portionNumber + 1)
  }

    return (
        <div className={s.paginator}>
            {portionNumber > 1 && (
                <button onClick={onPaginatorBackClickHandler}>Back</button>
            )}
            {filteredPages.map((el, index) => (
                <span
                    key={index}
                    onClick={() => onPageChanged(el)}
                    className={
                        currentPage === el ? `${s.page} ${s.selectedPage}` : s.page
                    }
                >
          {el}
        </span>
            ))}
            {portionCount > portionNumber && (
                <button onClick={onPaginatorNextClickHandler}>Next</button>
            )}
        </div>
    );
};