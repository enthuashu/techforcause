import React, { useEffect, useContext } from "react";
import hospitalPNG from "../../images/food.png";
import { useHistory } from "react-router-dom"
import { UserContext } from '../../App'

const foodAPI = [
    {
        imgsrc: `${hospitalPNG}`,
        name: "H1",
        available: 20,
    },
    {
        imgsrc: `${hospitalPNG}`,
        name: "H1",
        available: 20,
    },
    {
        imgsrc: `${hospitalPNG}`,
        name: "H1",
        available: 20,
    },
    {
        imgsrc: `${hospitalPNG}`,
        name: "H1",
        available: 20,
    },
    {
        imgsrc: `${hospitalPNG}`,
        name: "H1",
        available: 20,
    },
    {
        imgsrc: `${hospitalPNG}`,
        name: "H1",
        available: 20,
    },
    {
        imgsrc: `${hospitalPNG}`,
        name: "H1",
        available: 20,
    },
];
function Food() {

    const history = useHistory();
    const { state, dispatch } = useContext(UserContext)
    const callPage = async () => {
        try {
            const res = await fetch('/checkbed', {

                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
            const data = await res.json();
            dispatch({ type: "USER", payload: true })

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
        <div className="container">
            <h1 style={{ backgroundColor: "#311b92", color: "#ffffff", padding: '8px', borderRadius: '0.5rem' }} className="text-center p-5"> Food Availability Data</h1>
            {foodAPI.map((foodData, index) => {
                return (
                    <div class="card mb-3 shadow p-3 mb-5 bg-body rounded">
                        <div class="row g-0">
                            <div class="col-4">
                                <img
                                    src={foodData.imgsrc}
                                    class="img-fluid img-thumbnail data__image"
                                    alt=""
                                />
                            </div>
                            <div class="col-8">
                                <div class="card-body">
                                    <h5 class="card-title">{foodData.name}</h5>
                                    <p class="card-text">
                                        Available Food Resources : {foodData.available}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Food;
