export class BaseOperationCommand {
  private value: string[] = [];

  constructor(val: string) {
    this.value.push(val);
  }

  execute(): string[] {
    return this.value;
  }

  undo():string {
    return this.value.pop() || '0';
  }
}
