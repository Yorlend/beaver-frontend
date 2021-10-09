import React, {useEffect, useState} from 'react';
import {Container} from "react-bootstrap";
import Device from "../Models/Device";

export default function DevicesPage() {
    const [devices, setDevices] = useState(null);
    useEffect(() => {
        Device.list().then(setDevices);
    }, []);
    return (
        <Container id="devices">
            <h1 className="pt-4 pb-3">Устройства</h1>
            {devices && devices.length ?
                <table className="table">
                    <thead>
                    <tr>
                        <th>Идентификатор</th>
                        <th>Имя</th>
                        <th>Дата создания</th>
                        <th>Последний раз в сети</th>
                    </tr>
                    </thead>
                    <tbody>
                    {devices.map(item => (
                        <tr key={item.uuid}>
                            <th scope="row">{item.uuid}</th>
                            <td>{item.name}</td>
                            <td>{item.created_at.format("DD.MM.YYYY HH:mm")}</td>
                            <td>{item.online_at.format("DD.MM.YYYY HH:mm")}</td>
                        </tr>
                    ))}
                    </tbody>
                </table> : <div>
                    <p className="text-center text-muted p-5">Нет устройств</p>
                </div>}
        </Container>
    );
}
