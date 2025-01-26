import {useState} from 'react';
import './App.css'
import {A} from './components/A'
import {B} from './components/B'
import {MyContext} from './context/MyContextProvider'

function App() {
    const [themeColor, setThemeColor] = useState<string>('light');
    return (

        <div>
            <MyContext.Provider value={{
                theme: themeColor,
                changeTheme: (themeValue: string) => {
                    setThemeColor(themeValue)

                }
            }}>
                <A/>
                <B/>
            </MyContext.Provider>
        </div>

    )
}

export default App
