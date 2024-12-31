# Uncommon Firebase onSnapshot Memory Leak

This repository demonstrates an uncommon error in Firebase Firestore where an `onSnapshot` listener is not properly detached, leading to memory leaks and unexpected behavior.  The problem is detailed below and a solution is provided.

## Problem
The provided `bug.js` file contains code that uses `onSnapshot` to listen for changes in a Firestore collection.  However, it fails to call `unsubscribe()` to detach the listener when it's no longer needed, resulting in a memory leak.

## Solution
The `bugSolution.js` file provides the corrected code.  It uses a `useEffect` hook to ensure the listener is detached when the component unmounts, preventing memory leaks.