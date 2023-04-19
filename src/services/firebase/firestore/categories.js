import { db } from '../firebaseConfig'
import { collection } from "firebase/firestore"

export const getCategories = () => {
    const [ categories, setCategories ] = useState([])

    useEffect(() => {
        const categoriesRef = query(collection(db, 'categories'), orderBy('order'))
        getDocs(categoriesRef)
        .then(snapshot => {
            const categoriesAdapted = snapshot.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data }
            })
            setCategories(categoriesAdapted)
        }).catch(error => {
            console.log(error)
        }) 
    }, [])
}