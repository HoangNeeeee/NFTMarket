import {
    BrowserCategories,
    DiscoverNFT,
    HomeFooter,
    HomeHeading,
    TopCreator,
    TredingCollection,
    Usermanual,
} from "@/components"
import { Mashroom } from "@/components/Home/Mashroom"
import { Suspense } from "react"
export default function Page() {
    return (
        <main>
            <Suspense fallback={<div>...</div>}>
                <HomeHeading />
                <TredingCollection />
                <TopCreator />
                <BrowserCategories />
                <DiscoverNFT />
                <Usermanual />
                <Mashroom />
                <HomeFooter />
            </Suspense>
        </main>
    )
}
