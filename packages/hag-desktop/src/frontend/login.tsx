const electron = window.require("electron");
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const wrapperStyling: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    background: "rgb(191 191 191 / 50%)",
    zIndex: 10,
};

const formStyle: React.CSSProperties = {
    position: "relative",
    zIndex: 11,
    background: "#FFFFFF",
    padding: "45px",
    textAlign: "center",
    boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)",
};

const inputStyle: React.CSSProperties = {
    fontFamily: "sans-serif",
    outline: 0,
    background: "#f2f2f2",
    width: "100%",
    border: 0,
    margin: "15px 0 0",
    padding: "15px",
    boxSizing: "border-box",
    fontSize: "14px",
};

const submitStyle: React.CSSProperties = {
    marginTop: "15px",
    fontFamily: "sans-serif",
    textTransform: "uppercase",
    outline: 0,
    background: "#4CAF50",
    width: "100%",
    border: 0,
    padding: "15px",
    color: "#FFFFFF",
    fontSize: "14px",
    transition: "all 0.3 ease",
    cursor: "pointer",
};

const TitleStyle = {
    margin: "0 0 15px",
};

const messageStyle = {
    margin: "0 0 15px",
    color: "#b3b3b3",
    fontSize: "12px",
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
    };

    useEffect(() => {
        electron.ipcRenderer.on("LoginQueueUpdate", (_, data: number) => {
            setQueue(data);
        });
        electron.ipcRenderer.on("loggedin", () => {
            setIsVisible(false);
        });
        electron.ipcRenderer.invoke("IsClientActive").then(isActive => {
            if (isActive) {
                electron.ipcRenderer.send("startClient", {
                    userName: "",
                    password: "",
                });
                setIsVisible(false);
            }
        });
    }, []);

    if (isVisible) {
        return <div style={wrapperStyling}>
            <form style={formStyle} onSubmit={handleSubmit(onSubmit)}>
                <h1 style={TitleStyle}>Login: </h1>
                <input style={inputStyle} placeholder="Username" {...register("Username", { required: true })} /><br />
                {errors.Username && <><span style={messageStyle}>Username is required</span><br /></>}

                <input style={inputStyle} type="password" placeholder="Password" {...register("Password", { required: true })} /><br />
                {errors.Password && <><span style={messageStyle}>Password is required</span><br /></>}

                <input style={submitStyle} type="submit" />
                {queue == 0 ? null : <p>Place in queue: {queue}</p>}
            </form>
        </div>;
    } else {
        return <></>;
    }
};

export default Login;
