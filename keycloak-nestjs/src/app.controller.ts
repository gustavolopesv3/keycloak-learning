import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Public, Roles, RoleMatchingMode } from 'nest-keycloak-connect';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Roles({
    roles: ['admin'],
  })
  getHello(): string {
    return this.appService.getHello();
  }
}
