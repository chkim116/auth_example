import React from "react";

export const FormComponent = ({
    isSignIn,
    isLogin,
    onClick,
    onChange,
    onUserSignIn,
    onUserSignUp,
    onLogout,
}) => {
    return (
        <>
            {isLogin ? (
                <>
                    <div>currentUser : Login</div>
                    <button type="button" onClick={onLogout}>
                        Logout
                    </button>
                </>
            ) : (
                <>
                    <div>curretUser : Logout</div>

                    <form
                        onChange={onChange}
                        onSubmit={isSignIn ? onUserSignIn : onUserSignUp}>
                        <h3>{isSignIn ? "signIn" : "signUp"}</h3>
                        {isSignIn || (
                            <input type="text" placeholder="name" name="name" />
                        )}
                        <input type="email" placeholder="email" name="email" />
                        <input
                            type="password"
                            placeholder="password"
                            name="password"
                        />
                        <button type="submit">Submit</button>
                        <button onClick={onClick} type="button">
                            {isSignIn ? "SignUp" : "signIn"}
                        </button>
                    </form>
                </>
            )}
        </>
    );
};
