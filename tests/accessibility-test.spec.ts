import { test, expect } from '@playwright/test'
import { AxeBuilder } from '@axe-core/playwright'

const url = 'https://www.abtosoftware.com'

test.describe('Accessebility Testing', () => {
    [
        { pageName: '.NETDevelopment', route: '/services/net-development-company' },
        { pageName: 'WebDevelopment', route: '/services/web-development-solutions' },
        { pageName: 'MobileDevelopment', route: '/services/mobile-solutions' },
    ].forEach(({ pageName, route }) => {
        test(`Accessebility check for ${pageName}`, async ({ page }, testInfo) => {

            await page.goto(url + `${route}`)
            const accessibilityScanResults = await new AxeBuilder({ page })
                .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
                .analyze();
            await testInfo.attach(`accessibility-scan-results-${pageName}`, {
                body: JSON.stringify(accessibilityScanResults, null, 2),
                contentType: 'application/json'
            });
            expect(accessibilityScanResults.violations).toEqual([]);

        })
    });
});
