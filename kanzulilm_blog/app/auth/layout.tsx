import { buttonVariants } from "@/components/ui/button"
import { LinkIcon } from "lucide-react"
import Link from "next/link"
import { ReactNode } from "react"

function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="absolute top-5 left-5">
                <Link href="/" className={buttonVariants({ variant: "secondary" })}>
                    <LinkIcon className="size-4" />
                    Go to Home
                </Link>
            </div>
            <div className="w-full max-w-md mx-auto ">{children}</div>
        </div>
    )
}

export default AuthLayout