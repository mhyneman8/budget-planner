import { Modal, Form, Button, Image } from 'react-bootstrap';
import { useRef } from 'react';
import { useBudgets } from '../contexts/BudgetsContext';
import woman_money_phone from '../Assets/woman_money_phone.svg';

export default function AddBudgetModal({ show, handleClose }) {
    const nameRef = useRef();
    // const maxRef = useRef();
    const { addBudget } = useBudgets();
    
    function handleSubmit(e) {
        e.preventDefault();
        addBudget({
            name: nameRef.current.value,
            // max: parseFloat(maxRef.current.value)
        }) 
        handleClose();
    }
  
    return (
    <Modal show={show}>
        <Form onSubmit={handleSubmit}>
            <Modal.Header>
                <img src={woman_money_phone} alt="" className='img-fluid mx-auto' />
                {/* <img alt="" src={require('../woman_money_phone.svg')} /> */}
                {/* <Modal.Title>New Budget</Modal.Title> */}
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Add Category Type</Form.Label>
                    <Form.Control ref={nameRef} type="text" required />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="max">
                    <Form.Label>Maximum Spending</Form.Label>
                    <Form.Control ref={maxRef} type="number" required min={0} step={0.01} />
                </Form.Group> */}
                <div className='d-flex justify-content-end'>
                    <Button variant="primary-outline" type="back" onClick={handleClose}>Back</Button>

                    <Button variant="primary" type="submit">Add</Button>
                </div>
            </Modal.Body>
        </Form>
    </Modal>
  )
}
