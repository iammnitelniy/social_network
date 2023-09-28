import React, {FC} from 'react';
import s from "./Paginator.module.css";


type Props = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    currentPage: number
}



export const Paginator: FC<Props> = ({totalUsersCount, pageSize, onPageChanged, currentPage}) => {

    let pagesCount: number = Math.ceil(totalUsersCount / pageSize)

    let pages: number[] = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (

        <div>


            {pages.map((el, index) => {
                return <span key={index} onClick={(e) => {
                    onPageChanged(el)
                }} className={Number(currentPage) === el ? s.selectedPage : ""}>{el}</span>
            })}

        </div>


    );
};

