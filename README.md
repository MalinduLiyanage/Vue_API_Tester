# api-tester

This Project is for Visualize and Compare OpenAPI v.3.0.x type Documentation objects easily.

## Main Features

1. Visualize OpenAPI Documentation
2. Compare two OpenAPI Documentation objects and highlight the differences

## Utils used

Use OpenAPI util to manage the process the in the application. This util can be implemented on another projects for the same purpose as well.

## The Data Structure

Refer to the following structure for the OpenAPI v.3.0.x DTOs used in this project:

```ts
classes/
└── dtos/
    └── openapi-version-3-0-x/
        ├── root/    
        │ └── openAPIDocument.ts
        │
        ├── info/
        │   ├── Info.ts
        │   ├── Contact.ts
        │   └── License.ts
        │
        ├── servers/
        │   ├── Server.ts
        │   └── ServerVariable.ts
        │
        ├── paths/
        │   ├── Paths.ts
        │   ├── PathItem.ts
        │   └── Operation.ts
        │
        ├── parameters/
        │   ├── Parameter.ts
        │   └── Header.ts
        │
        ├── requests/
        │   ├── RequestBody.ts
        │   ├── MediaType.ts
        │   └── Encoding.ts
        │
        ├── responses/
        │   ├── Responses.ts
        │   ├── Response.ts
        │   └── Link.ts
        │
        ├── schemas/
        │   ├── Schema.ts
        │   ├── Discriminator.ts
        │   └── XML.ts
        │
        ├── security/
        │   ├── SecurityRequirement.ts
        │   ├── SecurityScheme.ts
        │   ├── OAuthFlows.ts
        │   └── OAuthFlow.ts
        │
        ├── components/
        │   └── Components.ts
        │
        ├── common/
            ├── Reference.ts
            ├── Example.ts
            ├── Tag.ts
            ├── ExternalDocumentation.ts
            └── Callback.ts
        
```

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```



