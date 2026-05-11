import { z } from "zod";

export function normalizePhoneForValidation(value: string): string {
  const trimmed = value.trim();
  const digits = trimmed.replace(/\D/g, "");

  if (digits.length === 11 && digits.startsWith("8")) {
    return `+7${digits.slice(1)}`;
  }

  if (digits.length === 11 && digits.startsWith("7")) {
    return `+${digits}`;
  }

  if (digits.length === 10) {
    return `+7${digits}`;
  }

  return trimmed.startsWith("+") ? `+${digits}` : digits;
}

export const phoneSchema = z
  .string()
  .trim()
  .min(1, "Укажите телефон")
  .transform(normalizePhoneForValidation)
  .refine((value) => /^\+7\d{10}$/.test(value), "Укажите телефон в формате +7 999 999-99-99");

export const leadSchema = z.object({
  name: z.string().trim().max(80, "Имя слишком длинное").optional().or(z.literal("")),
  phone: phoneSchema,
  car: z.string().trim().max(120, "Укажите марку и модель короче").optional().or(z.literal("")),
  service: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().max(1200, "Опишите проблему короче").optional().or(z.literal("")),
  preferredTime: z.string().trim().max(160, "Укажите время короче").optional().or(z.literal("")),
  otherDiagnosis: z.string().trim().max(700).optional().or(z.literal("")),
  concern: z.string().trim().max(700).optional().or(z.literal("")),
  wheelSize: z.string().trim().max(80).optional().or(z.literal("")),
  consent: z.boolean().refine((value) => value === true, "Нужно согласие на обработку персональных данных"),
  honeypot: z.string().max(0).optional().or(z.literal(""))
});

export type LeadFormValues = z.input<typeof leadSchema>;
export type NormalizedLeadFormValues = z.output<typeof leadSchema>;
