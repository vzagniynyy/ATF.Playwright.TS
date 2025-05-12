import { test as base } from "@playwright/test"
import { LoginPage } from "./loginPage"
import { HomePage } from "./homePage"

type MyFixtures = {
    loginPage: LoginPage,
    homePage: HomePage
}

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))

    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page))

    },
})
export { expect } from "@playwright/test"

export function step(stepName?: string) {
    return function decorator(
        target: Function,
        context: ClassMethodDecoratorContext
    ) {
        return function replacementMethod(...args: any) {
            const name = stepName || `${this.constructor.name}.${context.name as string}`
            return test.step(name, async () => {
                return await target.call(this, ...args)
            })
        }
    }
}