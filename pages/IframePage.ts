import { BasePage } from './BasePages';

export class IframePage extends BasePage {
    // Lokalizujemy najpierw samą ramkę (iFrame) po jej ID
    private readonly editorFrame = this.page.frameLocator('#mce_0_ifr');
    // Lokalizujemy element wewnątrze tej ramki (miejsce do wpisywania tekstu)
    private readonly editorBody = this.editorFrame.locator('#tinymce');

    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/iframe');
    }

    async forceTypeText(text: string) {
        // Używamy evaluate, aby zmienić zawartość HTML bezpośrednio
        // To ominie komunikat 'read-only' nakładany przez skrypty TinyMCE
        await this.editorBody.evaluate((el, textToSet) => {
            el.innerHTML = `<p>${textToSet}</p>`;
        }, text);
    }

    async getEditorText() {
        return await this.editorBody.innerText();
    }
}