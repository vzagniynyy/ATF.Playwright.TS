import { test, expect } from "../pages/base"

const { USER_NAME, PASSWORD } = process.env

test("login", async ({ loginPage, homePage}) => {
    await loginPage.goto()
    await loginPage.login(USER_NAME, PASSWORD)
    await loginPage.pressSubmit()

    await expect(homePage.post_header).toHaveText('Logged In Successfully')
})

