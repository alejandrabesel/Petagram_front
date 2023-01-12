import axios from 'axios';
const URL = "http://localhost:4000/";

export const GET_ALL_POSTS = "GET_ALL_POSTS";
export const GET_POSTS_BY_PET_ID = "GET_POSTS_BY_PET_ID";
export const CREATE_POST = "CREATE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";
export const ADD_REACTIONS = "ADD_REACTIONS";
export const ADD_COMMENT = "ADD_COMMENT";

export const GET_ALL_PETS = "GET_ALL_PETS";
export const GET_PET_BY_ID = "GET_PET_BY_ID";
export const GET_PET_LOOKING_PARTNER = "GET_PET_LOOKING_PARTNER";
export const CREATE_PET = "CREATE_PET";
export const UPDATE_PET = "UPDATE_PET";
export const DELETE_PET= "DELETE_PET";

export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_USER_BY_ID = "GET_USER_BY_ID";
export const CREATE_USER = "CREATE_USER";
export const UPDATE_USER = "UPDATE_USER";
export const DELETE_USER = "DELETE_USER";

export const GET_SPECIES = "GET_SPECIES";
export const CREATE_SPECIE = "CREATE_SPECIE";
export const GET_RACE = "GET_RACE";
export const CREATE_RACE = "CREATE_RACE";

export const CLEAN_ERROR = "CLEAN_ERROR";
export const CLEAN_PAGE = "CLEAN_PAGE";


//---------------------------POSTS/POSTEOS-------------------------------
export const getAllPosts = ()=>{
    return async (dispatch)=>{
        const json = await axios.get(`${URL}post`);
        return dispatch({type: GET_ALL_POSTS, payload: json.data});
    }
};

export const getPostsByPetId = (petId)=>{
    return async (dispatch)=>{
        try {
            const json = await axios.get(`${URL}post/${petId}`);
            return dispatch ({type: GET_POSTS_BY_PET_ID, payload: json.data});
        } catch (error){
            console.log(error);
        }
    }
};

export const createPost = (petId, payload)=> async (dispatch)=>{
    try{
        console.log(payload)
        await axios.post(`${URL}post/${petId}`, payload);
        return dispatch ({type: CREATE_POST});
    }catch (error){
        console.log (error)
        return alert ("Post not created");
    }
};

export const updatePost = (id, payload)=> async(dispatch)=>{
    try {
        console.log(payload)
        await axios.put(`${URL}post/${id}`, payload);
        return dispatch({type: UPDATE_POST});
    }catch(error){
        console.log (error)
        return alert("Error updating post")
    }
};

export const deletePost = (id)=>{
    return async (dispatch)=>{
        try{
            await axios.delete(`${URL}post/${id}`);
            return dispatch ({type: DELETE_POST});
        }catch (error){
            console.log(error);
            return alert("Error deleting post")
        }
    }
};

export const addReactions = (id, payload)=> async(dispatch)=>{
    try {
        console.log(payload)
        await axios.put(`${URL}post/reaction/${id}`, payload);
        return dispatch({type: ADD_REACTIONS});
    }catch(error){
        console.log (error)
        return alert("Error adding reactions")
    }
};

export const addComment = (id, payload)=> async(dispatch)=>{
    try {
        console.log(payload)
        await axios.put(`${URL}post/comment/${id}`, payload);
        return dispatch({type: ADD_COMMENT});
    }catch(error){
        console.log (error)
        return alert("Error adding comment")
    }
};

//-------------------------------PETS------------------------------------
export const getAllPets = ()=>{
    return async (dispatch)=>{
        const json = await axios.get(`${URL}pet`);
        return dispatch ({type: GET_ALL_PETS, payload:json.data});
    }
};

export const getPetById = (id)=>{
    return async (dispatch)=>{
        try {
            const json = await axios.get(`${URL}pet/${id}`);
            return dispatch ({type: GET_PET_BY_ID, payload: json.data});
        } catch (error){
            console.log(error);
        }
    }
};

export const getPetLookingPartner = ()=>{
    return async (dispatch)=>{
        const json = await axios.get(`${URL}looking-partner`);
        return dispatch ({type: GET_PET_LOOKING_PARTNER, payload:json.data});
    }
};

export const createPet = (payload)=> async (dispatch)=>{
    try{
        console.log(payload)
        await axios.post(`${URL}pet`, payload);
        return dispatch ({type: CREATE_PET});
    }catch (error){
        console.log (error)
        return alert ("Pet not created");
    }
};

export const updatePet = (id, payload)=> async(dispatch)=>{
    try {
        console.log(payload)
        await axios.put(`${URL}pet/${id}`, payload);
        return dispatch({type: UPDATE_PET});
    }catch(error){
        console.log (error)
        return alert("Error updating pet")
    }
};

export const deletePet = (id)=>{
    return async (dispatch)=>{
        try{
            await axios.delete(`${URL}pet/${id}`);
            return dispatch ({type: DELETE_PET});
        }catch (error){
            console.log(error);
            return alert("Error deleting pet")
        }
    }
};

//-------------------------------USERS-----------------------------------
export const getAllUsers = ()=>{
    return async (dispatch)=>{
        const json = await axios.get(`${URL}user`);
        return dispatch ({type: GET_ALL_USERS, payload:json.data});
    }
};

export const getUserById = (id)=>{
    return async (dispatch)=>{
        try {
            const json = await axios.get(`${URL}user/${id}`);
            return dispatch ({type: GET_USER_BY_ID, payload: json.data});
        } catch (error){
            console.log(error);
        }
    }
};

export const createUser = (payload)=> async (dispatch)=>{
    try{
        console.log(payload)
        await axios.post(`${URL}user`, payload);
        return dispatch ({type: CREATE_USER});
    }catch (error){
        console.log (error)
        return alert ("User not created");
    }
};

export const updateUser = (id, payload)=> async(dispatch)=>{
    try {
        console.log(payload)
        await axios.patch(`${URL}user/${id}`, payload);
        return dispatch({type: UPDATE_USER});
    }catch(error){
        console.log (error)
        return alert("Error updating user")
    }
};

export const deleteUser = (id)=>{
    return async (dispatch)=>{
        try{
            await axios.delete(`${URL}user/${id}`);
            return dispatch ({type: DELETE_USER});
        }catch (error){
            console.log(error);
            return alert("Error deleting user")
        }
    }
};

//---------------------------SPECIES/RACE--------------------------------
export const getSpecies = ()=>{
    return async (dispatch)=>{
        const json = await axios.get(`${URL}specie`);
        return dispatch ({type: GET_SPECIES, payload:json.data});
    }
};

export const createSpecie = (payload)=> async (dispatch)=>{
    try{
        console.log(payload)
        await axios.post(`${URL}specie`, payload);
        return dispatch ({type: CREATE_SPECIE});
    }catch (error){
        console.log (error)
        return alert ("Specie not created");
    }
};

export const getRace = ()=>{
    return async (dispatch)=>{
        const json = await axios.get(`${URL}race`);
        return dispatch ({type: GET_RACE, payload:json.data});
    }
};

export const createRace = (payload)=> async (dispatch)=>{
    try{
        console.log(payload)
        await axios.post(`${URL}race`, payload);
        return dispatch ({type: CREATE_RACE});
    }catch (error){
        console.log (error)
        return alert ("Race not created");
    }
};

//-------------------------------CLEAN-----------------------------------
export const cleanError = ()=>{
    return {type: CLEAN_ERROR}
  };

export const cleanPage = ()=>{
    return {type: CLEAN_PAGE}
};

