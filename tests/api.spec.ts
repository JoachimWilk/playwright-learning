import { test, expect } from '@playwright/test';

test.describe('Testy API - JSONPlaceholder', () => {

    test('Powinien ponbrać listę postów i zwrócić status 200', async ({ request }) => {
        // Wysyłamy żądanie GET
        const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

        // Sprawdzamy status odpowiedzi
        expect(response.ok()).toBeTruthy(); // status 200-299
        expect(response.status()).toBe(200);

        // Sprawdzamy treść odpowiedzi (JSON)
        const body = await response.json()
        expect(body.id).toBe(1);
        expect(body.title).not.toBeNull();

        console.log('Tytuł posta z API:', body.title);
    });

    test('Powiniene stworzyć nowy post (POST)', async ({ request}) => {
        const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
            data: {
                title: 'Nowy post testera',
                body: 'Treść posta z Playwright',
                userId: 1,
            }
        });

        expect(response.status()).toBe(201); //Created
        const body = await response.json();
        expect(body.title).toBe('Nowy post testera');
    });
});