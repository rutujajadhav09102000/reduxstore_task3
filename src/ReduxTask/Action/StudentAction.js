import { ADD_STUDENT, DELETE_STUDENT, GET_STUDENT, UPDATE_STUDENT } from "../Type/Types"

export const add_Student = (student) => ({
    type : ADD_STUDENT,
    payload : student
})
export const get_Student = () => ({
    type : GET_STUDENT,
})
export const update_Student = (student) =>( {
    type : UPDATE_STUDENT,
    payload : student
})
export const delete_Student = (stu_Id) => ({
    type : DELETE_STUDENT,
    payload : stu_Id
})