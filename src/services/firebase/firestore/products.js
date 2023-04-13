import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import { createAdaptedProductFromFirestore } from '../../../adapters/createAdaptedProductFromFirestore'

export const getProducts = (categoryID) => {
    const productsRef = categoryID
    ? query(collection(db, 'products'), where('category', '==', categoryID))
    : collection(db, 'products')

    return getDocs(productsRef)
        .then(snapshot => {
            const productsAdapted = snapshot.docs.map(doc => {
                return createAdaptedProductFromFirestore(doc)
            })
            return productsAdapted
        })
        .catch(error => {
            return error
        })
    }

export const getProductsByID = () => {
    
}