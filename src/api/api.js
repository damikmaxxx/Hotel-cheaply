import db from '../index';
import { collection, addDoc, getDocs } from "firebase/firestore"; 

export  const firebaseAPI = {
    async getHotels () {
        const querySnapshot = await getDocs(collection(db, "hotels"));
        let info = [];
        querySnapshot.forEach((doc) => {
            info.push(doc.data())
        });
        return info
    },
     addHotels(date){
        date.forEach(async (item) => {
            try {
                const docRef = await addDoc(collection(db, "hotels"), item);
                console.log("Document written with ID: ", docRef.id);
              } catch (e) {
                console.error("Error adding document: ", e);
              }  
        })
        
    }
}
