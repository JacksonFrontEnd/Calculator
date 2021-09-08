import { BaseOperationCommand } from './calculate-base-operation';

export class Calculator {
  private value: string[];

  private history: BaseOperationCommand[];

  constructor() {
    this.value = [''];
    this.history = [];
  }

  executeCommand(command:BaseOperationCommand):void {
    this.value = command.execute();
    this.history.push(command);
  }

  getValue(): string[] {
    return this.value;
  }

  undo():void {
    const command = this.history.pop();
    this.value = [];
    this.value.unshift(command!.undo());
  }
}
