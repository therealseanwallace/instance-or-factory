# instance-or-factory

## About this package

This is a utility function that returns either a factory function for testing purposes or an instance created by the factory for use in other environments.

## Usage
1. Install using "npm i instance-or-factory".

2. Import the module into your code:

```javascript
import { returnInstanceOrFactory } from "return-instance-or-factory";
```

3. Use the function to get either a factory function or an instance:

```javascript
import { returnInstanceOrFactory } from "return-instance-or-factory";

const factory = (args) => {
  // Factory function logic here
};

const args = {
  // Arguments for the factory function
};

const instanceOrFactory = await returnInstanceOrFactory({ factory, args });
```
## Parameters

The returnInstanceOrFactory function takes an object with the following parameters:

factory: The factory function to export or use.
args: The arguments to pass to the factory function.

The function checks the NODE_ENV environment variable. If it equals "test", the function returns the factory function. Otherwise, it returns an instance created by the factory function.

License
Copyright Sean Patrick Wallace 2024

This package is free software. Please see LICENSE.md for further details.