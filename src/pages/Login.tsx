'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function Login() {
  return (
    <div className='w-full h-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]'>
      <div className='hidden lg:block mt-auto mb-auto ml-36'>
        <img
          src='../../public/stark_industries_logo.jpg'
          alt='Image'
          className='w-full object-cover dark:brightness-[0.2] dark:grayscale'
        />
      </div>
      <div className='flex items-center justify-center pb-12'>
        <div className='mx-auto grid w-[350px] gap-6'>
          <div className='grid gap-4 text-center'>
            <h1 className='text-3xl text-gray-700 font-bold'>Login</h1>
            <p className='text-balance text-muted-foreground'>
              Introduzca sus credenciales a continuación para acceder
            </p>
          </div>
          <div className='grid gap-6'>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                placeholder='tonystark@starkindustries.com'
                required
              />
            </div>
            <div className='grid gap-2'>
              <div className='flex items-center'>
                <Label htmlFor='password'>Password</Label>
              </div>
              <Input
                id='password'
                type='password'
                placeholder='**********'
                required
              />
            </div>
            <Button type='submit' className='w-full bg-gray-800'>
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
