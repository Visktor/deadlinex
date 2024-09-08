import { Input } from "@/components/shadcn/input";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { csvFormDefaultValues, csvFormSchema } from "@/schemas/csvform";
import { FormLabel, FormField, Form, FormItem, FormControl, FormMessage } from "@/components/shadcn/form";
import { Button } from "@/components/shadcn/button";
import { InputField } from "@/components/complex/input-field";
import { useCallback } from "react";
import { z } from 'zod'

function CsvForm() {
    const form = useForm({
        mode: "onSubmit",
        defaultValues: csvFormDefaultValues,
        resolver: zodResolver(csvFormSchema)
    })

    const { register, control, handleSubmit } = form

    const formSubmitHandler = useCallback((data: z.output<typeof csvFormSchema>) => {
        console.log(data)
    }, [])

    return (
        <div className="w-full">
            <Form {...form}>
                <form className="grid gap-1 p-8" onSubmit={handleSubmit(formSubmitHandler)}>
                    {/* Needs to be uncontrolled because of the HTML's file API  */}
                    <FormField
                        control={control}
                        name="csv"
                        render={() => {
                            return (
                                <FormItem>
                                    <FormLabel>Files</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="file"
                                            className="dark:file:text-white"
                                            multiple
                                            {...register('csv')}
                                            accept=".csv,.xls,.xlsx"
                                            role="button"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )
                        }}
                    />

                    <InputField control={control} name="name" label="Name" />
                    <InputField control={control} name="email" label="Email"
                        componentProps={{
                            Input: {
                                type: "email"
                            }
                        }}
                    />
                    <Button type="submit" className="mt-4">
                        Send
                    </Button>
                </form>
            </Form>
        </div>
    );
}

export { CsvForm }
