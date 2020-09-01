# Installation

```bash
yarn add parcel-transformer-graphql-ast
```

# Usage

In `.parcelrc`:

```
{
  "transformers": {
   ...
    "*.{gql,graphql}": ["parcel-transformer-graphql-ast"],
  }
}
```
