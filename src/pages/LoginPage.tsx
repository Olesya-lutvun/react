import { useEffect } from "react";
import { login } from "../services/api.service";

export const LoginPage = () =>{         ///буде робити логінацію одразу коли на ніі переходиш///

        useEffect(() => {
        login({                                     ///виконує дію ///
        username: "emilys",
        password: "emilyspass",
        expiresInMins: 1                                 ///передає данні ///
});

        }, []);

    return(
        <>login page</>
    );
};


///зробили сторінку login ///



