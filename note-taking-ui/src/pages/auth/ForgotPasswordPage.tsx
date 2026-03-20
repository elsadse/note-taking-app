import { PrimaryButton } from "../../components/button/PrimaryButton";
import { InputTypeGroup } from "../../components/input/InputTypeGroup";
import { Logo } from "../../components/Logo";

export function ForgotPasswordPage(){
    return(
         <div className="flex flex-col gap-y-4 px-4 py-10 rounded-12 bg-neutral-0
                md:w-128 md:px-8 md:py-12
                xl:w-135 xl:p-12
            ">
            <div className="flex flex-col items-center gap-y-2.5 pb-2">
                <Logo/>
            </div>
            <div className="flex flex-col items-center gap-y-2">
                <span className="sans-serif-text-preset-1 text-neutral-950 text-center">Forgotten your password?</span>
                <span className="sans-serif-text-preset-5 text-neutral-600 text-center">Enter your email below, and we’ll send you a link to reset it.</span>
            </div>
            <form className="flex flex-col justify-center gap-y-4 pt-6">
                <InputTypeGroup name="email" placeholder="email@example.com" titleLabel="Email Address" type="email" />
                <PrimaryButton type="submit" titleButton="Send Reset Link"/>
            </form>
       </div> 
    )
}