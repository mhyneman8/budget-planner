import { Modal, Form, Button, Image } from 'react-bootstrap';
import { useRef } from 'react';
import { useBudgets } from '../contexts/BudgetsContext';
import woman_money_phone from '../Assets/woman_money_phone.svg';
import AddExpenseModal from './AddExpenseModal';

export default function AddBudgetModal({ show, handleClose, addExpenseModalBudgetId, setShowAddExpenseModal }) {
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
            <Modal.Body >
                <div className='text-center m-3'>
                    <img src={woman_money_phone} alt="" className='img-fluid ' />
                </div>

                <Form.Group className="mb-3 text-left" controlId="name">
                    <Form.Label>Add Category Type</Form.Label>
                    <Form.Control ref={nameRef} type="text" required />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="max">
                    <Form.Label>Maximum Spending</Form.Label>
                    <Form.Control ref={maxRef} type="number" required min={0} step={0.01} />
                </Form.Group> */}

                <AddExpenseModal
                    defaultBudgetId={addExpenseModalBudgetId}
                    // show={showAddExpenseModal} 
                    handleClose={() => setShowAddExpenseModal(false)} 
                    />

                <div className='d-flex p-3 justify-content-between'>
                    <Button variant="" className='btn btn-outline-primary' type="back" onClick={handleClose}>
                        Back
                    </Button>
                    <Button variant="primary" type="submit" className='btn'>
                        Add
                    </Button>
                </div>
            </Modal.Body>
        </Form>
    </Modal>
  )
}
