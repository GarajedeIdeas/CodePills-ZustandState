import { useForm } from "react-hook-form"
import { User, useAuthStore } from "../store";

export const Formulario = () => {

    const { register, handleSubmit } = useForm<User>();

    const setUser = useAuthStore(state => state.setUser);

    const onSubmit = (values: User) => {
        setUser(values);
    }

    return <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Username</label>
                <input type="text" {...register('username')} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" {...register('password')} />
            </div>
            <div>
                <label>Email</label>
                <input type="text" {...register('email')} />
            </div>
            <div>
                <label>Role</label>
                <input type="text" {...register('role')} />
            </div>
            <input type="submit" value="Enviar" />
        </form>
    </div>
}