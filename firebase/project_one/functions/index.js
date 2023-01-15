const functions = require("firebase-functions");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

exports.sendmsg = functions.firestore.document('products/{productId}')
                                    .onCreate(event => {
                                        const docId = event.params.productId;
                                        const name = event.data.data().name;
                                        const product = admin.firestore().collection('products').doc(docId)
                                        return product.update({ message: 'NICE ${name}! '})
                                    });
