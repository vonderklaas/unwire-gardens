import { auth } from "@clerk/nextjs/server";

export default async function Home() {
    const { userId } = await auth();
    const isSignedIn = !!userId;

    return (
        <div className="grid items-center justify-items-center min-h-[calc(100vh-64px)] p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <div className="max-w-2xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-6">Welcome!</h1>

                {isSignedIn ? (
                    <div className="bg-green-50 p-6 rounded-lg shadow-sm">
                        <h2 className="text-2xl font-semibold text-green-800">You&apos;re signed in!</h2>
                    </div>
                ) : (
                    <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
                        <h2 className="text-2xl font-semibold text-blue-800">Sign in to get started 👆</h2>
                    </div>
                )}
            </div>
        </div>
    );
}
