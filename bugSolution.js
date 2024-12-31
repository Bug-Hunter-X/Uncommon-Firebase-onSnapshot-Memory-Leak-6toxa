```javascript
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect } from 'react'; // Assuming React is used

const MyComponent = () => {
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'users'), (snapshot) => {
      snapshot.docChanges().forEach(change => {
        console.log('User change:', change.doc.data());
      });
    });
    return () => unsubscribe(); // Cleanup function to detach the listener
  }, []);

  return (
    // ... JSX to render
  );
};
```