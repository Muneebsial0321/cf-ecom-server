export interface Auth{
    login?(),
    register?(),
    logout?(),
    forgetPassword?(),
    resetPassword?(),
    changePassword?()
}