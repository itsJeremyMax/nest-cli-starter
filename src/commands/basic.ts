import { Command, CommandRunner, Option } from 'nest-commander';

interface BasicCommandOptions {
  name?: string;
  age?: number;
}

@Command({ name: 'hello', description: 'Greeting a user' })
export class BasicCommand implements CommandRunner {
  async run(
    passedParam: string[],
    options?: BasicCommandOptions,
  ): Promise<void> {
    console.log(options);
    console.log(passedParam);
  }

  //

  @Option({
    flags: '-n, --name [string]',
    description: 'A persons name',
  })
  parseName(val: string): string {
    return val;
  }

  @Option({
    flags: '-n, --age [number]',
    description: 'A persons age',
  })
  parseAge(val: number): number {
    return val;
  }
}
