import { BasePage } from './BasePages';
import * as path from 'path';

export class UploadPage extends BasePage {
    private readonly fileInput = this.page.locator('#file-upload');
    private readonly uploadButton = this.page.locator('#file-submit');
    private readonly uploadFileName = this.page.locator('#uploaded-files');

    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/upload');
    }

    async uploadFile(filePath: string) {
        // Playwright sam "wstrzykuje" plik do inputa
        await this.fileInput.setInputFiles(filePath);
        await this.uploadButton.click();
    }

    async getUploadedFileName() {
        return await this.uploadFileName.innerText();
    }
}
