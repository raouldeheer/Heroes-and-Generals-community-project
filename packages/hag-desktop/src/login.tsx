const electron = window.require("electron");
import { useForm } from "react-hook-form";

const Login = (): JSX.Element => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: { Username: string, Password: string; }) => {
        electron.ipcRenderer.invoke("login");
        console.log(data);
    };

    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Username" {...register("Username", { required: true })} />

            <input placeholder="Password" {...register("Password", { required: true })} />

            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" />
        </form>
    </>;
};

export default Login;