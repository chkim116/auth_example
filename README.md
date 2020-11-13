### Auth_example

<hr>
Redux, Redux-saga와 함께
<br>
커스텀 훅으로 만든 회원가입/로그인 폼입니다.

#### CustomHooks

<strong>1. useFormInput</strong>

```c
export const useFormInput = (initialValue) => {
    const [form, setForm] = useState(initialValue);
    const onChange = useCallback(
        (e) => {
            const { name, value } = e.target;
            setForm({ ...form, [name]: value });
        },
        [form]
    );

    return { form, onChange };
};
```

useFormInput은
form object와 onChange 함수를 반환합니다.

<strong>2. useSubmit</strong>

```c
export const useSubmit = (dispatchName, value) => {
    const dispatch = useDispatch();
    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();
            dispatch(dispatch(dispatchName(value)));
        },
        [value, dispatch, dispatchName]
    );

    return { onSubmit };
};
```

useSubmit은 dispatch와 value를 인자로 받고
onSubmit 함수를 반환합니다.

<strong>3. useInput</strong>

```c
export const useInput = (initialValue) => {
    const [text, setText] = useState(initialValue);
    const onChange = useCallback((e) => {
        const { value } = e.target;
        setText(value);
    }, [text]);

    return [text, setText, onChange];
};
```

useInput은 useFormInput의 기본 형태입니다.
text, setText, onChange를 반환합니다.

<hr>
### 실제 사례

```c
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormComponent } from "./components/FormComponent";
import { useFormInput, useSubmit } from "./hooks";
import { logOut, signInRequest, signUpRequest } from "./modules/user";

function App() {
    // signIn => signUp Change
    const [isSignIn, setIsSignIn] = useState(true);
    const onClick = useCallback(
        (e) => {
            setIsSignIn((prev) => !prev);
        },
        [isSignIn]
    );

    // customhooks
    const { form, onChange } = useFormInput({});
    const { onSubmit: onUserSignIn } = useSubmit(signInRequest, form);
    const { onSubmit: onUserSignUp } = useSubmit(signUpRequest, form);

    const { isLogin } = useSelector((state) => state.user);

    // logout
    const dispatch = useDispatch();
    const onLogout = useCallback((e) => {
        dispatch(logOut());
    });

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
```
