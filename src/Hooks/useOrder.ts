"use client";

import {useState} from "react";

export function useOrder(){
    const [token, setToken] = useState('');

    const onClickToken = (tokenData) => {
        console.log(tokenData);
        setToken(token);
    }

    return {
        onClickToken, token, setToken
    }
}