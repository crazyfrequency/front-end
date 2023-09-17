import React from 'react';
import s from './Callback.module.css'

const Callback = () => {
    return (
        <div className={s.main}>
            <input type="text" placeholder='Укажите ФИО' />
            <input type="email" placeholder='Введите почту'/>
            <textarea cols="30" rows="10" placeholder='Обращение'></textarea>
            <button onClick={()=>window.location.reload()}>Send</button>
        </div>
    );
}

export default Callback;
