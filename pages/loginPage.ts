import { Locator, Page } from "@playwright/test"
import { step } from "./base"
const { BASE_URL } = process.env

export class LoginPage {

    public url = BASE_URL + '/practice-test-login/'

    readonly page: Page
    readonly login_textInput: Locator
    readonly pwd_textInput: Locator

    constructor(page: Page) {
        this.page = page
        this.login_textInput = this.page.locator('#username')
        this.pwd_textInput = this.page.locator('#password')
    }

    public async goto() {
        await this.page.goto(this.url)
    }

    @step("Login page test step")
    public async login(email, pwd) {
        await this.login_textInput.fill(email)
        await this.pwd_textInput.fill(pwd)
    }
}