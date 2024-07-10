export declare class Login {
    emailInputElement: HTMLInputElement;
    passwordInputElement: HTMLInputElement;
    emailInputBind: string;
    passwordInputBind: string;
    isEmailValid: string;
    isPasswordValid: boolean;
    isLoginSuccess: string;
    emailInputChange(event: Event): void;
    passwordInputChange(event: Event): void;
    onSubmitForm(event: Event): void;
    render(): any;
}
