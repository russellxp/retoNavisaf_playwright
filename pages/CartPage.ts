import { Page, Locator, expect } from "@playwright/test"
import { LookupAllOptions } from "dns";

export default class CartPage {

    readonly page: Page;
    readonly checkOutButton: Locator;
    readonly producto: Locator;
    


    constructor(page: Page) {
        this.page = page;
        this.checkOutButton = page.locator('[data-test="checkout"]');
        


    }

    async clickcheckOutButton() {
        await this.checkOutButton.click();
    }


    async AddProduct(producto: string) {
        const productoFormateado = producto.toLowerCase().replace(/\s+/g, '-');

        const botonId = `add-to-cart-${productoFormateado}`;

        const boton = this.page.locator(`[data-test="${botonId}"]`);
        await boton.click();
        //this.comprobateProduct(producto);
        this.checkTextVisible(producto)
    }


       async checkTextVisible(text: string) {
            await expect(this.page.getByText(text)).toBeVisible;
    
        }

}