import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as process from "process";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "PUT", "PATCH", "POST", "DELETE"],
    allowedHeaders: [
      "Origin, X-Requested-With, Content-Type, Accept",
      "Authorization",
    ],
  });

  await app.listen(process.env.APP_PORT, () => {
    console.log(`[APP STARTED] on ${process.env.APP_PORT} port`);
  });
}
bootstrap();
