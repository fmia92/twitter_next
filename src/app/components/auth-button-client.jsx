'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { GithubIcon } from './icons'
import { useRouter } from 'next/navigation'
import { Button } from '@nextui-org/button'

export function AuthButton ({ session }) {
  const supabase = createClientComponentClient()
  const router = useRouter()

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback'
      }
    })
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
        <header>
            {
                session === null
                  ? (<button onClick={handleSignIn} type="button"
                        className="text-white bg-[#24292F] focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg
                            text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-gray-50 mr-2 mb-2">
                            <GithubIcon />
                            Sign in with Github
                    </button>
                    )
                  : (
                    <Button onClick={handleSignOut} color="danger" variant="bordered">Sign out</Button>
                    )
            }

        </header>
  )
}
