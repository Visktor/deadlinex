import { z } from 'zod'

export const nullableDefault = (v: z.ZodSchema, msg?: string) => v.nullable().transform((v, ctx) => {
    if (v === null) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: msg ?? 'This field is required',
        });
        return z.NEVER;
    }
    return v
})
