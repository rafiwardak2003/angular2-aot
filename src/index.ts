import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

export function main(initialHmrState?: any): Promise<any> {
    return platformBrowserDynamic().bootstrapModule(AppModule);
}

// bootstrap when document is ready
document.addEventListener('DOMContentLoaded', () => main());