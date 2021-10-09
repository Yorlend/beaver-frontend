import React, {useEffect, useState} from "react";
import {Container, FormControl, FormGroup, FormLabel, Button, Row, Col} from "react-bootstrap";
import Device from "../Models/Device";
import Photoset from "../Models/Photoset";
import moment from "../moment";

export default function NewPhotosetPage() {

    const [onlineDevices, setOnlineDevices] = useState([]);
    const [name, setName] = useState("Мой фотосет");
    const [deviceId, setDeviceId] = useState(null);
    const [imagesCount, setImagesCount] = useState(60);
    const [token, setToken] = useState("");

    useEffect(() => {
        Device.list().then(
            devices => {
                const onlineDevices = devices.filter(
                    device => device.online_at.isSameOrAfter(
                        moment().subtract(3, "minutes")
                    )
                );
                setOnlineDevices(
                    onlineDevices
                );
                if (onlineDevices && onlineDevices.length) {
                    setDeviceId(onlineDevices[0].uuid);
                }
            }
        ).catch((error) => {
            console.log("ERROR", error);
            setOnlineDevices([{
                uuid: "287802708237082",
                name: "Устройство, которое онлайн"
            }, {
                uuid: "287802708237081",
                name: "Устройство, которое онлайн #2"
            }]);
        });
    }, []);

    return <Container>
        <h1 className="mt-4 mb-3">Создать фотосет</h1>
        <Row>
            <Col xs={12} md={6}>
                <FormGroup className="mt-2">
                    <FormLabel>
                        Название фотосета
                    </FormLabel>
                    <FormControl value={name} onChange={event => setName(event.target.value)}/>
                </FormGroup>
                <FormGroup className="mt-2">
                    <FormLabel>
                        Устройство
                    </FormLabel>
                    <select className="d-block form-control" value={deviceId}
                            onChange={event => setDeviceId(event.target.value)} placeholder="Выберите...">
                        {
                            onlineDevices.map(device =>
                                <option key={device.uuid}
                                        value={device.uuid}>
                                    {device.name}
                                </option>
                            )
                        }
                    </select>
                </FormGroup>
            </Col>
            <Col xs={12} md={6}>
                <FormGroup className="mt-2">
                    <FormLabel>
                        Количество ракурсов
                    </FormLabel>
                    <FormControl type="number" min={1} max={360} value={imagesCount}
                                 onChange={event => setImagesCount(event.target.valueAsNumber)}/>
                </FormGroup>
                <FormGroup className="mt-2">
                    <FormLabel>
                        Токен
                    </FormLabel>
                    <FormControl value={token} onChange={event => setToken(event.target.value)}/>
                </FormGroup>
            </Col>
        </Row>
        <Row>
            <FormGroup className="mt-4">
                <Button onClick={() => Photoset.create({
                    name,
                    device_uuid: deviceId,
                    images_count: imagesCount
                }).then(() => {
                    window.location.href = "/photosets";
                })}>
                    Запустить создание фотосета
                </Button>
            </FormGroup>
        </Row>
    </Container>
}
