"use client";

import {
    SignInButton,
    UserButton,
    useUser
} from "@clerk/nextjs";
import Link from "next/link";

export default function Header() {
    const { isSignedIn, user } = useUser();

    return (
        <header className="w-full py-4 px-6 flex items-center justify-between bg-white shadow-sm">
            <div className="flex items-center gap-2">
                <Link href="/" className="text-xl font-bold">
                    Unwire Gardens
                </Link>
            </div>

            <div className="flex items-center gap-4">
                {isSignedIn ? (
                    <div className="flex items-center gap-4">
                        <span className="text-sm">
                            Hello, {user?.firstName || user?.emailAddresses?.[0]?.emailAddress?.split('@')?.[0] || 'User'}
                        </span>
                        <UserButton
                            appearance={{
                                elements: {
                                    avatarBox: "h-10 w-10 rounded-full border-2 border-green-500"
                                }
                            }}
                        />
                    </div>
                ) : (
                    <SignInButton mode="modal">
                        <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                            Sign in
                        </button>
                    </SignInButton>
                )}
            </div>
        </header>
    );
} 