import {FC, memo} from "react" ////Импортирует функция  из библиотеки React///

export const UserComponent: FC<{ foo: () => void }> = memo(() => { ///предотвращает повторный рендеринг компонента///
    console.log('user') ///выводит в консоль текст "user"///
    return ( ///рендерится  <div>, с текстом "user". Этот <div> будет отображаться в браузере.///
        <div>
            user
        </div>
    )
})
