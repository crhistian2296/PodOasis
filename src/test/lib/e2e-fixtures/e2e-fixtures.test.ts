import {
  isE2EFixturesMode,
  withE2EFixturesElse,
} from "@/test/e2e-fixtures/e2e-fixtures";
import { afterEach, describe, expect, it } from "vitest";

const E2E_ENV_KEYS = ["PODOASIS_E2E_FIXTURES"] as const;

afterEach(() => {
  for (const key of E2E_ENV_KEYS) {
    delete process.env[key];
  }
});

describe("isE2EFixturesMode", () => {
  it("is false by default", () => {
    expect(isE2EFixturesMode()).toBe(false);
  });

  it("is true when PODOASIS_E2E_FIXTURES is 1", () => {
    process.env.PODOASIS_E2E_FIXTURES = "1";
    expect(isE2EFixturesMode()).toBe(true);
  });
});

describe("withE2EFixturesElse", () => {
  it("runs production when fixtures are off", async () => {
    await expect(
      withE2EFixturesElse(
        () => "e2e",
        () => "live",
      ),
    ).resolves.toBe("live");
  });

  it("runs e2e handler when fixtures are on", async () => {
    process.env.PODOASIS_E2E_FIXTURES = "1";
    await expect(
      withE2EFixturesElse(
        () => "e2e",
        () => "live",
      ),
    ).resolves.toBe("e2e");
  });
});
