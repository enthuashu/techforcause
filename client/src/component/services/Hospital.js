import React, { useEffect } from "react";
import hospitalPNG from "../../images/hospital.png";
import { useHistory } from "react-router-dom"

const hospitalAPI = [
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
function Hospital() {
    const history = useHistory();

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
            <h1 style={{ backgroundColor: "#311b92", color: "#ffffff", padding: '8px', borderRadius: '0.5rem' }} className="text-center p-5">Hospital Data</h1>
            {hospitalAPI.map((hospitalData, index) => {
                return (
                    <div class="card mb-3 shadow p-3 mb-5 bg-body rounded">
                        <div class="row g-0">
                            <div class="col-4">
                                <img
                                    src={hospitalData.imgsrc}
                                    class="img-fluid img-thumbnail data__image"
                                    alt=""
                                />
                            </div>
                            <div class="col-8">
                                <div class="card-body">
                                    <h5 class="card-title">{hospitalData.name}</h5>
                                    <p class="card-text">
                                        Available Cylinder : {hospitalData.available}
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

export default Hospital;
