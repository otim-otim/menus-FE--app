import {} from 'react'
import {selectedMenuState, selectedParentMenuState } from '@/store'
import {useRecoilState, useRecoilValue} from 'recoil'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


const formSchema = z.object({
    parentId: z.string().nullable(),
    menuName: z.string().min(2, {
      message: "Menu name must be at least 2 characters.",
    }),
  })

export default function CreateMenu({ context = 'child' }: { context?: 'child' | 'parent' }) {

    const selectedMenu = useRecoilValue(selectedMenuState)
    const selectedParentMenu = useRecoilValue(selectedParentMenuState)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            menuName: selectedMenu?.name || '',
            parentId: selectedParentMenu?.id || '',
        },
      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }

    return (
        <Form {...form}  >
            <div className="w-3/4 pl-20">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormItem>
          <FormLabel>Menu ID</FormLabel>
          <FormControl>
            <Input value={selectedMenu?.id || ''} readOnly  />
          </FormControl>
        </FormItem>
        

       
          <FormField
            control={form.control}
            name="ParentId"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type='hidden' {...field} />
                </FormControl>                
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormItem>
          <FormLabel>Depth</FormLabel>
          <FormControl>
            <Input value={selectedMenu?.depth || ''} readOnly />
          </FormControl>
        </FormItem>
          <FormItem>
          <FormLabel>Parent Data</FormLabel>
          <FormControl>
            <Input value={selectedParentMenu?.name || ''} readOnly />
          </FormControl>
        </FormItem>
          <FormField
            control={form.control}
            name="menuName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>name</FormLabel>
                <FormControl>
                  <Input placeholder="menu name" {...field} />
                </FormControl>                
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className='w-full bg-blue-600 border rounded-lg mt-4' type="submit" >Save</Button>
        </form>
          </div>
      </Form>
    )


}