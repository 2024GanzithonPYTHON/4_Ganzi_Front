import { useEffect } from "react";
import { getUserInfo } from "../../../server/user";

export default function LoginCallBack() {
    useEffect(() => {
        const fetchInfo = async () => {
            const response = await getUserInfo();
            console.log(response);
            sessionStorage.setItem("userInfo", JSON.stringify(response));
            sessionStorage.setItem("access", response.access);
            sessionStorage.setItem("refresh", response.refresh);
            location.href = "/";
        }
        fetchInfo();
    }, []);
    return null;
}