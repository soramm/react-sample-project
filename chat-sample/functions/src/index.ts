import * as functions from 'firebase-functions';
 import * as admin from "firebase-admin"; 
 admin.initializeApp();  //adminを初期化
  const db = admin.firestore(); 

  const sendResponse = (response: functions.Response, statusCode: number, body: any) => {
    response.send({
        statusCode,
        body: JSON.stringify(body)
    });
};   //responを返す

  export const addDataset = functions.https.onRequest(async (req: any, res: any) => {
    if (req.method !== 'POST') {
        sendResponse(res, 405, {error: "Invalid Request"})  //postじゃなかったら405エラーを返す
    } else {
        const dataset = req.body;
        for (const key of Object.keys(dataset)) { //objectのkeyを取り出す
            const data = dataset[key];
            await db.collection('questions').doc(key).set(data)
        }
        sendResponse(res, 200, {message: 'Successfully added dataset! WooHoo!'});
    }
});
