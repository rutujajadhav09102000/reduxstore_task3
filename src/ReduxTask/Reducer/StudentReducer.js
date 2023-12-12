import { ADD_STUDENT, DELETE_STUDENT, GET_STUDENT, UPDATE_STUDENT } from "../Type/Types"

const initialState = {
    students : [],
};
export const studentReducer = (state = initialState,action)=>{
    switch(action.type){

        case ADD_STUDENT : 
            return{
                ...state,students : [...state.students , action.payload],
            }

        case GET_STUDENT : 
            return state ;

        case UPDATE_STUDENT : 
            return {
                ...state,
                students : state.students.map((student)=>
                        student.id === action.payload.id ? action.payload : student
                        ),
            };

        case DELETE_STUDENT : 
            return{
                ...state,
                students : state.students.filter((student)=>student.id !== action.payload )
                
            }

        default : return state;
    }
}
// export default StudentReducer