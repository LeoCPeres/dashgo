import { createServer, Factory, Model } from "miragejs";
import faker from "faker";

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    //cria o modelo da tabela
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    //cria dados em massa com faker (library de dados fakes do javascript)
    factories: {
      user: Factory.extend({
        name(i: number) {
          return `${faker.name.firstName()} ${faker.name.lastName()}`;
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      }),
    },

    //injeta os dados no banco ao ser criado
    seeds(server) {
      server.createList("user", 200);
    },

    //seta as rotas da fakeapi
    routes() {
      this.namespace = "api";
      this.timing = 750;

      this.get("/users");
      this.post("/users");

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}
