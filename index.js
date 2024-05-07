/**
 * This utility function will return either a factory function
 * for testing purposes or an instance created by the factory
 * for use in other environments.
 *
 * @module returnInstanceOrFactory
 * @param {Object} args - The arguments to pass to the factory function.
 * @param {Function} args.factory - The factory function to export or use.
 * @param {Object} args.args - The arguments to pass to the factory function.
 * @returns {Object} - Returns an instance or factory function.
 * @namespace returnInstanceOrFactory
 *
 */
const returnInstanceOrFactory = async ({ factory, args }) => {
  let instanceOrFactoryToExport;

  if (process.env.NODE_ENV === "test") {
    instanceOrFactoryToExport = factory;
  } else {
    instanceOrFactoryToExport = await factory(args);
  }

  return instanceOrFactoryToExport;
};

export { returnInstanceOrFactory };
