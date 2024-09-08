import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../shadcn/form"
import { ControllerProps, FieldValues } from 'react-hook-form'
import { ComponentProps, memo } from 'react'
import { Input } from "../shadcn/input"

type FieldProps<T extends FieldValues> = {
    label?: string,
    componentProps?: Partial<{
        FormItem: ComponentProps<typeof FormItem>,
        FormLabel: ComponentProps<typeof FormLabel>,
        FormControl: ComponentProps<typeof FormControl>,
        FormMessage: ComponentProps<typeof FormMessage>,
        Input: ComponentProps<typeof Input>,
    }>
} & Omit<ControllerProps<T>, 'render'>

function _InputField<T extends FieldValues>({ componentProps, label, ...controllerProps }: FieldProps<T>) {
    return (
        <FormField
            {...controllerProps}
            render={({ field }) => {
                return (
                    <FormItem>
                        <FormLabel {...componentProps?.FormLabel}>{label}</FormLabel>
                        <FormControl {...componentProps?.FormControl}>
                            <Input
                                {...field}
                                {...componentProps?.Input}
                            />
                        </FormControl>
                        <FormMessage {...componentProps?.FormMessage} />
                    </FormItem>
                )

            }}
        />
    )

}

const InputField = memo(_InputField)

export { InputField }


