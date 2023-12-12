import React, { useEffect, useState } from "react"
import { connect } from 'react-redux'
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'
import { add_Student, delete_Student, get_Student, update_Student } from "../Action/StudentAction"

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import '../heading.css'


const StudentState = ({ students, add_Student, get_Student, delete_Student, update_Student }) => {

    const [newStudent, setNewStudent] = useState({ id: null, name: "", address: "", degree: "" })

    const [editMode, setEditMode] = useState(false);

    const [validated, setValidated] = useState(false);

    useEffect(() => {
        get_Student();
    }, [get_Student]);

    const handleAddStudent = () => {

            if ( newStudent.name !== "" && newStudent.address !== "" && newStudent.degree !== "") {
            if (editMode) {
                update_Student(newStudent);
                setEditMode(false);
            }
            else {
                add_Student({ ...newStudent, id: Date.now() });
            }
            setNewStudent({ id: null, name: "", address: "", degree: "" });

        }
        else {
            alert("Fill all Fields")
            setValidated(true)
        }

    }

    const handleUpdateStudent = (student) => {
        setNewStudent(student)
        setEditMode(true);
    }

    const handleDeleteStudent = (stu_Id) => {
        delete_Student(stu_Id);
    }

    
    return (
        <>
            <h2 className="c1">Student Registration Form</h2>
            <Form noValidate validated={validated} >
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter the name"
                            value={newStudent.name}
                            onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter the address"
                            value={newStudent.address}
                            onChange={(e) => setNewStudent({ ...newStudent, address: e.target.value })}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Degree</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter the degree"
                            value={newStudent.degree}
                            onChange={(e) => setNewStudent({ ...newStudent, degree: e.target.value })}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>Country</Form.Label>
          <Form.Control type="text" placeholder="Country" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid country.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
                <Form.Group className="mb-3">
                    <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                    />
                </Form.Group>
                <Button variant="dark" onClick={handleAddStudent}>{editMode ? 'Update Student' : 'Add Student'}</Button>

            </Form>
            <h2 className="c2">Student Registered Table</h2>
            
            <Table striped bordered hover variant="dark">

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>ADDRESS</th>
                        <th>DEGREE</th>
                        <th>UPDATE</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        students.map((student, index) => {
                            return (
                                <tr key={index}>

                                    <td>{index + 1}</td>
                                    <td>{student.name}</td>
                                    <td>{student.address}</td>
                                    <td>{student.degree}</td>
                                    <td><Button variant="success" onClick={() => handleUpdateStudent(student)}><BsFillPencilFill/></Button></td>
                                    <td><Button variant="danger" onClick={() => handleDeleteStudent(student.id)}><BsFillTrashFill/></Button></td>
                                </tr>
                            )
                        })}
                </tbody>
            {/* </table> */}
            </Table>
        </>
    )
}
const mapStateToProps = (state) => ({
    students: state.students
})
const mapDispatchToProps = {
    add_Student,
    get_Student,
    delete_Student,
    update_Student,
}
export default connect(mapStateToProps, mapDispatchToProps)(StudentState)