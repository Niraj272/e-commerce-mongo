import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose'; 
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://NEO_Tech:niraj%40123@cluster0.maxd95u.mongodb.net/e-commerce'), // Setup the database
    ProductModule, UserModule, AuthModule, CartModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
