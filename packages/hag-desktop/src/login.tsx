const electron = window.require("electron");
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const wrapperStyling: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    minHeight: "50vh"
};

const loginStyling: React.CSSProperties = {
    width: "fit-content",
    backgroundColor: "#888",
    borderRadius: "10px",
    padding: "15px"
};

const Login = (): JSX.Element => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [queue, setQueue] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    const onSubmit = (data: { Username: string, Password: string; }) => {
        electron.ipcRenderer.send("startClient", {
            userName: data.Username,
            password: data.Password,
        });
        console.log(data);
    };


    useEffect(() => {
        electron.ipcRenderer.on("LoginQueueUpdate", (_, data: number) => {
            setQueue(data);
        });
        electron.ipcRenderer.on("loggedin", () => {
            setIsVisible(false);
        });
    }, []);

    if (isVisible) {
        return <div style={wrapperStyling}>
            <div style={loginStyling}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Username" {...register("Username", { required: true })} />

                    <input type="password" placeholder="Password" {...register("Password", { required: true })} />

                    {errors.exampleRequired && <span>This field is required</span>}

                    <input type="submit" />
                </form>
                {queue == 0 ? null : <p>Place in queue: {queue}</p>}
            </div>
        </div>;
    } else {
        return <></>;
    }
};

export default Login;