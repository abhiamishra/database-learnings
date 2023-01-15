document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
    console.log(app);

    const db = firebase.firestore();

    const mypost = db.collection('posts').doc('firstpost');

    // mypost.onSnapshot(doc => {
    //     const data = doc.data();
    //     document.write(data.title + `<br>`)
    //     document.write(data.createdAT + `<br>`)
    // })

    
    // mypost.onSnapshot(doc => {
    //     const data = doc.data();
    //     document.querySelector('#title').innerHTML = data.title
    // })

    // const products = db.collection('products');
    // const query = products.where('price', '>', 15)

    // query.get()
    //     .then(products => {
    //         products.forEach(doc => {
    //             data = doc.data()
    //             document.write(`${data.name} at $ ${data.price} <br> `)
    //         })
    //     })
})

function uploadFile(files){
    const storage = firebase.storage().ref();
    const horse = storage.child('image.png');

    const file = files.item(0);
    const task = horse.put(file);

    task.then(snapshot => {
        console.log(snapshot)
        const url = snapshot.downloadURL
        document.querySelector('#imgUpload').setAttribute('src', url)
    })
}
function updatePost(e){
    const db = firebase.firestore();
    const mypost = db.collection('posts').doc('firstpost');
    mypost.update({title: e.target.value })

}

function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
        .then( result => {
            const user = result.user;
            document.write(`Hello ${user.displayName}`);
            console.log(user);
        })
        .catch(console.log)
}