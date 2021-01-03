import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
    return new Vuex.Store({
        state: {
            fetchedPosts: [],
          
            token : "",
        fbAPIKey : "AIzaSyAGPAVr9Uncmagw-TDPWU_XYcebA6tREec",
        post : [],
       
        
        },
        mutations: {
            setPosts(state, posts) {
                state.fetchedPosts = posts
            },
            addPost(state, post) {
                state.fetchedPosts.push(post)
            },
            updatePost(state, editedPost) {
                console.log("Mutations => " + editedPost);
                let post_index = state.fetchedPosts.findIndex(post => post.id == editedPost.id)
                console.log("Mutations | POST INDEX => " + post_index)
                state.fetchedPosts[post_index] = editedPost
            },
            
              setToken(state, token){
                state.token = token
            },
            clearToken(state){
                state.token = ""
            },
            
           
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return axios.get("https://melimelek-default-rtdb.firebaseio.com//posts.json")
                    .then(response => {
                          console.log(response)
                          
                        let data = response.data;
                        let postArray = []
                        for (let key in data) {
                            // data["id"] = key
                            postArray.push({id: key, ...data[key]})
                        }
                        vuexContext.commit("setPosts", postArray)
                       
                    })
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit("setPosts", posts)
            },
            addPost(vuexContext, post) {
                return axios.post("https://melimelek-default-rtdb.firebaseio.com/", post)
                    .then(response => {
                        vuexContext.commit("addPost", {...post, id: response.data.name})
                    })
            },
            updatePost(vuexContext, editedPost) {
                return axios.put("https://melimelek-default-rtdb.firebaseio.com//posts/" + editedPost.id + ".json", editedPost)
                    .then(response => {
                        console.log("Action => " + editedPost);
                        vuexContext.commit("updatePost", editedPost)
                    })
                    .catch(e => console.log(e))
            },
              
              login({commit,dispatch,state},authData){

                  if(authData.isUser)
                  {
                    
            return  axios.post(

            " https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAGPAVr9Uncmagw-TDPWU_XYcebA6tREec",
              { email :authData.email, password : authData.password, returnSecureToken : true}
           
            ).then(response =>{
              commit("setToken",response.data.idToken)
            }
            )
           }
       
            return  axios.post(

            "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAGPAVr9Uncmagw-TDPWU_XYcebA6tREec",
              { email : authData.email, password : authData.password, returnSecureToken : true}
           
            ).then(response =>{
              commit("setToken",response.data.idToken)
            }
            )

              },
              logout({commit,dispatch,state})
              {},
    
           
        },
        getters: {
            getPosts(state) {
                return state.fetchedPosts
            },
          isAuthenticated(state){
              return state.token !== ""
          }
        },

    
    })
}

export default createStore