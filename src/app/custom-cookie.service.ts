import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomCookieService {
  // Set a cookie with the specified name and value
  set(name: string, value: string, options?: any): void {
    // Your logic to set the cookie
    // For example, using document.cookie or any other library you prefer
    document.cookie = `${name}=${value}; ${this.serializeOptions(options)}`;
  }

  // Implement your custom cookie service logic here
  // For example, saveTokens method
  saveTokens(response: any): void {
    // Your logic to save tokens
  }

  // Serialize cookie options into a string
  private serializeOptions(options?: any): string {
    if (!options) {
      return '';
    }

    const parts: string[] = [];

    if (options.expires) {
      const expires = options.expires.toUTCString();
      parts.push(`expires=${expires}`);
    }

    if (options.path) {
      parts.push(`path=${options.path}`);
    }

    if (options.domain) {
      parts.push(`domain=${options.domain}`);
    }

    if (options.secure) {
      parts.push('secure');
    }

    return parts.join('; ');
  }
}
