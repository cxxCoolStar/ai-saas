import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <p>Dashboard Page (Protected)</p>
      <UserButton afterSignOutUrl='/'/>
    </div>
  )
}
