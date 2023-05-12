import React from "react";
import { styles } from "../styles";
import { AiFillGoogleCircle } from "react-icons/ai";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase/Config";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/features/userSlice";
import { useNavigate } from "react-router-dom";

const Login = ({setLogin}) => {
  const {user} = useSelector((state)=>state.user)
    const navigate = useNavigate()
  const dispatch = useDispatch();
  const googleProvider = new GoogleAuthProvider();

  const signIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      dispatch(
        login({
          email: result.user.email,
          id: result.user.uid,
          name: result.user.displayName,
          pic: result.user.photoURL,
          Favs:[],
          RecentlyPlayed:[]
        })
      );
      setLogin(false)
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className={`${styles.Container} ${styles.Space} flex flex-col items-center gap-4`}>
      <h1 className={`${styles.mainText}`}>JOIN NOW</h1>
      <p className={`${styles.Paragraph} text-center`}>
        Sign In with Goole Now to enjoy listening to your favorite Songs and
        Artists and create your favorites list!
      </p>
      {!user && 
        <div onClick={signIn} className={`${styles.Gradient1} cursor-pointer rounded-md `}>
          <p className={`${styles.MainColor} flex items-center gap-1 p-2`}>
            <AiFillGoogleCircle  size={25} />
            Sign in With google
          </p>
        </div>
      
     }
    </section>
  );
};

export default Login;
