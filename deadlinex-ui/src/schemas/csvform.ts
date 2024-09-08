import { getDefaults } from '@/lib/utils'
import { z } from 'zod'
import { nullableDefault } from './custom'

export const csvFormSchema = z.object({
    csv: nullableDefault(
        z.instanceof(FileList).refine(fl => {
            return fl.length
        }, 'At least one file is  required.')
    ).default(null),
    name: z.string().default(''),
    email: z.string().email().default(''),
})

export const csvFormDefaultValues = getDefaults<typeof csvFormSchema>(csvFormSchema)
