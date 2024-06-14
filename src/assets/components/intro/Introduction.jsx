import React, { useContext, useEffect, useState } from 'react';
import './introduction.css';
import { ThemeContext } from '../../context/ThemeContext';
import Photo from '../../images/photo.png';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

const InfoModal = ({ show, onHide }) => {
    const { lightTheme } = useContext(ThemeContext);

    return (

        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Body className={` ${lightTheme ? 'theme__light' : 'theme__dark'}`}>
                <h4><strong> Sobre </strong></h4>
                <p>
                    Sou um apaixonado por tecnologia e soluções inovadoras. Como desenvolvedor front-end, eu tenho o compromisso de entender as necessidades e desenvolver as melhores soluções com o objetivo de trazer resultados excepcionais para os negócios. Já desenvolvi projetos para otimizar processos administrativos e aumentar a rentabilidade de empreendedores. Estou semppre em busca de novos desafios e oportunidades, para aperfeiçoar e demonstrar todo o meu potencial.
                </p>
                <div className={lightTheme ? 'pd__introduction-connect-light' : 'pd__introduction-connect-dark'}>
                    <a
                        onClick={onHide}
                        href='#'
                        className="text-reset text-decoration-none pd__introduction-content_btn ">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <p>Ocultar</p>
                    </a>
                </div>
            </Modal.Body>

        </Modal >
    );
};

const Introduction = () => {
    const { lightTheme } = useContext(ThemeContext);
    const [text, setText] = useState('');
    const toRotate = ['Douglas Moraes!   ', 'Desenvolvedor Front-End!   '];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const deletPeriod = 30;
    const writePeriod = 100;
    const [delta, setDelta] = useState(100);
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        let ticker = setInterval(() => {
            toType();
        }, delta);
        return () => clearInterval(ticker);
    }, [text]);

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(deletPeriod);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setDelta(writePeriod);
            setLoop(loop + 1);
        }
    };

    return (
        <div className={`pd__introduction section__padding ${lightTheme ? 'theme__light' : 'theme__dark'}`}>
            <div className='pd__introduction-heading'>
                <h4><strong>Bem vindo ao meu Portifólio</strong></h4>
                <h1>Olá, eu sou <span className={lightTheme ? 'highlight-light' : 'highlight-dark'}>{text}</span></h1>
            </div>
            <div className="pd__introduction-content">
                <div className='pd__introduction-content_text'>
                    <p>Sou um apaixonado por tecnologia e soluções inovadoras. Como desenvolvedor front-end, eu tenho o compromisso de entender as necessidades e desenvolver as melhores soluções com o objetivo de trazer resultados excepcionais para os negócios. Já desenvolvi projetos para otimizar processos administrativos e aumentar a rentabilidade de empreendedores. Estou semppre em busca de novos desafios e oportunidades, para aperfeiçoar e demonstrar todo o meu potencial.</p>
                </div>
                <div className='pd__introduction-content_img'>
                    <img src={Photo} alt="Minha foto" />
                </div>
            </div>
            <div className='pd__introduction-content_btn'>
                <div className={lightTheme ? 'pd__introduction-connect-light' : 'pd__introduction-connect-dark'}>
                    <a
                        onClick={(e) => { e.preventDefault(); setModalShow(true); }}
                        href='#'
                        className="text-reset text-decoration-none">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <p>Me conheça melhor!</p>
                    </a>
                </div>
            </div>

            <InfoModal
                show={modalShow}
                onHide={() => setModalShow(false)} />
        </div>
    );
};

export default Introduction;
