import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import KeycloakModule, { AuthGuard } from 'nestjs-keycloak-admin';
import {
  KeycloakConnectModule,
  AuthGuard,
  RoleGuard,
} from 'nest-keycloak-connect';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    KeycloakConnectModule.register({
      authServerUrl: 'http://127.0.0.1:8080/auth/',
      realm: 'books',
      clientId: 'nestjs',
      secret: '6Svix2CqxTU42hCOFNOztWLFPnmvBpMl',
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
  ],
})
export class AppModule {}
