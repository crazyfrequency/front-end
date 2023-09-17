import React, { useEffect, useState } from 'react';
import s from './Profile.module.css'

const Profile = () => {
    let [user, setUser] = useState(null);
    let [history, setHistory] = useState(null);
    let [name, setName] = useState(""), [surname, setSurname] = useState(""),
        [oldPwd, setOldPwd] = useState(""), [newPwd1, setNewPwd1] = useState(""),
        [newPwd2, setNewPwd2] = useState("");
    useEffect(()=>{
        fetch("/api/check").then(v=>v.json()).then(v=>setUser(v));
        fetch("/api/").then(v=>v.json()).then(v=>setHistory(v));
    }, [])

    if(!user||!history) return (
        <div className={s.main+" "+s.load}>
            Loading please wait...
        </div>
    );

    return (
        <div className={s.main}>
            <div className={s.block}>
                <div>
                    <label htmlFor="name">Имя</label>
                    <input type="text" id='name' value={user.name}/>
                </div>
                <div>
                    <label htmlFor="surname">Фамилия</label>
                    <input type="text" id='surname' value={user.surname} />
                </div>
                <div>
                    <label htmlFor="email">Почта</label>
                    <input type="email" id="email" value={user.email} disabled/>
                </div>
                <button>Сохранить</button>
            </div>
            <div className={s.block+" "+s.second}>
                <div>
                    <label htmlFor="old_pwd">Старый пароль</label>
                    <input type="password" id="old_pwd" />
                </div>
                <div>
                    <label htmlFor="new_pwd1">Новый пароль</label>
                    <input type="password" id="new_pwd1" />
                </div>
                <div>
                    <label htmlFor="new_pwd2">Повторите</label>
                    <input type="password" id="new_pwd2" />
                </div>
                <button>Изменить</button>
            </div>
        </div>
    );
}

export default Profile;
