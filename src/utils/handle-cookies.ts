import cookies from "js-cookie";

/**
 * For client components ONLY!
 */
export class HandleCookies {
  private cookieName: string;

  constructor(cookieName: string) {
    if (typeof window === "undefined") {
      throw new Error("This class is for client-side use only");
    }

    this.cookieName = cookieName;
  }

  getValue(): string | undefined {
    return cookies.get(this.cookieName);
  }

  setValue(value: string, maxAge?: number): string | undefined {
    console.log(`setting cookie ${this.cookieName} to ${value}`);
    return cookies.set(this.cookieName, value, { expires: maxAge });
  }
}
