import { describe, it, expect } from "vitest";
import { returnInstanceOrFactory } from "./index.js";

describe("returnInstanceOrFactory", async () => {
  it("returns factory function when NODE_ENV is test", async () => {
    process.env.NODE_ENV = "test";
    const factory = () => ({});
    const result = await returnInstanceOrFactory({ factory, args: {} });
    expect(result).toBe(factory);
  });

  it("returns instance when NODE_ENV is not test", async () => {
    process.env.NODE_ENV = "production";
    const instance = {};
    const factory = () => instance;
    const result = await returnInstanceOrFactory({ factory, args: {} });
    expect(result).toBe(instance);
  });
});
