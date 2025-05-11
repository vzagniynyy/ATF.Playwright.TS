import { test } from "../pages/base"

const { USER_NAME, PASSWORD } = process.env

test("login", async ({ loginPage, }) => {
    await loginPage.goto()
    await loginPage.login(USER_NAME, PASSWORD)

})