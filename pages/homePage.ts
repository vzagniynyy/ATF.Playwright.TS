import { Locator, Page } from "@playwright/test"
const { BASE_URL } = process.env

export class HomePage {

    public url = BASE_URL + '/logged-in-successfully/'

    readonly page: Page
    readonly post_header: Locator


    constructor(page: Page) {
        this.page = page
        this.post_header = this.page.locator('xpath=//h1[1]')
    }

    public async goto() {
        await this.page.goto(this.url)
    }
}