import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { doLogin } from '../../../redux/actions/AuthAction';
import { useNavigation } from '@react-navigation/native';

export default function UseLogin() {
    const navigate = useNavigation()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [server_error, setServerError] = useState({})
    const [err, setErr] = useState({ errKey: 0, errText: "" })

    const dispatch = useDispatch()

    const doLoginUser = () => {
        if (email === "") {
            console.log('Inside if of email');
            setErr({ errKey: 1, errText: "Enter your email." })
        } else if(email !== "") {

        } else if (password === "") {
            setErr({ errKey: 2, errText: "Enter your password." })
        } else
            console.log("Always Trigger");
        dispatch(doLogin(email, password, navigate, setLoading, setServerError))
        // setErr("")
    }

    // console.log('server_error: ', server_error, "err", err);


    return [{ err, loading, email, password, setEmail, setPassword, doLoginUser, server_error }]
}
