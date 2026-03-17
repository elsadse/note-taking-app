import { Link } from "react-router";
import { PrimaryButton } from "../../components/button/PrimaryButton";
import { Divider } from "../../components/Divider";
import { GoogleIcon } from "../../components/icons/GoogleIcon";
import { ShowIcon } from "../../components/icons/ShowIcon";
import { InputTypeGroup } from "../../components/input/InputTypeGroup";
import { Logo } from "../../components/Logo";

export function LoginPage(){
    return(
       <div className="flex flex-col gap-y-4 px-4 py-10 rounded-12 bg-neutral-0
                md:w-128 md:px-8 md:py-12
                xl:w-135 xl:p-12
            ">
            <div className="flex flex-col items-center gap-y-2.5 pb-2">
                <Logo/>
            </div>
            <div className="flex flex-col items-center gap-y-2">
                <span className="sans-serif-text-preset-1 text-neutral-950 text-center">Welcome to Note</span>
                <span className="sans-serif-text-preset-5 text-neutral-600 text-center">Please log in to continue</span>
            </div>
            <form className="flex flex-col justify-center gap-y-4 pt-6">
                <InputTypeGroup name="email" placeholder="email@example.com" titleLabel="Email Address" type="email" />
                <InputTypeGroup name="password" placeholder="" titleLabel="Password" type="password" icon={{ Icon: ShowIcon, css: "fill" }} link={{text:"Forgot", url:"/forgotPassword"}}/>
                <PrimaryButton type="submit" titleButton="Login"/>
            </form>
            <Divider/>
            <div className="flex flex-col items-center gap-y-4 pt-4">
                <span className="sans-serif-text-preset-5 text-neutral-600 text-center ">Or log in with:</span>
                <button className="w-full h-11 flex flex-row items-center justify-center gap-x-2 border border-neutral-300 rounded-12">
                    <GoogleIcon className="fill-neutral-950"/>
                    <span className="px-4 sans-serif-text-preset-4 text-neutral-950 text-left">Google</span>
                </button>
            </div>
            <Divider/>
            <p className="sans-serif-text-preset-5 text-neutral-600 text-center">
                No account yet? 
                <Link to="#" className="text-neutral-950">Sign Up</Link>
            </p>
       </div> 
    )
}