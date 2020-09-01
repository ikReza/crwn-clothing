## Google Sign-In with Firebase

- in the `firebase.utils.js` file, we're declaring the followings:

```js
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export const auth = firebase.auth(); // initializing authentication
export const firestore = firebase.firestore(); // accessing the database

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
```

- Now we need to use this `signInWithGoogle` from `signIn.jsx` file

```js
import CustomButton from "../customButton/customButton";
import { signInWithGoogle } from "../../firebase/firebase.utils";

  return (
    <CustomButton
      variant="outlined"
      fullWidth
      onClick={signInWithGoogle}
      isGoogleSignIn
    >
      Sign In with Google
    </CustomButton>
  );
};
```

- As we have declared `auth.signInWithPopup(provider)` before, popup screen will be shown.

---

- Now we need to store this information in the database(firestore).
- We're declaring a function `createUserProfileDocument` in the `firebase.utils.js` file to store this in the database.

```js
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};
```

Using axios, we may write like this:

```js
axios.get(`users/${userAuth.uid}`);
```

Here, we're creating a reference to the database first

```js
const userRef = firestore.doc(`users/${userAuth.uid}`);
```

then, taking snapshot of the data

```js
const snapShot = await userRef.get();
```

If snapshot/data already exists in the database, `exists` property will be true. If data already exists in the database we don't want to re-create that again.

```js
if (!snapShot.exists) {
  // something need to be done
}
return userRef;
```

What I used to do using axios for creating new data - use `axios.post()`. Here, we're using `useRef.set()`

---

- Now going back to the `App.js` file and use this `createUserProfileDocument` function.

```js
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    let unSubscribeFromAuth = null;

    unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth); // this is similar to - setCurrentUser(null)
      // we want currentUser to be null after signing out
    });

    return () => {
      // to prevent memory leakage
      unSubscribeFromAuth();
    };
  }, []);

  return <div></div>;
};
```

Here, using `onSnapShot` we can access the database information in the fronend. We're not setting the `currentUser` before getting back the data from the store, that's why we're saying `wait` for some moment to finish fetching data using `await` keyword.

```js
const userRef = await createUserProfileDocument(userAuth);

userRef.onSnapshot((snapShot) => {
  setCurrentUser({
    id: snapShot.id,
    ...snapShot.data(),
  });
});
```

later we'll move this `setCurrentUser` action in the redux, because we'll need `currentUser` property in multiple places.

```js
import { setCurrentUser } from "./redux/user/userActions";
import { selectCurrentUser } from "./redux/user/user.selector";

useEffect(() => {
  let unSubscribeFromAuth = null;

  unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot((snapShot) => {
        stableDispatch(
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          })
        );
      });
    }

    stableDispatch(setCurrentUser(userAuth));
  });
  return () => {
    unSubscribeFromAuth();
  };
}, [stableDispatch]);
```

`userActions.js` file:

```js
export const setCurrentUser = (user) => async (dispatch) => {
  dispatch({
    type: actions.SET_CURRENT_USER,
    payload: user,
  });
};
```

`userReducers.js` file:

```js
const INITIAL_STATE = {
  currentUser: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
```
