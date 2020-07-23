/// <reference path='./Location.d.ts' />

export declare global {
  interface Window {
  }

  interface StringKeyDict<T> {
    [key: string]: T;
  }

  interface NumberKeyDict<T> {
    [key: number]: T;
  }

}
