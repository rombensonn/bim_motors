"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Send } from "lucide-react";
import { useMemo, useState } from "react";
import { useForm, type Resolver } from "react-hook-form";
import { business } from "@/data/business";
import { getStoredUtm } from "@/lib/utm";
import { leadSchema, type LeadFormValues } from "@/lib/validation";

type LeadFormProps = {
  id?: string;
  variant?: "default" | "secondOpinion" | "tire";
  title?: string;
  description?: string;
  service?: string;
  compact?: boolean;
  className?: string;
};

type SubmitState = "idle" | "loading" | "success" | "error";

const apiUrl = process.env.NEXT_PUBLIC_LEAD_API_URL || "/api/lead.php";

function buildMessage(values: LeadFormValues, variant: LeadFormProps["variant"]) {
  if (variant === "secondOpinion") {
    return [
      values.otherDiagnosis ? `Что сказал другой сервис: ${values.otherDiagnosis}` : "",
      values.concern ? `Что беспокоит: ${values.concern}` : "",
      values.message ? `Комментарий: ${values.message}` : ""
    ]
      .filter(Boolean)
      .join("\n");
  }

  if (variant === "tire") {
    return [
      values.wheelSize ? `Размер колес: ${values.wheelSize}` : "",
      values.message ? `Комментарий: ${values.message}` : ""
    ]
      .filter(Boolean)
      .join("\n");
  }

  return values.message || "";
}

export default function LeadForm({
  id,
  variant = "default",
  title = "Записаться в сервис",
  description = "Оставьте телефон и коротко опишите задачу. Мы свяжемся, чтобы уточнить детали и удобное время.",
  service = "Диагностика",
  compact = false,
  className = ""
}: LeadFormProps) {
  const pathname = usePathname();
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [serverMessage, setServerMessage] = useState("");

  const defaultValues = useMemo<LeadFormValues>(
    () => ({
      name: "",
      phone: "",
      car: "",
      service,
      message: "",
      preferredTime: "",
      otherDiagnosis: "",
      concern: "",
      wheelSize: "",
      consent: false,
      honeypot: ""
    }),
    [service]
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema) as Resolver<LeadFormValues>,
    defaultValues,
    mode: "onBlur"
  });

  async function onSubmit(values: LeadFormValues) {
    setSubmitState("loading");
    setServerMessage("");

    const parsed = leadSchema.safeParse(values);
    if (!parsed.success) {
      setSubmitState("error");
      setServerMessage("Проверьте поля формы и попробуйте ещё раз.");
      return;
    }

    const normalized = parsed.data;

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: normalized.name || "",
          phone: normalized.phone,
          car: normalized.car || "",
          service: normalized.service || service,
          message: buildMessage(normalized, variant),
          preferredTime: normalized.preferredTime || "",
          page: pathname || "/",
          utm: getStoredUtm(),
          consent: normalized.consent,
          honeypot: normalized.honeypot || ""
        })
      });

      const payload = (await response.json().catch(() => null)) as { ok?: boolean; message?: string } | null;

      if (!response.ok || !payload?.ok) {
        throw new Error(payload?.message || "Request failed");
      }

      setSubmitState("success");
      setServerMessage(payload.message || "Заявка отправлена");
      reset(defaultValues);
    } catch {
      setSubmitState("error");
      setServerMessage(`Не удалось отправить заявку. Позвоните по номеру ${business.phone}`);
    }
  }

  const isLoading = submitState === "loading";

  return (
    <form
      id={id}
      onSubmit={handleSubmit(onSubmit)}
      className={`rounded-3xl bg-white p-5 shadow-card ring-1 ring-black/5 sm:p-6 ${className}`}
      noValidate
    >
      <div className="mb-5">
        <p className="text-sm font-semibold uppercase text-bmw">Заявка</p>
        <h2 className="mt-2 font-heading text-2xl font-bold text-ink">{title}</h2>
        <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
      </div>

      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div>
          <label htmlFor={`${id || "lead"}-name`} className="form-label">
            Имя
          </label>
          <input id={`${id || "lead"}-name`} className="form-input" autoComplete="name" {...register("name")} />
          {errors.name ? <p className="form-error">{errors.name.message}</p> : null}
        </div>

        <div>
          <label htmlFor={`${id || "lead"}-phone`} className="form-label">
            Телефон *
          </label>
          <input
            id={`${id || "lead"}-phone`}
            className="form-input"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
            {...register("phone")}
          />
          {errors.phone ? <p className="form-error">{errors.phone.message}</p> : null}
        </div>

        <div>
          <label htmlFor={`${id || "lead"}-car`} className="form-label">
            Марка и модель авто
          </label>
          <input
            id={`${id || "lead"}-car`}
            className="form-input"
            placeholder="Например, BMW X3"
            autoComplete="off"
            {...register("car")}
          />
          {errors.car ? <p className="form-error">{errors.car.message}</p> : null}
        </div>

        <div>
          <label htmlFor={`${id || "lead"}-time`} className="form-label">
            Удобное время связи
          </label>
          <input
            id={`${id || "lead"}-time`}
            className="form-input"
            placeholder="Сегодня после 17:00"
            autoComplete="off"
            {...register("preferredTime")}
          />
          {errors.preferredTime ? <p className="form-error">{errors.preferredTime.message}</p> : null}
        </div>

        {variant === "tire" ? (
          <div>
            <label htmlFor={`${id || "lead"}-wheel`} className="form-label">
              Размер колес
            </label>
            <input id={`${id || "lead"}-wheel`} className="form-input" placeholder="Например, R18" {...register("wheelSize")} />
          </div>
        ) : null}

        <div className={compact ? "" : "sm:col-span-2"}>
          <label htmlFor={`${id || "lead"}-service`} className="form-label">
            Что нужно сделать
          </label>
          <input id={`${id || "lead"}-service`} className="form-input" {...register("service")} />
        </div>

        {variant === "secondOpinion" ? (
          <>
            <div className={compact ? "" : "sm:col-span-2"}>
              <label htmlFor={`${id || "lead"}-other`} className="form-label">
                Что сказал другой сервис
              </label>
              <textarea id={`${id || "lead"}-other`} className="form-textarea" rows={3} {...register("otherDiagnosis")} />
            </div>
            <div className={compact ? "" : "sm:col-span-2"}>
              <label htmlFor={`${id || "lead"}-concern`} className="form-label">
                Что беспокоит
              </label>
              <textarea id={`${id || "lead"}-concern`} className="form-textarea" rows={3} {...register("concern")} />
            </div>
            <div className={compact ? "" : "sm:col-span-2"}>
              <span className="form-label">Файл с диагностикой</span>
              <button
                type="button"
                disabled
                className="mt-2 w-full rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-4 text-left text-sm text-muted"
              >
                Загрузка файла подготовлена как UI-заглушка. Сейчас можно описать диагноз текстом.
              </button>
            </div>
          </>
        ) : (
          <div className={compact ? "" : "sm:col-span-2"}>
            <label htmlFor={`${id || "lead"}-message`} className="form-label">
              Проблема или комментарий
            </label>
            <textarea
              id={`${id || "lead"}-message`}
              className="form-textarea"
              rows={4}
              placeholder="Например, машина дергается при разгоне"
              {...register("message")}
            />
            {errors.message ? <p className="form-error">{errors.message.message}</p> : null}
          </div>
        )}
      </div>

      <input className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" {...register("honeypot")} />

      <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-muted">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-slate-300 text-bmw focus:ring-bmw"
          {...register("consent")}
        />
        <span>
          Согласен на обработку персональных данных и принимаю{" "}
          <Link href="/politika-konfidencialnosti" className="font-semibold text-bmw hover:underline">
            политику конфиденциальности
          </Link>
          .
        </span>
      </label>
      {errors.consent ? <p className="form-error mt-2">{errors.consent.message}</p> : null}

      <button
        type="submit"
        disabled={isLoading}
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-bmw px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,114,206,0.28)] transition hover:bg-[#005fac] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bmw focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        {isLoading ? "Отправляем..." : variant === "secondOpinion" ? "Получить второе мнение" : "Отправить заявку"}
      </button>

      {serverMessage ? (
        <p
          className={`mt-4 rounded-2xl px-4 py-3 text-sm font-medium ${
            submitState === "success" ? "bg-emerald-50 text-emerald-700" : "bg-orange-50 text-orange-800"
          }`}
          role="status"
          aria-live="polite"
        >
          {serverMessage}
        </p>
      ) : null}
    </form>
  );
}
