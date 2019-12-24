import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ContactForm from './Contact-form';
import ContactInfo from './Contact-info';
import { staticMap } from '../../utils';
import './Contact.css';

const Contact = (props) => {

    // updateSize = () => {
    //     if(window.innerWidth < 768) this.setState({mobileView: true});
    //     else this.setState({mobileView:false});
    // }

    // componentWillMount(){
    //     window.removeEventListener("resize", this.updateSize);
    // }

    // componentDidMount(){
    //     this.updateSize();
    //     window.addEventListener("resize", this.updateSize);
    // }

    return (
        <Container className="form-section">
            <Row>
                <ContactInfo loc={staticMap} />
            </Row>
        </Container>
    );
}

export default Contact;