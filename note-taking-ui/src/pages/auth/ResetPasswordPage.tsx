import { PrimaryButton } from "../../components/button/PrimaryButton";
import { ShowIcon } from "../../components/icons/ShowIcon";
import { InputTypeGroup } from "../../components/input/InputTypeGroup";
import { Logo } from "../../components/Logo";

export function ResetPasswordPage(){
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
                <InputTypeGroup name="password" placeholder="" titleLabel="New Password" type="password" icon={{ Icon: ShowIcon, css: "fill" }} textError="At least 8 characters" isError={false}/>
                <InputTypeGroup name="confirm password" placeholder="" titleLabel="Confirm New Password" type="password" icon={{ Icon: ShowIcon, css: "fill" }} />
                <PrimaryButton type="submit" titleButton="Reset Password"/>
            </form>
            
       </div> 
    )
}