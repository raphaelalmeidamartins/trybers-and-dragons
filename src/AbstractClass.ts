abstract class AbstractClass {
  protected static _instances = 0;

  protected static newInstance(): void {
    this._instances += 1;
  }

  static get instances(): number {
    return this._instances;
  }
}

export default AbstractClass;
