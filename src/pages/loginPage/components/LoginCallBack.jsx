import { useEffect, useState } from "react";
import { getUserInfo } from "../../../server/user";

export default function LoginCallBack() {
    const [userInfo, setUserInfo] = useState(null);
    useEffect(() => {
        const fetchInfo = async () => {
            const response = await getUserInfo();
            console.log(response);
            sessionStorage.setItem("userInfo", JSON.stringify(response));
            sessionStorage.setItem("access", response.access);
            sessionStorage.setItem("refresh", response.refresh);
            setUserInfo(response);
        }
        fetchInfo();
    }, []);

    useEffect(() => {
        if (!userInfo) return;
        location.href = "/";
    }, [userInfo]);
    return null;
}