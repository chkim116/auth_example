import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

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

export const useInput = (initialValue) => {
    const [text, setText] = useState(initialValue);
    const onChange = useCallback((e) => {
        const { value } = e.target;
        setText(value);
    });

    return [text, setText, onChange];
};

export const useSubmit = (dispatchName, value) => {
    const dispatch = useDispatch();
    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();
            dispatch(dispatch(dispatchName(value)));
        },
        [value, dispatch]
    );

    return { onSubmit };
};
