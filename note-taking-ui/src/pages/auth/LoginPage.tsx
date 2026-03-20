import { Link } from "react-router";
import { PrimaryButton } from "../../components/button/PrimaryButton";
import { Divider } from "../../components/Divider";
import { GoogleIcon } from "../../components/icons/GoogleIcon";
import { ShowIcon } from "../../components/icons/ShowIcon";
import { InputTypeGroup } from "../../components/input/InputTypeGroup";
import { Logo } from "../../components/Logo";
import { useState, type SyntheticEvent } from "react";
import { HideIcon } from "../../components/icons/HideIcon";
import { useAuthContext } from "../../hooks/useAuthContext";
import { RefreshLeftIcon } from "../../components/icons/RefreshLeftIcon";

export function LoginPage() {

    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("elsasifoua02@gmail.com")
    const [password, setPassword] = useState("12345678")

    const { login, isLoading, error: { login: error } } = useAuthContext()

    function handleSubmit(event: SyntheticEvent<HTMLFormElement>): void {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        login(formData.get("email") as string, formData.get("password") as string)
    }

    return (
        <div className="flex flex-col gap-y-4 px-4 py-10 rounded-12 bg-neutral-0
                md:w-128 md:px-8 md:py-12
                xl:w-135 xl:p-12
            ">
            <div className="flex flex-col items-center gap-y-2.5 pb-2">
                <Logo />
            </div>
            <div className="flex flex-col items-center gap-y-2">
                <span className="sans-serif-text-preset-1 text-neutral-950 text-center">Welcome to Note</span>
                <span className="sans-serif-text-preset-5 text-neutral-600 text-center">Please log in to continue</span>
            </div>
            <form className="flex flex-col justify-center gap-y-4 pt-6" onSubmit={handleSubmit}>
                <InputTypeGroup onChange={(e) => setEmail(e.currentTarget.value)} inputValue={email}
                    textError={Array.isArray(error?.detail) ? error?.detail.find(err => err.field === "email")?.message : ""}
                    name="email" placeholder="email@example.com" titleLabel="Email Address" type="email" />
                <InputTypeGroup onChange={(e) => setPassword(e.currentTarget.value)} inputValue={password}
                    textError={Array.isArray(error?.detail) ? error?.detail.find(err => err.field === "password")?.message : ""}
                    name="password" placeholder="" titleLabel="Password" type={!showPassword ? "password" : "text"}
                    icon={!showPassword ? { Icon: ShowIcon, css: "fill" } : { Icon: HideIcon, css: "stroke" }}
                    onIconClick={() => setShowPassword(!showPassword)}
                    link={{ text: "Forgot", url: "/forgotPassword" }} />
                {typeof error?.detail === "string" && <span className={`text-neutral-red-500 sans-serif-text-preset-5`}>{error.detail}</span>}
                {isLoading ?
                    <PrimaryButton isDisabled={true} type="submit" titleButton="Login" icon={{ Icon: RefreshLeftIcon, css: "fill" }} />
                    : <PrimaryButton type="submit" titleButton="Login" />
                }
            </form>
            <Divider />
            <div className="flex flex-col items-center gap-y-4 pt-4">
                <span className="sans-serif-text-preset-5 text-neutral-600 text-center ">Or log in with:</span>
                <button className="w-full h-11 flex flex-row items-center justify-center gap-x-2 border border-neutral-300 rounded-12">
                    <GoogleIcon className="fill-neutral-950" />
                    <span className="px-4 sans-serif-text-preset-4 text-neutral-950 text-left">Google</span>
                </button>
            </div>
            <Divider />
            <p className="sans-serif-text-preset-5 text-neutral-600 text-center">
                No account yet?
                <Link to="/register" className="text-neutral-950">Sign Up</Link>
            </p>
        </div>
    )
}