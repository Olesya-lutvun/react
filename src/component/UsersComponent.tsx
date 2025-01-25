import { useEffect, useState } from "react"; ////Импортирует хук из библиотеки React///

export const UsersComponent =() =>{ ///Объявляется функциональный компонет///
    console.log('test') ///будет отбрпжптся в браузере///
    const [users, setUsers] = useState([]) ///функция, с помощью которой можно обновить состояние///
    useEffect(() => {  ///  используется для выполнения  загрузк данных или подписка на события.///

    fetch('http://jsonplaceholder.typecode.com/users')///  использується для получения списка пользователей.///
            .then(value => value.json()) ///Преобразует ответ из формата JSON///
            .then( value => {
                setUsers(value);
            })
        return() =>{ ///возвращает  текст "users component".
            console.log('unsubscribe')
        }
    }, []);
    return(
        <>users component</>
    )
}