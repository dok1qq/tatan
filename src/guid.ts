export class GUID {
  static create(): string {
    return window.crypto.randomUUID();
  }
}
