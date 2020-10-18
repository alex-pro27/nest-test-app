import { Console, Command, createSpinner } from 'nestjs-console';
import { UsersService } from './users.service';

@Console()
export class UsersCommand {

  constructor(private usersService: UsersService) {}

  @Command({
    command: 'create_user <username> <password>',
    description: 'Create new user'
  })
  async createUser(username, password): Promise<void> {
    await this.usersService.create({username, password});
  }
}
