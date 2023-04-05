
let intialState={
    name:"",
    age:null,
    gender:null
}

export default function reducer (currentState=intialState,action) {

    switch(action.type){
        case "SET_USER":
            return{
                name:action.payload.name,
                age:action.payload.age,
                gender:action.payload.gender,
                exam:action.payload.exam
            }
            default :
            return currentState
    }


  
}