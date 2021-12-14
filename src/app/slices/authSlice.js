import { createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  signOut,
} from "@firebase/auth";
import { authGoogle } from "../../firebase/firebaseConfig";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    ready: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setReady: (state) => {
      state.ready = true;
    },
  },
});

export const { setUser, setReady } = authSlice.actions;

export default authSlice.reducer;

export const loginEmailPassword = (email, password) => (dispatch) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then(({ user }) => {
      console.log("Welcome " + (user.displayName || user.email));
      console.log(user);
      dispatch(
        setUser({ name: user.displayName, email: user.email, uid: user.uid })
      );
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

export const loginGoogle = () => {
  const auth = getAuth();
  signInWithPopup(auth, authGoogle)
    .then(({ user }) => {
      console.log("Welcome " + (user.displayName || user.email));
    })
    .catch((e) => {
      console.log(e);
    });
};

export const registerEmailPassword =
  (name, lastName, email, password, repPassword) => (dispatch) => {
    if (password === repPassword) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then(async ({ user }) => {
          await updateProfile(auth.currentUser, {
            displayName: `${name} ${lastName}`,
          });
          console.log(user);
          window.alert("Registered user successfully");
        })
        .catch((error) => {
          console.log(error);
          console.log("there is an error");
        });
    } else {
      console.log("Different passwords");
    }
  };

export const logout = () => (dispatch) => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      console.log("Sign-out successful");
    })
    .catch((error) => {
      console.log("An error happened.");
    });
};
