import {useCallback, useEffect, useState} from "react"; ////Импортирует хук из библиотеки React///
import {UserComponent} from "./UserComponent";

export const UsersComponent = () => { ///Объявляется функциональный компонет///
    console.log('users')

    const [users, setUsers] = useState([]) ///функция, с помощью которой можно обновить состояние///

    const foo = useCallback(() => { /// мемоизирует функцию, чтобы она не
        // создавалась заново при каждом рендере компонента.///

        console.log('test')
    }, [])

    useEffect(() => {  ///  используется для выполнения  загрузк данных или подписка на события.///

        fetch('http://jsonplaceholder.typecode.com/users')///  использується для получения списка пользователей.///
            .then(value => value.json()) ///Преобразует ответ из формата JSON///
            .then(value => {
                setUsers(value);
            })
        return () => { ///возвращает  текст "users component".
            console.log('unsubscribe')
        }
    }, []);
    return (
        <>users component
            <UserComponent foo={foo}/>
        </>
    )///foo передается в UsersComponent, позволяя дочернему компоненту использовать эту функцию ///
}