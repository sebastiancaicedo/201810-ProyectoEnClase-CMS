import firebase from 'firebase';

	const config = {
		apiKey: "AIzaSyCYc0XqC8uzLQqVfLbS7J2RlsXxeSvl9-o",
		authDomain: "pf-web-cms.firebaseapp.com",
		databaseURL: "https://pf-web-cms.firebaseio.com",
		storageBucket: "pf-web-cms.appspot.com",
		messagingSenderId: "196534033086"
	};

  firebase.initializeApp(config);
  
  /*export function loadData(){
      return firebase.database().ref('/messages/');
  }
  export function sendData(mensaje){
      return firebase.database().ref('/messages/').push(mensaje);
  }*/
  
  export function getUserById(userId){
    console.log(firebase.database().ref("/users/").child(userId+""));
    console.log(firebase.database());
    
    return firebase.database().ref("/users/"+userId).once('value')
    .then((snapshot) =>{
      
      console.log(snapshot.val());
      const val = snapshot.val()
      const _user = {
        id: userId,
        role: val.role
      }
      
      return _user;
    })
  }
  
  export function getUsers(){
    return firebase.database().ref("/users");
  }
  
  export function saveUserInDb(_user){
    return firebase.database().ref('/users/'+_user.id).set({
      name: _user.name,
      email: _user.email,
      role: _user.role,
    })
  }
  
  /*export function deleteUserById(userId){
     return firebase.database().ref("/users/"+userId).remove()
  }*/
  
  /*export function deleteData(mensajeId){
    firebase.database().ref('/messages/').child(mensajeId).remove();
  }*/
  export function logOut(){
    return firebase.auth().signOut()
  }

  export function logIn(user){
    return firebase.auth().signInWithEmailAndPassword(user.email,user.password)
  }
  
  export function signUp(email, password){
    return firebase.auth().createUserWithEmailAndPassword(email, password)
  }
  
  /*export function uploadFile(file){
      return firebase.storage().ref('images/').child(file.name).put(file);
  }*/
  
  export let isAuthenticated = new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user)=> {
        resolve(user)
        })
    });