import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

const signup = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    localStorage.setItem("token", userCredential._tokenResponse.idToken);
    console.log(userCredential);
  } catch (error) {
    return console.log({ message: "User already exist!", status: 409 });
  }
};

const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    localStorage.setItem("token", userCredential._tokenResponse.idToken);
    return console.log(userCredential);
  } catch (error) {
    return console.log(error);
  }
};

export { login, signup };
