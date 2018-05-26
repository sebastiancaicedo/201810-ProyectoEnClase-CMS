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

  export function getUsers(){
    return new Promise((resolve, reject) =>{
      firebase.database().ref('/users').on('value', snapshot => {
        const users = snapshot.val();
        let _users= [];
        const currentUserId = firebase.auth().currentUser.uid;
        for(let user in users){
          if(user !== currentUserId){
            _users.push({
              id: user,
              name: users[user].name,
              email: users[user].email,
              role: users[user].role,
              status: users[user].status
            });
          }
        }

        resolve(_users);

      });
    });
  }

  export function getUserById(userId){
    
    return firebase.database().ref("/users/"+userId).once('value')
    .then((snapshot) =>{
      
      console.log(snapshot.val());
      const val = snapshot.val()
      const _user = {
        id: userId,
        name: val.name,
        email: val.email,
        role: val.role,
        status: val.status
      }
      
      return _user;
    })
  }
  
  export function saveUserInDb(_user){
    return firebase.database().ref('/users/'+_user.id).set({
      name: _user.name,
      email: _user.email,
      role: _user.role,
      status: _user.status
    })
  }

  export function saveNewCourseInDb(course){
    return firebase.database().ref('/courses').push(course);
  }

  export function saveCourseInDb(course){
      return firebase.database().ref('/courses/'+course.id).set({
        name: course.name,
        participants: course.participants,
        description: course.description,
        sesions: course.sesions
      })
  }

  export function getCourses(){
    
    return new Promise((resolve, reject) =>{
      firebase.database().ref('/courses').on('value', snapshot => {
        const courses = snapshot.val();
        let _courses= [];
        for(let course in courses){
          _courses.push({
            id: course,
            name: courses[course].name,
            participants: courses[course].participants,
            description: courses[course].description
          });
        }

        resolve(_courses);

      });
    });
  }

  export function getCourseById(courseId){
    return firebase.database().ref("/courses/"+courseId).once('value')
    .then((snapshot) =>{
      
      console.log(snapshot.val());
      const val = snapshot.val()
      const _course = {
        id: courseId,
        name: val.name,
        participants: parseInt(val.participants),
        description: val.description,
        sesions: val.sesions
      }
      
      return _course;
    })
  }

  export function deleteCourseById(courseId){
    return firebase.database().ref("/courses/"+courseId).remove();
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

  export let isAuthenticated = new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged((user)=> {
      resolve(user)
      })
  });
  
  /*export function uploadFile(file){
      return firebase.storage().ref('images/').child(file.name).put(file);
  }*/