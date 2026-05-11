import { describe, expect, it } from "vitest";
import { leadSchema, normalizePhoneForValidation } from "./validation";

describe("lead form validation", () => {
  it("accepts Russian phone formats with spaces and punctuation", () => {
    expect(normalizePhoneForValidation("+7 (919) 779-29-58")).toBe("+79197792958");
    expect(normalizePhoneForValidation("8 919 779 29 58")).toBe("+79197792958");
  });

  it("rejects requests without consent", () => {
    const result = leadSchema.safeParse({
      name: "Иван",
      phone: "+7 (919) 779-29-58",
      car: "BMW X3",
      service: "Диагностика",
      message: "Дергается при разгоне",
      preferredTime: "Сегодня после 17:00",
      consent: false,
      honeypot: ""
    });

    expect(result.success).toBe(false);
  });
});
