import React from 'react';
import s from './NotFound.module.css';

const NotFound = () => {
    return (
        <div className={s.main}>
            <div className={s.notFound}>
                Страница не найдена
            </div>
        </div>
    );
}

export default NotFound;
