/**
 * Some examples online show that we need to extend Vitest's 'expect' with 'jest-dom':
 * expect.extend
 *
 * However, this is not necessary. Vitest's 'expect' already has all the 'jest-dom' matchers.
 * Just import it here as part of test setup.
 */
import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

afterEach(() => {
  cleanup();
});
