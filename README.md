# drizzle-schema-builder

Build Schemas for all query languages supported by Drizzle ORM.

## Usage

1. Clone the repository and install the dependencies:

    From Github: [shivamdevs/drizzle-schema-builder](https://github.com/shivamdevs/drizzle-schema-builder.git)

    or using the GitHub CLI:

    ```bash
    $ gh repo clone shivamdevs/drizzle-schema-builder
    $ cd drizzle-schema-builder
    $ npm install
    ```

2. Add Schema files in the `src/schemas` directory.
3. Run the following command to generate the schema files for all the query languages:

    ```bash
    $ npm run build
    ```

4. The generated schema files will be available in the `out` directory.
