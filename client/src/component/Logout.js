import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom"
import { UserContext } from '../App'
const Logout = () => {

    const { state, dispatch } = useContext(UserContext)
    const history = useHistory();

    const callPage = async () => {
        try {
            const res = await fetch('/loggout', {

                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            dispatch({ type: "USER", payload: false })
            history.push("/login")

            if (!res.status === 200) {
                const error = new Error(res.error)
                throw error;
            }

        } catch (error) {
            console.log(error);
            history.push('/login')
        }
    }

    useEffect(() => {
        callPage();

    }, []);

    return (
        <div>
            <h1>logging Out...</h1>
        </div>
    );
}

export default Logout;
