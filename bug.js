The following code snippet demonstrates an uncommon error in Firebase where a listener is not removed, leading to memory leaks and unexpected behavior.  This occurs when using `onSnapshot` without properly detaching the listener when it is no longer needed.

```javascript
// Problematic code:
import { collection, onSnapshot } from "firebase/firestore";

const unsubscribe = onSnapshot(collection(db, 'users'), (snapshot) => {
  // Process the snapshot data
  snapshot.docChanges().forEach(change => {
    console.log('User change:', change.doc.data());
  });
});

// ... later in the code, unsubscribe is never called, causing a memory leak
```