import { Router } from "aurelia-router";
import { HttpClient } from "aurelia-fetch-client";

export class GitBookClient {
  title: string;
  router: Router;
  httpClient: HttpClient;

  constructor() {
    this.httpClient.configure(config => {
      config
        .withBaseUrl("https://api.gitbook.com/")
        .withDefaults({
          credentials: "same-origin",
          headers: {
            Accept: "application/json",
            "X-Requested-With": "Fetch"
          }
        })
        .withInterceptor({
          request(request) {
            console.log(`Requesting ${request.method} ${request.url}`);
            return request;
          },
          response(response) {
            console.log(`Received ${response.status} ${response.url}`);
            return response;
          }
        });
    });
  }

  contents(author: string, book: string, path: string) {
    const uri: string = `${author}/${book}/${path}`;

    this.httpClient
      .fetch(uri)
      .then(response => response.json())
      .then(data => {
        console.log(data.description);
      });
  }
}
