console.log('in profilejs')

// determine if the current user is visiting their own profile
auth.onAuthStateChanged(user => {
    const url = window.location.href;
    let username = url.substr(url.lastIndexOf("/") + 1);
    const doc = db1.collection('users').where('username', '==', username);
    doc.get().then((snapshot) => {
        snapshot.forEach(doc => {
            document.getElementById("firstName").innerHTML = doc.data().firstName;
            document.getElementById("lastName").innerHTML = doc.data().lastName;
            document.getElementById("location").innerHTML = doc.data().location;
            document.getElementById("favoriteGenre").innerHTML = doc.data().favoriteGenre;
            document.getElementById("biography").innerHTML = doc.data().biography;     
        })
    })
    // if (user) {
    //     console.log(user.uid)
    //     const doc = db1.collection('users').doc(user.uid);
    //     doc.get().then((obj) => {
    //         if (!obj.exists) {
    //             console.log('no doc exists') 
    //         }
    //         else {
    //             document.getElementById("firstName").innerHTML = obj.data().firstName;
    //             document.getElementById("lastName").innerHTML = obj.data().lastName;
    //             document.getElementById("location").innerHTML = obj.data().location;
    //             document.getElementById("favoriteGenre").innerHTML = obj.data().favoriteGenre;
    //             document.getElementById("biography").innerHTML = obj.data().biography;
    //         }
    //     })
    // }
    // else {
    //     const url = window.location.href;
    //     let username = url.substr(url.lastIndexOf("/") + 1);
    //     const doc = db1.collection('users').where('username', '==', username);
    //     doc.get().then((obj) => {
    //         console.log(obj.data())
    //         document.getElementById("firstName").innerHTML = obj.data().firstName;
    //         document.getElementById("lastName").innerHTML = obj.data().lastName;
    //         document.getElementById("location").innerHTML = obj.data().location;
    //         document.getElementById("favoriteGenre").innerHTML = obj.data().favoriteGenre;
    //         document.getElementById("biography").innerHTML = obj.data().biography;            
    //     })
    // }
})