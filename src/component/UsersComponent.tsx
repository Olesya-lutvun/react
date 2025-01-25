import {useCallback, useEffect, useMemo, useState} from "react"; ////Импортирует хук из библиотеки React///
import {UserComponent} from "./UserComponent";

export const UsersComponent = () => { ///Объявляется функциональный компонет///
    console.log('users')

    const [users, setUsers] = useState([]) ///функция, с помощью которой можно обновить состояние///

    const arr: number[] = useMemo(() => {
        return [11, 22, 23]
    }, []);/// оптимизирует  значение, чтобы оно не пересчитывалось при каждом рендере.оптимизация, которая
    // предотвращает ненужные вычисления и рендеры///

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
            <UserComponent foo={foo} arr={arr}/>
        </>
    )///foo передается в UsersComponent, позволяя дочернему компоненту использовать эту функцию ///
}