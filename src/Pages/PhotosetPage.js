import React, {useEffect, useState} from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import PropTypes from "prop-types";
import {useParams} from "react-router";
import Photoset from "../Models/Photoset";
import Carousel, {slidesToShowPlugin, autoplayPlugin} from '@brainhubeu/react-carousel';

export default function PhotosetPage() {
    const params = useParams();
    const [photoset, setPhotoset] = useState(null);
    const [images, setImages] = useState(null);
    const [video, setVideo] = useState(null);
    const carouselPlugins = [
        'infinite',
        {
            resolve: slidesToShowPlugin,
            options: {
                // Make it a bit more responsive
                numberOfSlides: 6 - +(window.innerWidth < 800) * 2 - +(window.innerWidth < 600) * 3
            }
        },
        {
            resolve: autoplayPlugin,
            options: {
                interval: 1500,
            }
        }]
    useEffect(() => {
        new Photoset(params.id).retrieve().then(photoset => {
            setPhotoset(photoset);
            photoset.images().then(setImages).catch();
            photoset.video().then(setVideo).catch(request => {
                if (request instanceof XMLHttpRequest && request.status === 404) {
                    setVideo("NO VIDEO");
                } else {
                    setVideo("VIDEO ERROR");
                }
            });
        }).catch(() => {
            const photoset = Photoset.newInstance().fillIn({
                uuid: "fake",
                name: "Пробный фотосет",
                created_at: {format: () => new Date().toISOString()},
            });
            setPhotoset(photoset);
            setImages([
                {uuid: "1", preview_path: "/icon.png"},
                {uuid: "2", preview_path: "/icon.png"},
                {uuid: "3", preview_path: "/icon.png"}
            ]);
            setVideo({
                path: "/test.mp4"
            });
            setVideo("NO VIDEO");
        })
    }, []);
    console.log("VIDEO", video);
    return (photoset ?
        <Container className="model">
            <h1 className="mt-4 mb-3">{photoset.name}</h1>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Идентификатор</th>
                    <th scope="col">Имя</th>
                    <th scope="col">Дата создания</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">{photoset.uuid}</th>
                    <td>{photoset.name}</td>
                    <td>{photoset.created_at.format("DD.MM.YYYY HH:mm")}</td>
                </tr>
                </tbody>
            </table>
            <Row>
                {images ? <Col xs={12} className="my-3">
                    <h2>Фотографии</h2>
                    <Carousel plugins={carouselPlugins}>
                        {images.map(
                            image => <img
                                src={image.preview_path || image.path}
                                alt={"Image " + image.uuid}
                                key={image.uuid}
                            />
                        )}
                    </Carousel></Col> : null}
                {video !== null ? <Col xs={12} className="my-4">
                    <h2>Видео</h2>
                    {video === "NO VIDEO" ? <div>
                        <p>Видео пока не создано</p>
                        {images && images.length ? <Button onClick={() => {
                            photoset.requestVideo().then(() => window.location.reload()).catch(console.error);
                        }}>Создать</Button> : null}
                    </div> : (
                        video === "VIDEO ERROR" ? <div>Ошибка при загрузке видео</div> :
                            <div>
                                {video.finished_at ?
                                    <video src={video.path} controls className="w-100"/>
                                    : <p>Видео в процессе создания</p>}
                            </div>
                    )}
                </Col> : null}
            </Row>
        </Container>
        : "Loading...");
}

PhotosetPage.propTypes =
    {
        params: PropTypes.object
    }
