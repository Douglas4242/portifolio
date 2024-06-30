import React, { useContext, useEffect, useState } from 'react';
import './introduction.css';
import { ThemeContext } from '../../context/ThemeContext';
import Photo from '../../images/photo.png';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Btndefault from '../btndefault/Btndefault';

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
                <h3><strong> Sobre </strong></h3>
                <p>
                    Olá! Sou Douglas Gomes Moraes, um engenheiro mecânico recém-formado em transição para o desenvolvimento frontend. Minha jornada profissional é um testemunho da minha paixão pela tecnologia e da minha capacidade de adaptação.
                </p>
                <h3><strong>Minha Trajetória:</strong></h3>
                <p>
                    Iniciei minha carreira na engenharia, onde desenvolvi habilidades analíticas valiosas e uma mentalidade orientada para soluções. Durante minha formação, participei de projetos desafiadores como o Mini-Baja SAE, que me ensinou a importância do trabalho em equipe e da inovação.
                </p>
                <h3><strong>A Transição para o Desenvolvimento Frontend:</strong></h3>
                <p>Minha curiosidade pela tecnologia me levou a explorar o mundo do desenvolvimento web. Comecei a estudar HTML, CSS e JavaScript, e rapidamente me apaixonei pela capacidade de criar interfaces interativas e responsivas. Hoje, estou focado em aprimorar minhas habilidades em React.js e outras tecnologias modernas de frontend e expandir para um desenvolvimento Full-Stack</p>
                <h3><strong>Minhas Habilidades:</strong></h3>
                <ul>
                    <li>Desenvolvimento web com HTML5, CSS3 e JavaScript</li>
                    <li>Criação de interfaces responsivas e mobile-first</li>
                    <li>Experiência com React.js e bibliotecas de UI como Bootstrap</li>
                    <li>Conhecimento em controle de versão com Git</li>
                    <li>Habilidades analíticas e de resolução de problemas da engenharia</li>
                    <li>Inglês avançado para comunicação eficaz em ambientes globais</li>
                </ul>
                <h3><strong>Objetivos Futuros:</strong></h3>
                <p>Estou empenhado em me tornar um desenvolvedor fullstack experiente, combinando minha formação em engenharia com as mais recentes tecnologias web. Busco oportunidades para contribuir em projetos desafiadores, onde possa aplicar minha criatividade e habilidades técnicas para criar experiências digitais excepcionais.</p>
                <h3><strong>Valores Pessoais:</strong></h3>
                <p>Acredito na aprendizagem contínua, na colaboração e na busca pela excelência. Sou proativo, adaptável e sempre pronto para enfrentar novos desafios. Minha experiência em engenharia me ensinou a abordar problemas de forma sistemática, uma habilidade que aplico no desenvolvimento de software.</p>
                <div className="modal-close">
                    <Btndefault click={onHide} text="Ocultar" />
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
        <div id='intro' className={`pd__introduction section__padding ${lightTheme ? 'theme__light' : 'theme__dark'}`}>
            <div className='pd__introduction-heading'>
                <h4><strong>Bem vindo ao meu Portifólio</strong></h4>
                <h1>Olá, eu sou <span className={lightTheme ? 'highlight-light' : 'highlight-dark'}>{text}</span></h1>
            </div>
            <div className="pd__introduction-content">
                <div className='pd__introduction-content_text'>
                    <p>Sou um apaixonado por tecnologia e soluções inovadoras. Como desenvolvedor front-end, eu tenho o compromisso de entender as necessidades e desenvolver as melhores soluções com o objetivo de trazer resultados excepcionais para os negócios. Já desenvolvi projetos para otimizar processos administrativos e aumentar a rentabilidade de empreendedores. Estou sempre em busca de novos desafios e oportunidades, para aperfeiçoar e demonstrar todo o meu potencial.</p>
                </div>
                <div className='pd__introduction-content_img'>
                    <img src={Photo} alt="Minha foto" />
                </div>
            </div>
            <div className='pd__introduction-content_btn'>
                <div className={lightTheme ? 'pd__introduction-connect-light' : 'pd__introduction-connect-dark'}>
                    <Btndefault click={(e) => { e.preventDefault(); setModalShow(true); }} text="Me conheça melhor!" />
                </div>
            </div>

            <InfoModal
                show={modalShow}
                onHide={() => setModalShow(false)} />
        </div>
    );
};

export default Introduction;
