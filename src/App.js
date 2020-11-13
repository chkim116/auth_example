import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormComponent } from "./components/FormComponent";
import { useFormInput, useSubmit } from "./hooks";
import { logOut, signInRequest, signUpRequest } from "./modules/user";

function App() {
    const [isSignIn, setIsSignIn] = useState(true);

    const onClick = useCallback(
        (e) => {
            setIsSignIn((prev) => !prev);
        },
        [isSignIn]
    );

    const { form, onChange } = useFormInput({});
    const { onSubmit: onUserSignIn } = useSubmit(signInRequest, form);
    const { onSubmit: onUserSignUp } = useSubmit(signUpRequest, form);

    const { isLogin } = useSelector((state) => state.user);

    const dispatch = useDispatch();
    const onLogout = useCallback(
        (e) => {
            dispatch(logOut());
        },
        [dispatch]
    );

    return (
        <FormComponent
            onLogout={onLogout}
            isLogin={isLogin}
            isSignIn={isSignIn}
            onClick={onClick}
            onChange={onChange}
            onUserSignIn={onUserSignIn}
            onUserSignUp={onUserSignUp}
        />
    );
}

export default App;
