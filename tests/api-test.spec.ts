import { test, expect } from '@playwright/test'

const api_key = 'reqres-free-v1'
const name = 'vik'
const job = 'QA Engineer'

test('My First Test', async ({ page }) => {

    await page.goto('https://google.com')
    await expect(page).toHaveTitle('Google')
})

test.describe('API Testing', () => {
    test('GET api sample', { tag: '@smoke' }, async ({ request }) => {
        const response = await request.get('https://reqres.in/api/users', {
            headers: {
                'x-api-key': api_key
            }
        })
        expect(response.status()).toBe(200)
        const text = await response.text()
        expect(text).toContain('Janet')
        console.log(await response.json())
    })

    test('POST api sample', { tag: '@smoke' }, async ({ request }) => {
        const response = await request.post('https://reqres.in/api/users', {
            headers: {
                'x-api-key': api_key
            },
            data: {
                "name": name,
                "job": job
            }
        })
        expect(response.status()).toBe(201)
        const text = await response.text()
        expect(text).toContain(name)
        expect(text).toContain(job)
        console.log(await response.json())
    })
})
